const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const menuBars = document.querySelector('.menu__link');
menu.addEventListener('click', (e) => {
  e.preventDefault();
  menuBars.classList.toggle('active');
  nav.classList.toggle('active');
})