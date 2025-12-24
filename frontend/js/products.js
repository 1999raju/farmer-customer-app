const productDiv = document.getElementById("product");
const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (!product) {
  productDiv.innerHTML = "<p>No product selected</p>";
} else {
  productDiv.innerHTML = `
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <p>Price: ₹${product.price} / kg</p>

    <button onclick="addToCart()">Add to Cart</button>
    <button onclick="buyNow()">Buy Now</button>
  `;
}

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function buyNow() {
  alert("Order placed for " + product.name);
}
