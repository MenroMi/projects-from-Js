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

    $(".catalog-item__main-screen").addClass("catalog-item__main-screen_active");

    $("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
        $(this).addClass("catalog__tab_active").siblings().removeClass("catalog__tab_active").closest("div.row").find(".catalog__content").removeClass("catalog__content_active").eq($(this).index()).addClass("catalog__content_active");

    });

    function toggleActiveClass(elem) {
        $(elem).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $(".catalog-item__main-screen").eq(i).toggleClass("catalog-item__main-screen_active");
                $(".catalog-item__details-screen").eq(i).toggleClass("catalog-item__details-screen_active");
            })
        })
    }

    toggleActiveClass(".catalog-item__escape");
    toggleActiveClass(".catalog-item__details");

});


