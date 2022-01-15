window.$ = window.jQuery = require('jquery');

$(document).ready(function () {
    //Mobile menu
    $('.menu-icon').on('click', function() {
        $('.menu').addClass('active');
    })
    $('.cancel-icon').on('click', function() {
        $('.menu').removeClass('active');
    });

    //Tabs
    $('.tabs__button').on('click', function () {
        $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();
});