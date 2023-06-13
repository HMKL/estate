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





    });
})(jQuery);
