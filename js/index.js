// ITERATION 1

const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('quantity input').value;
  // la suma total es igual al precio por cantidad
  let sumTotal = price * quantity;
}


// accedo al subtotal para que me de la suma total
let subtotalCell = document.querySelector(".subtotal");
subtotalCell.textContent = sumTotal;

// asignamos a la propiedad .textcontent del elemento del dom <span> que es decendiente</span>
//precio por cantidad
product.queryselector("subtotal span").textContent = price * quantity;

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll(".product");
  for (let i = 0; i < prodducts .lenght; i ++){
    upadateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
