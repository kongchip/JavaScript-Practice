const products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

// itemInfo
products.forEach((data) => {
  let productItem = `<div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100" />
<h5>${data.title}</h5>
<p>가격 : ${data.price}</p>
</div>`;
  $('.row').append(productItem);
});

//more products
let count = 0;
document.getElementById('more').addEventListener('click', function () {
  if (count === 0) {
    fetch('https://codingapple1.github.io/js/more1.json')
      .then((res) => res.json())
      .then(function (data) {
        data.forEach((a, i) => {
          let productItem = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
      </div>`;
          $('.row').append(productItem);
        });
      });
    count++;
  } else if (count === 1) {
    fetch('https://codingapple1.github.io/js/more2.json')
      .then((res) => res.json())
      .then(function (data) {
        data.forEach((a, i) => {
          let productItem = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
      </div>`;
          $('.row').append(productItem);
        });
      });
    document.getElementById('more').disabled = true;
    document.getElementById('more').style.backgroundColor = '#CCCCCC';
    document.getElementById('more').style.borderColor = '#CCCCCC';
  }
});
