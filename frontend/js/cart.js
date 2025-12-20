function placeOrder() {
const cart = JSON.parse(localStorage.getItem('cart')) || [];
fetch('http://localhost:5000/order', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ items: cart, date: new Date() })
})
.then(() => {
alert('Order placed');
localStorage.removeItem('cart');
});
}