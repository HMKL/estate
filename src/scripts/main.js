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







  // Start scroll top
  let btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // End scroll top







})();


