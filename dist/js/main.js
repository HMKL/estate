let layoutHandler;

(function ($) {
    'use strict';
    let LayoutHandler = function () {
        let self = this;

        this.ready = function () {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function () {

        };

        this.handleEvents = function () {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function () {
        layoutHandler.ready();















        let mainswiper = new Swiper("#main-swiper", {
            effect: 'coverflow',
            speed: 600,
            // autoplay: {
            //     delay: 4000,
            // },
            pagination: {
                el: '.swiper-pagination.one',
                clickable: true,
                dynamicBullets: true,
            },
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
        });






        new PureCounter({
            selector: ".counter",


            start: 0,
            end: 55,
            duration: 1.5,
            delay: 10,
            once: true,
            pulse: true,
            legacy: false,
        });


        new PureCounter({
            selector: ".count",


            start: 0,
            end: 10,
            duration: 0.8,
            delay: 10,
            once: true,
            pulse: true,
            legacy: false,
        });

        new PureCounter({
            selector: ".countertwo",


            start: 0,
            end: 500,
            duration: 1.5,
            delay: 10,
            once: true,
            pulse: true,
            legacy: false,
        });



    });
})(jQuery);

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

