import {featureproducts} from './response.js';
import {latestproducts} from './response.js';
console.log(featureproducts,'ghg')
// const featuredProductsContainer = document.querySelector('.row1');
// const latestProductsContainer = document.querySelector('.row2');

// const latestGrid = document.querySelector('.row3');

featureproducts.forEach((product) => {
  const productHTML = `
    <div class="col-4">
      <img src="${product.image}" />
      <h4>${product.name}</h4>
      <div class="rating">
        ${getRatingHTML(product.rating)}
      </div>
      <p>$${product.price}.00</p>
    </div>
  `;
  featuredProductsContainer.innerHTML += productHTML;
});

latestproducts.forEach((product) => {
  const productHTML = `
    <div class="col-4">
      <img src="${product.image}" />
      <h4>${product.name}</h4>
      <div class="rating">
        ${getRatingHTML(product.rating)}
      </div>
      <p>$${product.price}.00</p>
    </div>
  `;
  latestProductsContainer.innerHTML += productHTML;
});


function getRatingHTML(rating) {
  let ratingHTML = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingHTML += '<i class="fa fa-star"></i>';
    } else {
      ratingHTML += '<i class="fa fa-star-o"></i>';
    }
  }
  return ratingHTML;
}

// Cart functionality

// {featureproducts.map((product) => (
//   `<div class="product-item" key=${product.id}>
//     <img src="${product.image}" alt="${product.name}" />
//     <h3>${product.name}</h3>
//     <p>$${product.price}</p>
//     <button data-id=${product.id}>Add to Cart</button>
//   </div>`
// ))}

// Cart functionality
// let cart = [];

// function addToCart(productId) {
//   const product = featureproducts.find((product) => product.id === productId);
//   if (product) {
//     cart.push(product);
//     console.log(`Product ${product.name} added to cart`);
//     // displayCart();
//     window.location.href = 'cart.html';
//   } else {
//     console.log("Product not found");
//   }
// }

// function displayCart() {
//   const cartTable = document.getElementById('cart-table');
//   let cartHtml = '';
//   cart.forEach((product) => {
//     cartHtml += `
//       <tr>
//         <td>${product.name}</td>
//         <td>${product.quantity}</td>
//         <td>${product.price}</td>
//       </tr>
//     `;
//   });
//   cartTable.innerHTML = cartHtml;
// }

// Add this function to update the cart when the page loads
function loadCart() {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = storedCart;
  displayCart();
}

// Add this function to save the cart when a product is added
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function calculateSubtotal() {
  return cart.reduce((total, product) => total + product.price, 0);
}

function calculateTax() {
  return calculateSubtotal() * 0.07;
}

function calculateTotal() {
  return calculateSubtotal() + calculateTax();
}
function removeFromCart(productId) {
  cart = cart.filter((product) => product.id !== productId);
  displayCart();
}
displayCart();
loadCart();