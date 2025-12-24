let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.querySelector(".cart").innerText = `🛒 Cart (${cart.length})`;
}
