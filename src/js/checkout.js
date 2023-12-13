import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

// checkoutProcess.init("so-cart", ".checkout-summary");

// document
//   .querySelector("#zip")
//   .addEventListener(
//     "blur",
//     checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
//   );

// // this is how it would look if we listen for the submit on the form
// document.forms["checkout"].addEventListener("submit", (e) => {
//   e.preventDefault();
//   // e.target would contain our form in this case
//   checkoutProcess.checkout(e.target);
// });



document.addEventListener('DOMContentLoaded', function () {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const form = document.forms.checkout;

  function calculateTotals() {
    const cartTotalElement = document.getElementById('cartTotal');
    const numItemsElement = document.getElementById('num-items');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const orderTotalElement = document.getElementById('orderTotal');

    const itemSubtotal = cartItems.reduce((total, item) => total + item.price, 0);
    const numItems = cartItems.length;
    const shipping = 10; // You can adjust the shipping cost
    const taxRate = 0.08; // You can adjust the tax rate

    const tax = itemSubtotal * taxRate;
    const orderTotal = itemSubtotal + shipping + tax;

    cartTotalElement.textContent = `$${itemSubtotal.toFixed(2)}`;
    numItemsElement.textContent = numItems;
    shippingElement.textContent = `$${shipping.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    orderTotalElement.textContent = `$${orderTotal.toFixed(2)}`;
  }

  function fillForm() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
      for (const key in formData) {
        const inputElement = form.elements[key];
        if (inputElement) {
          inputElement.value = formData[key];
        }
      }
    }
  }

  function saveFormDataToLocalStorage() {
    const formData = {};
    for (const element of form.elements) {
      if (element.name) {
        formData[element.name] = element.value;
      }
    }
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  function clearOrderAndFormData() {
    localStorage.removeItem('cart');
    localStorage.removeItem('formData');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    saveFormDataToLocalStorage();
    alert('Order placed successfully!');
    clearOrderAndFormData();
  });

  calculateTotals();
  fillForm();
});