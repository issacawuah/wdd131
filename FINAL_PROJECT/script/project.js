let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.getElementById('add-to-cart').addEventListener('click', () => {
    const productName = document.getElementById('product-name').value;
    const productAmount = parseInt(document.getElementById('product-amount').value);

    if (productName && productAmount > 0) {
        const cartItem = { name: productName, amount: productAmount };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} added to cart.`);
        document.getElementById('product-name').value = '';
        document.getElementById('product-amount').value = '';
    } else {
        alert('Please enter a valid product name and amount.');
    }
});
