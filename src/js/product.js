import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId);

document.getElementById('addToCart').addEventListener('click', function() {
    // Get product details
    const productName = "Grilled Honey-Lime Salmon with Mango Salsa";
    const price = 11.19;

    // Create a cart item object
    const cartItem = { name: productName, price: price };

    // Retrieve existing cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(cartItem);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user that the product has been added to the cart
    alert('Product added to cart!');
  });