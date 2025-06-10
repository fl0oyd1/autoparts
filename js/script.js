// Завантаження товарів
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Турбокомпресор', price: 12500, category: 'Двигуни' },
        { id: 2, name: 'Гальмівні колодки', price: 850, category: 'Гальма' }
    ];

    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="images/product-${product.id}.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} грн</p>
            <button class="add-to-cart" data-id="${product.id}">В кошик</button>
        `;
        productGrid.appendChild(productCard);
    });
});
