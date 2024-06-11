// script.js

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartElement = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    function renderCart() {
        cartElement.innerHTML = '';
        let total = 0;
        
        cartItems.forEach((item, index) => {
            total += item.price * item.quantity;
            
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <div>
                    <button class="decrease-quantity" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-index="${index}">+</button>
                    <span>${item.price * item.quantity}jd</span>
                </div>
                <button class="remove-item" data-index="${index}">✕</button>
            `;
            
            cartElement.appendChild(itemElement);
        });
        
        totalPriceElement.textContent = total;
    }
    
    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    
    document.querySelector('.product-list').addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productElement = event.target.closest('.product');
            const productId = productElement.dataset.id;
            const productPrice = parseInt(productElement.dataset.price);
            const productName = productElement.querySelector('p').textContent;
            const productImage = productElement.querySelector('img').src;
            
            const existingItem = cartItems.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1,
                    image: productImage
                });
            }
            
            updateLocalStorage();
            renderCart();
        }
    });
    
    cartElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.dataset.index;
            cartItems.splice(index, 1);
            updateLocalStorage();
            renderCart();
        } else if (event.target.classList.contains('increase-quantity')) {
            const index = event.target.dataset.index;
            cartItems[index].quantity += 1;
            updateLocalStorage();
            renderCart();
        } else if (event.target.classList.contains('decrease-quantity')) {
            const index = event.target.dataset.index;
            if (cartItems[index].quantity > 1) {
                cartItems[index].quantity -= 1;
                updateLocalStorage();
                renderCart();
            }
        }
    });
    
    document.querySelector('.save').addEventListener('click', () => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
        alert('Cart saved to session storage');
    });

    renderCart();
});
