// Add to Cart functionality
function addToCart(productName) {
    const quantity = document.getElementById('quantity').value;
    const size = document.getElementById('size').value;
    // Add logic to update cart
    alert(`${quantity} ${productName} (Size: ${size}) added to cart!`);
    updateCartCount();
}

// Buy Now functionality
function buyNow(productName) {
    const quantity = document.getElementById('quantity').value;
    const size = document.getElementById('size').value;
    // Redirect to checkout
    window.location.href = `checkout.html?product=${encodeURIComponent(productName)}&quantity=${quantity}&size=${size}`;
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = count + 1;
}

// Star rating functionality
const stars = document.querySelectorAll('.star-rating .star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        stars.forEach((s, index) => {
            s.textContent = index < value ? '★' : '☆';
        });
    });
});

// Review form submission
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const rating = document.querySelectorAll('.star-rating .star[textContent="★"]').length;
    const reviewText = document.getElementById('reviewText').value;
    // Add logic to save review
    alert('Thank you for your review!');
    this.reset();
});