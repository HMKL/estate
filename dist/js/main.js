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
            speed: 1500,

            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
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



        AOS.init({
            duration: 1200,
            once: true,
        });





        let swiper = new Swiper("#swiper-btn", {
            loop: true,
            // spaceBetween: 10,
            // slidesPerView: 4,
            // freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }
        });



        let swiper2 = new Swiper("#swiper-photo", {
            loop: true,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            spaceBetween: 10,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
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


