window.$ = window.jQuery = require('jquery');
import  'jquery.marquee';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination]);

$(document).ready(function () {
    //Mobile menu
    $('.menu-icon').on('click', function() {
        $('.menu').addClass('active');
    })
    $('.cancel-icon').on('click', function() {
        $('.menu').removeClass('active');
    });

    //Anchor links
    $('a').on("click", function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    const swiper = new Swiper('.home__swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: 'true',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const marqueeInitialization = () => {
        $('.tabs__marquee').marquee({
            duration: 8000,
            pauseOnHover: true,
            gap: 30,
          });
    }

    //Tabs
    $('.tabs__button').on('click', function () {
        $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
        $('.tabs__marquee').marquee('destroy');
        marqueeInitialization();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();

    marqueeInitialization();

    $('.video__play').on('click', function (){
        const videoPlayer = $('#video');
        $(this).toggleClass('paused');
        const video = videoPlayer.get(0);
        if (video.paused)
            video.play();
        else
            video.pause();
    })
});