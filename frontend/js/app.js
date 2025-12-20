fetch('http://localhost:5000/products')
.then(res => res.json())
.then(data => displayProducts(data));


function displayProducts(products) {
const div = document.getElementById('products');
div.innerHTML = '';
products.forEach(p => {
div.innerHTML += `
<div class="card">
<h3>${p.name}</h3>
<p>₹${p.price} / 1 KG</p>
<button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
</div>`;
});
}


function addToCart(name, price) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ name, price, qty: 1 });
localStorage.setItem('cart', JSON.stringify(cart));
alert('Added to cart');
}