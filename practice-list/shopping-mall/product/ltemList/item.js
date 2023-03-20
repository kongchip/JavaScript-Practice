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
</div>`;
  $('.row').append(productItem);
}
products.forEach(itemInfo);

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
    console.log(products);
  }
  $('.row').html('');
  products.forEach(itemInfo);
}
$('.sort').click(itemSort);

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
