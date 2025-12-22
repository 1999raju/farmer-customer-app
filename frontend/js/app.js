const productsData = [
  {
    name: "Tomato",
    type: "Vegetable",
    price: 30,
    image: "https://via.placeholder.com/200x120?text=Tomato"
  },
  {
    name: "Potato",
    type: "Vegetable",
    price: 25,
    image: "https://via.placeholder.com/200x120?text=Potato"
  },
  {
    name: "Apple",
    type: "Fruit",
    price: 120,
    image: "https://via.placeholder.com/200x120?text=Apple"
  },
  {
    name: "Banana",
    type: "Fruit",
    price: 50,
    image: "https://via.placeholder.com/200x120?text=Banana"
  }
];

const productsDiv = document.getElementById("products");

function renderProducts(list) {
  productsDiv.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price} / kg</p>
      <button>Add to Cart</button>
    `;

    productsDiv.appendChild(card);
  });
}

function filterProducts(type) {
  if (type === "All") {
    renderProducts(productsData);
  } else {
    renderProducts(productsData.filter(p => p.type === type));
  }
}

renderProducts(productsData);
