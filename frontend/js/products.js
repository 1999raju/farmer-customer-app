const API_URL = "http://localhost:5000/api/products"; // Use localhost, NOT 'backend'
let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (err) {
        console.error("Failed to fetch products:", err);
    }
}

function displayProducts(products) {
    const container = document.getElementById("product-list");
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" width="100">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="viewProduct(${p.id})">View Details</button>
        </div>
    `).join('');
}

// Search Functionality
function searchProducts() {
    const term = document.getElementById("searchBar").value.toLowerCase();
    const filtered = allProducts.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
}

// Save to localStorage for individual page
function viewProduct(id) {
    const selected = allProducts.find(p => p.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(selected));
    window.location.href = "products.html";
}

fetchProducts();
