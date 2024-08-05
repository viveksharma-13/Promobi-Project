export const featureproducts = [
  {
    id: 1,
    name: "Red Printed T-Shirt",
    price: 50.00,
    image: "../assets/product-1.jpg",
    rating: 4,
    description: ""
  },
  {
    id: 2,
    name: "HRX Sports Shoes",
    price: 75.00,
    image: "../assets/product-2.jpg",
    rating: 4.5,
    description: ""
  },
  {
    id: 3,
    name: "HRX Gray Trackpants",
    price: 45.00,
    image: "../assets/product-3.jpg",
    rating: 4.5,
    description: ""
  },
  {
    id: 4,
    name: "Blue Printed T-Shirt",
    price: 55.00,
    image: "../assets/product-4.jpg",
    rating: 4,
    description: ""
  },
  {
    id: 5,
    name: "Puma Gray Sports Shoes",
    price: 95.00,
    image: "../assets/product-5.jpg",
    rating: 4,
    description: ""
  },
  {
    id: 6,
    name: "Black Printed T-Shirt",
    price: 55.00,
    image: "../assets/product-6.jpg",
    rating: 4.5,
    description: ""
  },
];

export const latestproducts = [
  {
    id: 7,
    name: "HRX Set of 3 Socks",
    price: 30.00,
    image: "../assets/product-7.jpg",
    rating: 4.5,
    description: ""
  },
  {
    id: 8,
    name: "Black Fossil Watch",
    price: 120.00,
    image: "../assets/product-8.jpg",
    rating: 4,
    description: ""
  },
  {
    id: 9,
    name: "Black Sportx Watch",
    price: 135.00,
    image: "../assets/product-9.jpg",
    rating: 4,
    description: ""
  },
  {
    id: 10,
    name: "Black HRX Shoes",
    price: 50.00,
    image: "../assets/product-10.jpg",
    rating: 4.5,
    description: ""
  },
  {
    id: 11,
    name: "Gray Nike Shoes",
    price: 55.00,
    image: "../assets/product-11.jpg",
    rating: 4.5,
    description: ""
  },
  {
    id: 12,
    name: "HRX Black Trackpants",
    price: 75.00,
    image: "../assets/product-12.jpg",
    rating: 4,
    description: ""
  }
];

function displayProducts(products) {
  const productContainer = document.getElementById('product-container');
  let indexHtml = '';
  products.forEach((product) => {
    indexHtml += `
      <div class="col-4" key={product.id}>
        <img src=${product.image} alt=${product.name} />
        <h3>${product.name}</h3>
        <p>${product.rating}</p>
        <p>$${product.price}</p>
        <button><a href="cart.html" onclick="addToCart(this.getAttribute('data-id'))" data-id={product.id}>Add to Cart</a></button>
      </div>
    `;
  });
  productContainer.innerHTML = indexHtml;
}

displayProducts(featureproducts);

function displayProduct(products) {
  const productContainer = document.getElementById('product-container1');
  let indexHtml = '';
  products.forEach((product) => {
    indexHtml += `
      <div class="col-4" key={product.id}>
        <img src=${product.image} alt=${product.name} />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button><a href="cart.html" onclick="addToCart(this.getAttribute('data-id'))" data-id={product.id}>Add to Cart</a></button>
      </div>
    `;
  });
  productContainer.innerHTML = indexHtml;
}

displayProduct(latestproducts);