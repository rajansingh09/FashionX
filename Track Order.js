document.addEventListener('DOMContentLoaded', function() {
    const trackBtn = document.querySelector('.track-btn');
    const orderIdInput = document.getElementById('orderId');
    const orderDetails = document.querySelectorAll('.order-details p');
    const statusSteps = document.querySelectorAll('.status-step');

    trackBtn.addEventListener('click', function() {
        const orderId = orderIdInput.value.trim();
        
        if (!orderId) {
            alert('Please enter your order ID');
            return;
        }

        // Simulate fetching order details (replace with actual API call)
        const mockOrderData = {
            id: 'ORD123456',
            date: '2023-10-01 10:00 AM',
            amount: '₹1,499.00',
            address: '123 Main St, Mumbai, Maharashtra 400001',
            status: 'shipped'
        };

        // Update order details
        orderDetails[0].textContent = mockOrderData.id;
        orderDetails[1].textContent = mockOrderData.date;
        orderDetails[2].textContent = mockOrderData.amount;
        orderDetails[3].textContent = mockOrderData.address;

        // Update status timeline
        statusSteps.forEach(step => {
            step.classList.remove('completed', 'active');
            if (step.querySelector('p').textContent.toLowerCase() === 'order placed') {
                step.classList.add('completed');
            }
            if (step.querySelector('p').textContent.toLowerCase() === mockOrderData.status) {
                step.classList.add('active');
            }
        });

        // Show the order status container
        document.querySelector('.order-status-container').style.display = 'block';
    });
});

// Add event listener for Enter key in order ID input field
orderIdInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        trackBtn.click();
    }
});

// Add input validation for order ID
orderIdInput.addEventListener('input', function() {
    // Allow only alphanumeric characters and dashes
    this.value = this.value.replace(/[^a-zA-Z0-9-]/g, '');
});

// Add focus styles for better UX
orderIdInput.addEventListener('focus', function() {
    this.style.borderColor = '#ff6b81';
    this.style.boxShadow = '0 0 0 3px rgba(255, 107, 129, 0.2)';
});

orderIdInput.addEventListener('blur', function() {
    this.style.borderColor = '#ddd';
    this.style.boxShadow = 'none';
});

// Add loading state for track button
trackBtn.addEventListener('click', function() {
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tracking...';
    this.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        this.innerHTML = 'Track Order <i class="fas fa-search"></i>';
        this.disabled = false;
    }, 1000);
});
