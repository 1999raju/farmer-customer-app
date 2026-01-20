function displayProducts(products) {
    const container = document.getElementById("products");

    if (!container) {
        console.error("Products container not found");
        return;
    }

    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="viewProduct(${product.id})">View</button>
        `;
        container.appendChild(div);
    });
}
