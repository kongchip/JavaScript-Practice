function navbarToggler() {
  // document.getElementsByClassName('list-group')[0].classList.toggle('show');
  document.querySelector('.list-group').classList.toggle('show');
  // document.querySelectorAll('.list-group')[0].classList.toggle('show');
  $('.list-group').toggle('show');
}
$('.navbar-toggler').on('click', navbarToggler);

//modal
function openBtn() {
  $('.black-bg').addClass('show-modal');
}
$('#login').on('click', openBtn);

function closeBtn() {
  $('.black-bg').removeClass('show-modal');
}
$('#close').on('click', closeBtn);

document.querySelector('.black-bg').addEventListener('click', function (e) {
  let modalBg = document.querySelector('.black-bg');
  if (e.target === modalBg) {
    modalBg.classList.remove('show-modal');
  }
});

//Login
function loginAlert(e) {
  let idCheck = document.getElementById('email').value;
  let pwdCheck = document.getElementById('pwd').value;
  // console.log(addEventListener(idCheck));
  if (idCheck === '' && pwdCheck === '') {
    alert('아이디 혹은 비밀번호를 입력해 주세요');
    e.preventDefault();
  } else if (pwdCheck.length <= 6) {
    alert('비밀번호의 길이가 너무 짧습니다.\n(6글자 이상으로 입력해주세요)');
    e.preventDefault();
  } else if (/\S+@\S+.\S+/.test(idCheck) === false) {
    alert('아이디가 이메일 형식이 아닙니다.');
    e.preventDefault();
  } else if (!/[A-Z]/.test(pwdCheck)) {
    alert('비밀번호에 대문자 영어가 포함되어야합니다');
    e.preventDefault();
  }
}

$('form').on('submit', loginAlert);

//dark mode
let count = 0;

function change() {
  count++;
  if (count % 2 === 0) {
    $('.badge').html('Dark 🔄');
  } else {
    $('.badge').html('Light 🔄');
  }
}
$('.badge').on('click', change);

let numCount = 5;
function ad() {
  numCount -= 1;
  if (numCount >= 0) {
    $('#num').html(numCount);
  } else {
    $('.alert').remove();
  }
}
setInterval(ad, 1000);

//img-slide
let imgId = 1;
function slideImg(e) {
  let imgId = document.getElementById(e.getAttribute('id')).getAttribute('id');
  if (imgId === 'slide-img1') {
    document.querySelector('.slide-container').style.transform =
      'translateX(0vw)';
    imgId = 1;
  } else if (imgId === 'slide-img2') {
    document.querySelector('.slide-container').style.transform =
      'translateX(-100vw)';
    imgId = 2;
  } else if (imgId === 'slide-img3') {
    document.querySelector('.slide-container').style.transform =
      'translateX(-200vw)';
    imgId = 3;
  }
}

function nextImg() {
  if (imgId === 1) {
    document.querySelector('.slide-container').style.transform =
      'translateX(-100vw)';
    imgId = 2;
  } else if (imgId === 2) {
    document.querySelector('.slide-container').style.transform =
      'translateX(-200vw)';
    imgId = 3;
  } else if (imgId === 3) {
    document.querySelector('.slide-container').style.transform =
      'translateX(0vw)';
    imgId = 1;
  }
}
document.getElementById('next').onclick = nextImg;

// scroll
window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    document.querySelector('.navbar-brand').style.fontSize = '50px';
  } else {
    document.querySelector('.navbar-brand').style.fontSize = '30px';
  }
});

document.querySelector('.scrollBox').addEventListener('scroll', function () {
  let intElemScrollHeight = document.querySelector('.scrollBox').scrollTop;
  let maxElemScrollHeight = document.querySelector('.scrollBox').scrollHeight;
  let userScrollHeight = document.querySelector('.scrollBox').clientHeight;

  if (intElemScrollHeight + userScrollHeight === maxElemScrollHeight) {
    alert('끝까지 다 내렸습니다.');
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
  if (e.target === tabButton[0]) {
    tabHandler(0);
  } else if (e.target === tabButton[1]) {
    tabHandler(1);
  } else if (e.target === tabButton[2]) {
    tabHandler(2);
  }
});

function tabHandler(num) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(num).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(num).addClass('show');
}
