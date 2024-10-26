let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `<h4>${item.name} (x${item.amount})</h4>`;
        cartItemsDiv.appendChild(cartItem);
    });

    // Display balance (if applicable)
    const totalAmount = cart.reduce((total, item) => total + item.amount, 0);
    const balanceDiv = document.getElementById('balance');
    balanceDiv.innerHTML = `<strong>Total Items: ${totalAmount}</strong>`;
}

// Checkout functionality
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to checkout.');
        return;
    }
    
    alert('Proceeding to checkout. Thank you for your purchase!');
    // Optionally, clear the cart after checkout
    localStorage.removeItem('cart');
    cart = []; // Clear cart in memory
    displayCart(); // Refresh display
});

// Display cart items on page load
if (document.getElementById('cart-items')) {
    displayCart();
}
