function navbarToggler() {
  // document.getElementsByClassName('list-group')[0].classList.toggle('show');
  document.querySelector('.list-group').classList.toggle('show');
  // document.querySelectorAll('.list-group')[0].classList.toggle('show');
  $('.list-group').toggle('show');
}

// document
// .getElementsByClassName('navbar-toggler')[0]
// .addEventListener('click', navbarToggler);

// document
//   .querySelector('.navbar-toggler')
//   .addEventListener('click', navbarToggler);

// document
//   .querySelectorAll('.navbar-toggler')[0]
//   .addEventListener('click', navbarToggler);
$('.navbar-toggler').on('click', navbarToggler);

function openBtn() {
  $('.black-bg').addClass('show-modal');
}
$('#login').on('click', openBtn);

function closeBtn() {
  $('.black-bg').removeClass('show-modal');
}
$('#close').on('click', closeBtn);

//로그인 관련

function loginAlert(e) {
  let idCheck = document.getElementById('email').value;
  let pwdCheck = document.getElementById('pwd').value;
  if (idCheck === '' && pwdCheck === '') {
    alert('아이디 혹은 비밀번호를 입력해 주세요');
  } else if (idCheck === '') {
    alert('아이디를 입력해주세요');
  } else if (pwdCheck === '') {
    alert('비밀번호를 입력해주세요');
  } else if (pwdCheck.length < 6) {
    alert('비밀번호의 길이가 너무 짧습니다.\n(6글자 이상으로 입력해주세요)');
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
// badge 클릭횟수가 홀수면 내부 글자를 Light로 변경
// badge 클릭횟수가 짝수면 내부 글자를 Dark로 변경
