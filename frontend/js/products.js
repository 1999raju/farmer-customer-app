const API_URL = "http://54.176.136.88:5000/products";

let allProducts = [];

console.log("✅ products.js loaded"); // test that JS is loading

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Products received:", data);

        allProducts = data;
        displayProducts(allProducts);
    } catch (err) {
        console.error("Error fetching products:", err);
    }
}

function displayProducts(products) {
    const container = document.getElementById("products");
    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <img src="${product.image || 'https://via.placeholder.com/150'}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="viewProduct(${product.id})">View</button>
        `;
        container.appendChild(div);
    });
}

function viewProduct(id) {
    const selected = allProducts.find(p => p.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(selected));
    window.location.href = "products.html";
}

fetchProducts();
