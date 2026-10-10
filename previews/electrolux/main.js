/* 
   ElectroLux Interactive Core - main.js (V2.0 - Optimized)
   Handles: 
   - Multi-language (EN/AR) toggle
   - Theme switching (Light/Dark)
   - Dynamic Cart Logic (Add, Remove, Update)
   - Persistent LocalStorage
   - Real-time Product Syncing
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Management ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') body.classList.add('light-mode');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }

    // --- 2. Cart Logic ---
    let cart = JSON.parse(localStorage.getItem('electrolux_cart')) || [];

    const updateCartCounter = () => {
        const counters = document.querySelectorAll('.cart-count');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        counters.forEach(counter => {
            counter.textContent = totalItems;
            counter.classList.toggle('hidden', totalItems === 0);
        });
    };

    const saveCart = () => {
        localStorage.setItem('electrolux_cart', JSON.stringify(cart));
        updateCartCounter();
        if (document.getElementById('cart-items-container')) renderCart();
    };

    // Global Add to Cart
    window.addToCart = (id, name, price, image) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, image, quantity: 1 });
        }
        saveCart();
        showNotification(`${name} has been added to your cart.`);
    };

    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        saveCart();
    };

    window.updateQuantity = (id, delta) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) return removeFromCart(id);
            saveCart();
        }
    };

    // Render Cart Content
    const renderCart = () => {
        const container = document.getElementById('cart-items-container');
        const emptyMsg = document.getElementById('empty-cart-message');
        const summary = document.getElementById('order-summary');

        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = '';
            if (emptyMsg) emptyMsg.classList.remove('hidden');
            if (summary) summary.classList.add('hidden');
            return;
        }

        if (emptyMsg) emptyMsg.classList.add('hidden');
        if (summary) summary.classList.remove('hidden');

        let subtotal = 0;
        container.innerHTML = cart.map(item => {
            const total = item.price * item.quantity;
            subtotal += total;
            return `
                <div class="flex items-center justify-between p-6 border-b border-white/5 animate-fade-in">
                    <div class="flex items-center gap-6">
                        <img src="${item.image}" class="w-20 h-20 object-cover rounded-lg bg-zinc-900 border border-white/5">
                        <div>
                            <h3 class="text-white font-bold">${item.name}</h3>
                            <p class="text-zinc-500">$${item.price.toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-8">
                        <div class="flex items-center gap-4 bg-zinc-900 rounded-full px-4 py-2 border border-white/5">
                            <button onclick="updateQuantity('${item.id}', -1)" class="text-zinc-500 hover:text-white">-</button>
                            <span class="text-white font-mono w-4 text-center">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)" class="text-zinc-500 hover:text-white">+</button>
                        </div>
                        <p class="text-white font-bold">$${total.toLocaleString()}</p>
                        <button onclick="removeFromCart('${item.id}')" class="text-zinc-700 hover:text-red-500 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        if (summary) {
            const tax = subtotal * 0.08;
            const total = subtotal + tax;
            document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString()}`;
            document.getElementById('tax').textContent = `$${tax.toLocaleString()}`;
            document.getElementById('total-price').textContent = `$${total.toLocaleString()}`;
        }
    };

    // UI Feedback
    const showNotification = (msg) => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-10 right-10 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-2xl z-[100] animate-slide-up';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

    // --- 3. Initial Load ---
    updateCartCounter();
    if (document.getElementById('cart-items-container')) renderCart();
});