function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, field, wrap}) {
    const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.getElementById(totalCounter),
    current = document.getElementById(currentCounter),
    wrapper = document.querySelector(wrap),
    slidesField = document.querySelector(field),
    width = wrapper.getBoundingClientRect().width,
    navi = document.createElement('ol'),
    dots = []; //lista menu
    let slideIndex = 1; // określa obecny slajd
    let offset = 0;

    checkAllNumbersSlides();
    checkCurrentNumberOfSlide(slideIndex);
    addNewProps();
    navigationForSlider();

    next.addEventListener('click', () => {
        if (offset == width * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if ( slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        addOpacity();


    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = width * (slides.length - 1);
        } else {
            offset -= width;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if ( slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        addOpacity();

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            checkCurrentNumberOfSlide(slideIndex);
            offset = width * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;
            
            addOpacity();
        
        });
    });

    function checkAllNumbersSlides() {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
        } else {
            total.textContent = slides.length;
        }
        }

        function checkCurrentNumberOfSlide(n = 1) {
        if (n < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function addNewProps() {

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    wrapper.style.overflow = 'hidden';

    slides.forEach(slide => {slide.style.width = `${width}px`;});

    slider.style.position = 'relative';

    }

    function navigationForSlider() {
        navi.classList.add('carousel-indicators');
        slider.append(navi);

        for ( let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');

            dot.setAttribute('data-slide-to', i+1);
            dot.classList.add('dot');

            if (i == 0) {
                dot.style.opacity = '1';
            }

            navi.append(dot);
            dots.push(dot);

        }
    }

    function addOpacity() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }
}

export default slider;

