const API_URL = "http://54.183.117.17:5000/products";

let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (err) {
        console.error("Error fetching products:", err);
    }
}

function viewProduct(id) {
    const selected = allProducts.find(p => p.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(selected));
    window.location.href = "products.html";
}

fetchProducts();
