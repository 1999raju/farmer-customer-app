function placeOrder() {
  if(cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  document.querySelector(".cart").innerText = "🛒 Cart";
}
