const express = require('express');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const PRODUCTS_FILE = path.join(__dirname, 'products.json');
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

app.use(cors());
app.use(express.json());

// Helper: Read/Write products
function readProducts() {
  if (!fs.existsSync(PRODUCTS_FILE)) return [];
  return JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf-8'));
}
function writeProducts(products) {
  try {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
  } catch (err) {
    console.error('Error writing products.json:', err);
    throw err;
  }
}

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { user, pass } = req.body;
  console.log('Login attempt:', user, pass);
  console.log('Env:', process.env.ADMIN_USER, process.env.ADMIN_PASS);
  if (
    user === process.env.ADMIN_USER &&
    pass === process.env.ADMIN_PASS
  ) {
    const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

// Auth middleware
function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  const token = auth.split(' ')[1];
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// CRUD for products
app.get('/api/products', requireAuth, (req, res) => {
  res.json(readProducts());
});
app.post('/api/products', requireAuth, (req, res) => {
  console.log('POST /api/products body:', req.body);
  const products = readProducts();
  const newProduct = { ...req.body, id: Date.now().toString() };
  products.push(newProduct);
  try {
    writeProducts(products);
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save product' });
  }
});
app.put('/api/products/:id', requireAuth, (req, res) => {
  let products = readProducts();
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  products[idx] = { ...products[idx], ...req.body };
  writeProducts(products);
  res.json(products[idx]);
});
app.delete('/api/products/:id', requireAuth, (req, res) => {
  let products = readProducts();
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const deleted = products.splice(idx, 1);
  writeProducts(products);
  res.json(deleted[0]);
});

app.get('/api/products-public', (req, res) => {
  res.json(readProducts());
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`)); 