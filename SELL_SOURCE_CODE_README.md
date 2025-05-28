# Sell Source Code Feature

## Overview

This feature allows users to purchase and download source code packages directly from your website. It includes:

- Product listing page with details and pricing
- Secure payment processing with Stripe
- Token-based secure file delivery
- Purchase tracking

## Setup Instructions

### 1. Stripe Configuration

1. Create a Stripe account at [stripe.com](https://stripe.com) if you don't have one
2. Get your API keys from the Stripe Dashboard
3. Update the following environment variables in `.env`:
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
4. Also update `REACT_APP_STRIPE_PUBLISHABLE_KEY` in `.env.development`

### 2. Webhook Setup

1. In the Stripe Dashboard, go to Developers > Webhooks
2. Add an endpoint with your site URL + `/webhook`
   - For local testing, use [Stripe CLI](https://stripe.com/docs/stripe-cli) or a service like ngrok
3. Add the webhook signing secret to `.env` as `STRIPE_WEBHOOK_SECRET`

### 3. Source Code Files

1. Place your ZIP files in the `secure-downloads` directory
2. Name the files to match the product IDs in the `SourceCodeProducts.tsx` component
   - Example: `portfolio-template.zip`, `ecommerce-starter.zip`, etc.

### 4. Product Images

1. Add product images to `public/images/products/`
2. Name the files to match the image paths in the `SourceCodeProducts.tsx` component
   - Example: `portfolio-template.jpg`, `ecommerce-starter.jpg`, etc.

### 5. Running the Application

To run both the React frontend and Express backend concurrently:

```bash
npm run dev:full
```

Or run them separately:

```bash
# Terminal 1: Start the Express server
npm run server

# Terminal 2: Start the React app
npm run dev
```

## Security Considerations

- The download tokens expire after 10 minutes or one use
- Files are stored outside the public directory for security
- Payment verification happens on the server side
- Stripe webhooks are validated with signatures

## Customization

### Adding New Products

To add new source code products, edit the `products` array in `src/components/sections/SourceCodeProducts.tsx`.

### Styling

The feature uses your existing website's styling through the Layout component. You can customize the appearance by modifying the respective component files.

### Email Notifications

For a production environment, consider adding email notifications to notify customers of their purchase and provide download links.

## Troubleshooting

- If downloads aren't working, check that the file paths in `server.js` match your actual file structure
- For Stripe issues, verify your API keys and check the Stripe Dashboard for error logs
- If the webhook isn't receiving events, verify your webhook secret and endpoint URL
