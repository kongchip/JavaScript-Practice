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
