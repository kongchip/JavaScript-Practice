let car = {
  name: '모자',
  price: 50000,
};

let pantsSize = [28, 30, 32, 34];
let shirtSize = [95, 100, 105];

//select item
$('.form-select')
  .eq(0)
  .on('input', function () {
    let value = this.value;
    if (value === '셔츠') {
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html('');

      shirtSize.forEach(function (data) {
        $('.form-select').eq(1).append(`<option>${data}</option`);
      });
    } else if (value === '바지') {
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html('');

      pantsSize.forEach(function (data) {
        $('.form-select').eq(1).append(`<option>${data}</option>`);
      });
    } else if (value === '모자') {
      $('.form-select').eq(1).addClass('form-hide');
    }
  });

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
