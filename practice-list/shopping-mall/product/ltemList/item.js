const products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

function itemInfo(data) {
  let productItem = `<div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100" />
<h5>${data.title}</h5>
<p>가격 : ${data.price}</p>
<button class="buy">구매</button>
</div>`;
  $('.row').append(productItem);
}
products.forEach(itemInfo);

//buy
$('.buy').click(function (e) {
  let title = $(e.target).siblings('h5').text();
  if (
    localStorage.getItem('cart') != null &&
    JSON.parse(localStorage.cart)[0] !== title &&
    JSON.parse(localStorage.cart)[1] !== title &&
    JSON.parse(localStorage.cart)[2] !== title
  ) {
    let inCart = JSON.parse(localStorage.cart);
    inCart.push(title);
    localStorage.setItem('cart', JSON.stringify(inCart));
    console.log(inCart);
  } else {
    localStorage.setItem('cart', JSON.stringify([title]));
  }
});

// sort
function itemSort(e) {
  console.log(e.target.id);
  if (e.target.id === 'price') {
    products.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (e.target.id === 'consonant') {
    products.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      } else return -1;
    });
  }
  $('.row').html('');
  products.forEach(itemInfo);
}
$('.sort').click(itemSort);

//filter
$('#filter').click(function () {
  let newProduct = products.filter((a) => a.price <= 60000);
  $('.row').html('');
  newProduct.forEach(itemInfo);
});

//more products
let count = 0;
document.getElementById('more').addEventListener('click', function () {
  if (count === 0) {
    fetch('https://codingapple1.github.io/js/more1.json')
      .then((res) => res.json())
      .then(function (data) {
        data.forEach(itemInfo);
      });
    count++;
  } else if (count === 1) {
    fetch('https://codingapple1.github.io/js/more2.json')
      .then((res) => res.json())
      .then(function (data) {
        data.forEach(itemInfo);
      });
    document.getElementById('more').disabled = true;
    document.getElementById('more').style.backgroundColor = '#CCCCCC';
    document.getElementById('more').style.borderColor = '#CCCCCC';
  }
});
