const productsDiv = document.getElementById("products");

async function fetchProducts() {
  try {
    const res = await fetch("http://3.101.33.127:5000/products");
    const products = await res.json();
    renderProducts(products);
  } catch (err) {
    console.error(err);
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
      <button onclick='openProduct(${JSON.stringify(p)})'>
        View Product
      </button>
    `;

    productsDiv.appendChild(card);
  });
}

// store clicked product & open new page
function openProduct(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}

fetchProducts();
