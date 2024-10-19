const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

// Populate the product name select options
const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Set up localStorage counter
if (!localStorage.getItem('reviewCount')) {
    localStorage.setItem('reviewCount', 0);
}

document.getElementById('reviewForm').onsubmit = function() {
    let count = parseInt(localStorage.getItem('reviewCount'));
    localStorage.setItem('reviewCount', count + 1);
};
