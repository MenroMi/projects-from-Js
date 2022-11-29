$('').ready(function () {
    $('.carousel__slider').slick({
        speed: 1100,
        adaptiveHeight: true,
        prevArrow: `<button type="button" class="slick-prev"><img src="icons/slider-arrows/left-arrow.png" alt="left-arrow"></button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="icons/slider-arrows/right-arrow.png" alt="right-arrow"></button>`,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    infinite: false,
                    speed: 1100,
                    adaptiveHeight: true,
                    dots: true,
                    prevArrow: `<button type="button" class="slick-prev"><img src="icons/slider-arrows/left-arrow.png" alt="left-arrow" style="display: none;"></button>`,
                    nextArrow: `<button type="button" class="slick-next"><img src="icons/slider-arrows/right-arrow.png" alt="right-arrow" style="display: none;"></button>`
                }
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: false,
                    speed: 1100,
                    adaptiveHeight: true,
                    dots: true,
                    prevArrow: `<button type="button" class="slick-prev"><img src="icons/slider-arrows/left-arrow.png" alt="left-arrow" style="display: none;"></button>`,
                    nextArrow: `<button type="button" class="slick-next"><img src="icons/slider-arrows/right-arrow.png" alt="right-arrow" style="display: none;"></button>`
                }
            },
            {
                breakpoint: 575,
                settings: {
                    infinite: false,
                    speed: 1100,
                    adaptiveHeight: true,
                    dots: true,
                    prevArrow: `<button type="button" class="slick-prev"><img src="icons/slider-arrows/left-arrow.png" alt="left-arrow" style="display: none;"></button>`,
                    nextArrow: `<button type="button" class="slick-next"><img src="icons/slider-arrows/right-arrow.png" alt="right-arrow" style="display: none;"></button>`,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    infinite: false,
                    speed: 1100,
                    adaptiveHeight: true,
                    dots: true,
                    prevArrow: `<button type="button" class="slick-prev"><img src="icons/slider-arrows/left-arrow.png" alt="left-arrow" style="display: none;"></button>`,
                    nextArrow: `<button type="button" class="slick-next"><img src="icons/slider-arrows/right-arrow.png" alt="right-arrow" style="display: none;"></button>`,
                }
            }
        ]
    });
});

$(".catalog__tabs > .catalog__tab").on("click", function () {

    const target = event.currentTarget;
    if (!$(target).hasClass("catalog__tab_active")) {
        $(target.parentElement.children).each(function (i, el) {
            $(el).removeClass("catalog__tab_active");
        })
        return $(target).addClass("catalog__tab_active");
    }

});
