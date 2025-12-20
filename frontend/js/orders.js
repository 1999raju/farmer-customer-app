fetch('http://localhost:5000/orders')
.then(res => res.json())
.then(data => {
const div = document.getElementById('orders');
if (data.length === 0) {
div.innerHTML = '<p>No orders yet</p>';
}
data.forEach(order => {
div.innerHTML += `<div class="card">
<p>Order Date: ${new Date(order.date).toLocaleString()}</p>
<p>Items: ${order.items.length}</p>
</div>`;
});
});