const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors()); // Critical: Allows frontend access
app.use(express.json());

// API to get all products
app.get('/api/products', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));
    res.json(data);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
