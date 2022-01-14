window.$ = window.jQuery = require('jquery');

//Mobile menu
$('.menu-icon').on('click', function() {
    $('.menu').addClass('active');
})
$('.cancel-icon').on('click', function() {
    $('.menu').removeClass('active');
});