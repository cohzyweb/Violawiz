// js/script.js
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active'); // toggles .navbar.active
  menuIcon.classList.toggle('bx-x'); // swaps icon to an 'X'
};
