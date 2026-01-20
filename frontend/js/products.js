function displayProducts(products) {
    const container = document.getElementById("product-list");

    if (!container) {
        console.error("❌ product-list div not found");
        return;
    }

    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
        `;
        container.appendChild(div);
    });
}
