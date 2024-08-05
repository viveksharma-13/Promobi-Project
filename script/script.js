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