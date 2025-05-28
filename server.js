require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Store for download tokens
const downloadTokens = {};

// Create a secure downloads directory if it doesn't exist
const downloadsDir = path.join(__dirname, 'secure-downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// Store purchase records
const purchaseRecordsPath = path.join(__dirname, 'purchase-records.json');
if (!fs.existsSync(purchaseRecordsPath)) {
  fs.writeFileSync(purchaseRecordsPath, JSON.stringify([]), 'utf8');
}

// Helper to save purchase record
const savePurchaseRecord = (email, productId, timestamp) => {
  try {
    const records = JSON.parse(fs.readFileSync(purchaseRecordsPath, 'utf8'));
    records.push({ email, productId, timestamp });
    fs.writeFileSync(purchaseRecordsPath, JSON.stringify(records, null, 2), 'utf8');
    console.log(`Purchase record saved for ${email}`);
  } catch (error) {
    console.error('Error saving purchase record:', error);
  }
};

// Create a checkout session
app.post('/create-checkout-session', async (req, res) => {
  const { productId, productName, productPrice, productImage, customerEmail } = req.body;
  
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
              images: [productImage],
            },
            unit_amount: productPrice * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      customer_email: customerEmail,
      metadata: {
        productId,
        customerEmail
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verify session and generate download token
app.post('/verify-session', async (req, res) => {
  const { sessionId } = req.body;
  
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status === 'paid') {
      const token = uuidv4();
      const productId = session.metadata.productId;
      const email = session.metadata.customerEmail || session.customer_details.email;
      
      // Save token with expiration (10 minutes)
      downloadTokens[token] = {
        productId,
        email,
        expires: Date.now() + 10 * 60 * 1000, // 10 minutes
        used: false
      };
      
      // Save purchase record
      savePurchaseRecord(email, productId, new Date().toISOString());
      
      res.json({ valid: true, token, email });
    } else {
      res.json({ valid: false, message: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Error verifying session:', error);
    res.status(500).json({ valid: false, error: error.message });
  }
});

// Download route with token verification
app.get('/download/:token', (req, res) => {
  const { token } = req.params;
  const tokenData = downloadTokens[token];
  
  if (!tokenData) {
    return res.status(404).send('Download token not found or expired');
  }
  
  if (tokenData.used) {
    return res.status(403).send('Download token has already been used');
  }
  
  if (tokenData.expires < Date.now()) {
    delete downloadTokens[token];
    return res.status(403).send('Download token has expired');
  }
  
  const productId = tokenData.productId;
  const filePath = path.join(downloadsDir, `${productId}.zip`);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found');
  }
  
  // Mark token as used
  tokenData.used = true;
  
  // Send file
  res.download(filePath, `${productId}.zip`, (err) => {
    if (err) {
      console.error('Download error:', err);
      // If download fails, reset the token to allow retry
      if (downloadTokens[token]) {
        downloadTokens[token].used = false;
      }
    }
  });
});

// Webhook endpoint for Stripe events
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const productId = session.metadata.productId;
    const email = session.metadata.customerEmail || session.customer_details.email;
    
    // Save purchase record
    savePurchaseRecord(email, productId, new Date().toISOString());
    
    console.log(`Payment successful for ${email}, product: ${productId}`);
  }

  res.json({ received: true });
});

// Upload a source code file (admin only, would need authentication in production)
app.post('/upload-source-code', (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send('No file uploaded');
  }
  
  const { productId } = req.body;
  const file = req.files.file;
  
  if (!productId) {
    return res.status(400).send('Product ID is required');
  }
  
  const uploadPath = path.join(downloadsDir, `${productId}.zip`);
  
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(500).send(err);
    }
    
    res.send('File uploaded successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
