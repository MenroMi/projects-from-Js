$('').ready(function () {
    $('.carousel__slider').slick({
        speed: 1100,
        adaptiveHeight: true,
        prevArrow: `<button type="button" class="slick-prev"><img src="icons/slider-arrows/left-arrow.png" alt="left-arrow"></button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="icons/slider-arrows/right-arrow.png" alt="right-arrow"></button>`,
        dots: true,
    });
});
