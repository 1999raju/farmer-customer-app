const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Paths to JSON files
const productsFile = path.join(__dirname, 'data/products.json');
const ordersFile = path.join(__dirname, 'data/orders.json');

// GET all products
app.get('/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsFile));
  res.json(products);
});

// GET all orders
app.get('/orders', (req, res) => {
  const orders = JSON.parse(fs.readFileSync(ordersFile));
  res.json(orders);
});

// POST a new order
app.post('/orders', (req, res) => {
  const orders = JSON.parse(fs.readFileSync(ordersFile));
  orders.push(req.body);
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
  res.json({ message: 'Order placed successfully' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
