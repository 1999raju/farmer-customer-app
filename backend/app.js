const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* TEST route */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* PRODUCTS API */
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Tomato", price: 20 },
    { id: 2, name: "Potato", price: 15 },
    { id: 3, name: "Onion", price: 25 }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
