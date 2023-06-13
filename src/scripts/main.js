/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here

  const getHamburger = document.querySelector('.hamburger');
  const getHamburgerSpan = document.querySelector('.hamburger > span');
  const getMobileNav = document.querySelector('.estate-navbar-mobile');

  const addLines = () => {
    getHamburger.addEventListener('click', () => {
      getHamburgerSpan.classList.toggle('lines');
      getMobileNav.classList.toggle('show-nav-mobile');
    })
  }
  addLines();









})();


