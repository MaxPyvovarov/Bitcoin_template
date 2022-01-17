window.$ = window.jQuery = require('jquery');
import  'jquery.marquee';
import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([ Autoplay, Navigation]);

$(document).ready(function () {
    //Mobile menu
    $('.menu-icon').on('click', function() {
        $('.menu').addClass('active');
    })
    $('.cancel-icon').on('click', function() {
        $('.menu').removeClass('active');
    });

    const marqueeInitialization = () => {
        $('.tabs__marquee').marquee({
            duration: 8000,
            pauseOnHover: false,
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

    const videoPlayer = $('#video');

    function playPause() {
        if(videoPlayer.paused)
        videoPlayer.play();
        else 
            videoPlayer.pause();
    }
});