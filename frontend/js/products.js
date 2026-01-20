const API_URL = "http://localhost:5000/api/products"; 
let allProducts = [];

// ... (fetchProducts, searchProducts, displayProducts functions from previous response)
// Make sure to use the displayProducts and searchProducts functions provided in the prior response.

// Function to handle clicking a product to view details
function viewProduct(id) {
    const selected = allProducts.find(p => p.id === id);
    // Saves data to local storage before navigating
    localStorage.setItem("selectedProduct", JSON.stringify(selected)); 
    window.location.href = "products.html"; // Navigate to the details page
}

fetchProducts();
