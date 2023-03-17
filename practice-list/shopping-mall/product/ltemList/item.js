const products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

// itemInfo
let itemName = document.querySelectorAll('.card-body h5');
let itemPrice = document.querySelectorAll('.card-body p');
itemName[0].innerHTML = products[0].title;
itemPrice[0].innerHTML = `가격 : ${products[0].price}`;

itemName[1].innerHTML = products[1].title;
itemPrice[1].innerHTML = `가격 : ${products[1].price}`;

itemName[2].innerHTML = products[2].title;
itemPrice[2].innerHTML = `가격 : ${products[2].price}`;
