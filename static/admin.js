function init() {

    document.getElementById('users').addEventListener('click', e => {
        window.location.href = 'users.html'
    });
    document.getElementById('products').addEventListener('click', e => {
        window.location.href = 'product.html'
    });
    document.getElementById('orders').addEventListener('click', e => {
        window.location.href = 'order.html'
    });

}