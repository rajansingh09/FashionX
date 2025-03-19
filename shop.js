// Function to handle category filter change
document.getElementById('category').addEventListener('change', function() {
    const selectedCategory = this.value;
    filterProductsByCategory(selectedCategory);
});

// Function to handle sort option change
document.getElementById('sort').addEventListener('change', function() {
    const sortOption = this.value;
    sortProducts(sortOption);
});

// Function to filter products by category
function filterProductsByCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productCategory = card.dataset.category || 'all';
        if (category === 'all' || productCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to sort products
function sortProducts(sortOption) {
    const productGrid = document.querySelector('.product-grid');
    const productCards = Array.from(productGrid.querySelectorAll('.product-card'));

    productCards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.discounted-price').textContent.replace('₹', '').replace(',', ''));
        const priceB = parseFloat(b.querySelector('.discounted-price').textContent.replace('₹', '').replace(',', ''));

        switch(sortOption) {
            case 'low-to-high':
                return priceA - priceB;
            case 'high-to-low':
                return priceB - priceA;
            case 'newest':
                return b.dataset.timestamp - a.dataset.timestamp;
            case 'popular':
            default:
                return b.dataset.popularity - a.dataset.popularity;
        }
    });

    // Clear and re-append sorted products
    productGrid.innerHTML = '';
    productCards.forEach(card => productGrid.appendChild(card));
}

// Initialize shop functionality
function initShop() {
    // Add event listeners and initial setup
    filterProductsByCategory('all');
    sortProducts('popular');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initShop);

// Add event listeners for filter and sort controls
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');

if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
        filterProductsByCategory(e.target.value);
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });
}

// Function to add product to wishlist
function addToWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`${productName} added to wishlist!`);
    } else {
        alert(`${productName} is already in your wishlist!`);
    }
}

// Function to update product cards with additional data attributes
function enhanceProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        // Add timestamp based on position (simulating new arrivals)
        card.dataset.timestamp = Date.now() - (index * 1000000);
        // Add random popularity score
        card.dataset.popularity = Math.floor(Math.random() * 100);
        // Add category based on product title (simple example)
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        if (title.includes('dress') || title.includes('blazer')) {
            card.dataset.category = 'women';
        } else if (title.includes('shirt') || title.includes('jacket')) {
            card.dataset.category = 'men';
        } else {
            card.dataset.category = 'all';
        }
    });
}

// Enhance product cards on initialization
enhanceProductCards();

// Function to filter products by category
function filterProductsByCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardCategory = card.dataset.category.toLowerCase();
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to sort products based on selected option
function sortProducts(sortBy) {
    const productGrid = document.querySelector('.product-grid');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    
    productCards.sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return b.dataset.timestamp - a.dataset.timestamp;
            case 'popular':
                return b.dataset.popularity - a.dataset.popularity;
            case 'low-to-high': {
                const priceA = parseFloat(a.querySelector('.discounted-price').textContent.replace('₹', ''));
                const priceB = parseFloat(b.querySelector('.discounted-price').textContent.replace('₹', ''));
                return priceA - priceB;
            }
            case 'high-to-low': {
                const priceA = parseFloat(a.querySelector('.discounted-price').textContent.replace('₹', ''));
                const priceB = parseFloat(b.querySelector('.discounted-price').textContent.replace('₹', ''));
                return priceB - priceA;
            }
            default:
                return 0;
        }
    });

    // Clear and re-append sorted products
    productGrid.innerHTML = '';
    productCards.forEach(card => productGrid.appendChild(card));
}

// Event listener for category filter
document.getElementById('category').addEventListener('change', (e) => {
    filterProductsByCategory(e.target.value);
});

// Event listener for sort filter
document.getElementById('sort').addEventListener('change', (e) => {
    sortProducts(e.target.value);
});

// Function to add product to wishlist
function addToWishlist(productName) {
    // Get existing wishlist from localStorage or initialize empty array
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if product is already in wishlist
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`${productName} added to wishlist!`);
    } else {
        alert(`${productName} is already in your wishlist!`);
    }
}

// Function to filter products by category
function filterProductsByCategory(category) {
    const productGrid = document.querySelector('.product-grid');
    const productCards = productGrid.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productCategory = card.dataset.category || 'all';
        if (category === 'all' || productCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize products with category data
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { title: 'Stylish Jacket', category: 'men' },
        { title: 'Elegant Dress', category: 'women' },
        { title: 'Casual Shirt', category: 'men' },
        { title: 'Trendy Jeans', category: 'women' }
    ];

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        const product = products[index];
        if (product) {
            card.dataset.category = product.category;
        }
    });
});

// Function to sort products based on selected option
function sortProducts(sortBy) {
    const productGrid = document.querySelector('.product-grid');
    const productCards = Array.from(productGrid.querySelectorAll('.product-card'));

    productCards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.discounted-price').textContent.replace('₹', ''));
        const priceB = parseFloat(b.querySelector('.discounted-price').textContent.replace('₹', ''));
        
        switch(sortBy) {
            case 'low-to-high':
                return priceA - priceB;
            case 'high-to-low':
                return priceB - priceA;
            case 'newest':
                return 0; // Placeholder for actual date-based sorting
            case 'popular':
                return 0; // Placeholder for actual popularity-based sorting
            default:
                return 0;
        }
    });

    // Clear and re-append sorted products
    productGrid.innerHTML = '';
    productCards.forEach(card => productGrid.appendChild(card));
}

// Event listeners for filter and sort controls
document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const sortSelect = document.getElementById('sort');

    categorySelect.addEventListener('change', () => {
        filterProductsByCategory(categorySelect.value);
    });

    sortSelect.addEventListener('change', () => {
        sortProducts(sortSelect.value);
    });
});
