//tab
// for (let i = 0; i < document.querySelectorAll('.tab-button').length; i++) {
//   let clickTab = document.querySelectorAll('.tab-button')[i];
//   clickTab.addEventListener('click', function () {
//     let tabOrange = document.querySelectorAll('.tab-button');
//     let tabShow = document.querySelectorAll('.tab-content');

//     tabOrange.forEach((el) => {
//       el.classList.remove('orange');
//       tabOrange[i].classList.add('orange');
//     });
//     tabShow.forEach((el) => {
//       el.classList.remove('show');
//       tabShow[i].classList.add('show');
//     });
//   });
// }
let tabButton = document.querySelectorAll('.tab-button');
$('.tabList').click(function (e) {
  tabHandler(e.target.dataset.id);
});

function tabHandler(num) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(num).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(num).addClass('show');
}

let car = {
  name: '소나타',
  price: 50000,
};
document.querySelector('.car-title').innerHTML = car.name;
document.querySelector('.car-price').innerHTML = car.price;
