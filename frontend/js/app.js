const productsDiv = document.getElementById("products");

// Fetch products from backend
async function fetchProducts() {
  try {
    const res = await fetch("http://localhost:5000/products"); // backend API
    const products = await res.json();
    window.allProducts = products; // store globally
    renderProducts(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    productsDiv.innerHTML = "<p>Failed to load products.</p>";
  }
}

// Render products dynamically
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

// Filter products by type
function filterProducts(type) {
  if (!window.allProducts) return;
  if (type === "All") renderProducts(window.allProducts);
  else renderProducts(window.allProducts.filter(p => p.type === type));
}

// Simple add to cart alert
function addToCart(name, price) {
  alert(`${name} added to cart at ₹${price}/kg`);
}

// Initial load
fetchProducts();
