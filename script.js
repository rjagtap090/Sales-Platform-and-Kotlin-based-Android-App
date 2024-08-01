document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productsDiv = document.getElementById('products');
            productsDiv.innerHTML = products.map(product => `
                <div class="product">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                </div>
            `).join('');
        });
});