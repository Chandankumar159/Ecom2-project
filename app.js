document.addEventListener('DOMContentLoaded', () => {
    let cart = []; // Initialize an empty cart

    // Add to Cart Function
    function addToCart(productId, productName, productPrice) {
        const product = {
            id: productId,
            name: productName,
            price: productPrice
        };
        cart.push(product);
        alert(`${product.name} added to cart!`);
        displayCart();
    }

    // Display Cart Items Function
    function displayCart() {
        const cartItemsDiv = document.querySelector('.cart-items');
        cartItemsDiv.innerHTML = ''; // Clear previous content

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<p>No items in cart</p>';
        } else {
            cart.forEach((product, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `${product.name} - $${product.price}`;
                
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    removeFromCart(index);
                });

                itemDiv.appendChild(removeButton);
                cartItemsDiv.appendChild(itemDiv);
            });
        }
    }

    // Remove from Cart Function
    function removeFromCart(index) {
        cart.splice(index, 1); // Remove the item at the given index
        displayCart();
    }

    // Form Validation Function
    function validateForm(event) {
        event.preventDefault(); // Prevent form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message!');
            event.target.reset(); // Reset the form
        } else {
            alert('Please fill in all fields.');
        }
    }

    // Add event listeners for Add to Cart buttons
    const buttons = document.querySelectorAll('.product-item button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
            addToCart(index + 1, productName, productPrice);
        });
    });
    // document.querySelectorAll('.product-item button').forEach((button, index) => {
    //     button.addEventListener('click', () => {
    //         const product = button.closest('.product-item');
    //         const productName = product.querySelector('h3').textContent;
    //         const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
    //         addToCart(index + 1, productName, productPrice);
    //     });
    // });
    

    // Add event listener for the contact form
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }

    // Initial display of cart
    displayCart();
});
