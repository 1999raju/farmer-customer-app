const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
app.use(cors());
app.use(bodyParser.json());


// Get products
app.get('/products', (req, res) => {
const products = JSON.parse(fs.readFileSync('./data/products.json'));
res.json(products);
});


// Place order
app.post('/order', (req, res) => {
const orders = JSON.parse(fs.readFileSync('./data/orders.json'));
orders.push(req.body);
fs.writeFileSync('./data/orders.json', JSON.stringify(orders, null, 2));
res.json({ message: 'Order placed successfully' });
});


// Get orders
app.get('/orders', (req, res) => {
const orders = JSON.parse(fs.readFileSync('./data/orders.json'));
res.json(orders);
});


app.listen(5000, () => console.log('Backend running on port 5000'));