// frontend/js/app.js
const productsDiv = document.getElementById("products");

async function fetchProducts() {
  try {
    // Use container name instead of localhost
    const res = await fetch("http://farmer-backend:5000/products");
    const products = await res.json();
    window.allProducts = products;
    renderProducts(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    productsDiv.innerHTML = "<p>Failed to load products.</p>";
  }
}

function renderProducts(list) {
  productsDiv.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price} / kg</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;
    productsDiv.appendChild(card);
  });
}

function filterProducts(type) {
  if (!window.allProducts) return;
  if (type === "All") renderProducts(window.allProducts);
  else renderProducts(window.allProducts.filter(p => p.type === type));
}

function addToCart(name, price) {
  alert(`${name} added to cart at ₹${price}/kg`);
}

fetchProducts();
