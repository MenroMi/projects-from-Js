/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    const result = document.querySelector(".calculating__result span");
    let sex, height, weight, age, ratio;


    if ( localStorage.getItem('sex')) {
        sex = localStorage.getItem("sex");
    } else {
        sex = 'female';
        localStorage.setItem('sex', "female");
    }

    if ( localStorage.getItem('ratio')) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) {

        const actives = document.querySelectorAll(selector);

        actives.forEach(active => {
            active.classList.remove(activeClass);
            if (active.getAttribute('id') === localStorage.getItem('sex')) {
                active.classList.add(activeClass);
            } 

            if (active.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                active.classList.add(activeClass);
            }

        });
    }
            
    initLocalSettings("#gender div", "calculating__choose-item_active");
    initLocalSettings(".calculating__choose_big div", "calculating__choose-item_active");

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }

        if ( sex === "female") {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(parentSelector, activeClass) {

        const elements = document.querySelectorAll(parentSelector);
      

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem("ratio", +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem("sex", e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
        
                e.target.classList.add(activeClass);
    
                calcTotal();
    
            });

        });

    }

    getStaticInformation("#gender div", "calculating__choose-item_active");
    getStaticInformation(".calculating__choose_big div", "calculating__choose-item_active");
    
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
                
            if(input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;    
            }

            calcTotal();

        });

    }
    getDynamicInformation("#height");
    getDynamicInformation("#weight");
    getDynamicInformation("#age");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
    const menu = document.querySelector('.menu'),
          field = menu.querySelector('.menu__field'),
          container = field.querySelector('.container');

    class Items {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;            
            this.title = title;
            this.descr = descr;
            this.price = price; // (1) (5)
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); // (2)
        }

        changeToUAH() { // podaną metodę możemy wywołać również w kosntruktorze (3)
            this.price = this.price * this.transfer; // konwerter walut (powiedzmy);    (4) 
        }


        render() {
            const element = document.createElement('div');
            

            if (this.classes.length !== 0) {
                this.classes.forEach(className => element.classList.add(className));
            } else {
                this.element = "menu__item";
                element.classList.add(this.element);

            }

            element.innerHTML = `<img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;

            this.parent.append(element);


        }

    }



    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new Items(img, altimg, title, descr, price, ".menu .container").render();
            });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector); // 1

    const message = { // 18
        loading: 'img/form/spinner.svg', // żeby dodać zdjęcie
        success: "Спасибо! Скоро с вами свяжутся!",
        failure: 'Что-то пошло не так'
    }; // magazyn wiadomości, które chcemy pokazać klientowi

    
    forms.forEach(item => { // 16

        bindPostData(item); // 17

    });



    function bindPostData(form) { // 2
   
        form.addEventListener('submit', (e) => { // 3
            e.preventDefault(); // 5 dodajemy na samym początku, by usunąć za każdym razem
            // odświeżanie strony po wysłaniu formy

            const statusMessage = document.createElement('img'); // 15
            statusMessage.setAttribute('src', "img/form/spinner.svg");
            // statusMessage.src = message.loading; // można wykonać w taki sposób
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            
            const formData = new FormData(form); // 9

            // // ==============
            // // json-formats
            // const obj = {};
            // formData.forEach(function(value, key) {
            //     obj[key] = value;
            // });
            const json = JSON.stringify(Object.fromEntries(formData.entries())); // make json format

            
            // // ===============

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then((data) => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
                statusMessage.textContent = message.failure;
            }).finally(() => {
                form.reset();
            });

        });
    }


    function showThanksModal(message) { // chcemy pokazać nowe modalnie okno po wysłaniu form
        // nie usunąć, tylko ukryć poprzednie i uwidocznić nowo stworzone;
        const prevModalDialog = document.querySelector('.modal__dialog');
        // wyciąga się to okno, które ma być poźniej ukryte.
        // podczas usuwania, przy powtórnej próbie włączyć modalne okno, nie otworzy się

        prevModalDialog.classList.add('hide'); //ukrywamy modalne okno
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openWindow)('.modal', modalTimerId); // odpowiada za włączenie modalnych okien
        const thanksModal = document.createElement('div'); // tworzymy nowe okno modalne (dynamiczne tworzony element)
        thanksModal.classList.add('modal__dialog'); // dodaje się do nowego okna ten sam styl. Taka zamiana jednego modalnego okna na drugie
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `; // dodajemy elementy, które mają się wyświetlić po kliknięciu
        
        document.querySelector('.modal').append(thanksModal); // dodajemy do HTML-dokumentu
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeWindow)('.modal');
        }, 4000);

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeWindow": () => (/* binding */ closeWindow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openWindow": () => (/* binding */ openWindow)
/* harmony export */ });
function closeWindow(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';

}

function openWindow(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    if (modalTimerId) {
        console.log(modalTimerId);
        clearInterval(modalTimerId);
    }

}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // MODAL WINDOW

    const modalsOpen = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);

    modalsOpen.forEach(modal => {

        modal.addEventListener('click', () => openWindow(modalSelector, modalTimerId)); // 

    });

    modalWindow.addEventListener('click', (event) => {

        const target = event.target;
        if (target === modalWindow || target.getAttribute("data-close") == '') {closeWindow(modalSelector);}

    });

    document.addEventListener('keydown', (event) => { // modal window to close when push 'ESC'

        if (event.keyCode === 27 && modalWindow.classList.contains('show')) {closeWindow(modalSelector);} // unique code "esc" key 

    });

    function showModalByScroll() {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ) {
            // można dodać -1 px w przypadku gdy nie pojawia się modalne okno
            openWindow(modalSelector, modalTimerId);
            window.removeEventListener('scroll',showModalByScroll);
        }

        
    }
    
    window.addEventListener('scroll',showModalByScroll);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);



/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // TABS

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);


    function hideTabContent() { // function, which hide all useless tabs

        tabsContent.forEach(tab => { // we iterate, cause we want work
        // with all element
            tab.classList.add('hide'); // later we hide useless tabs 
            tab.classList.remove('show');
        });

        tabs.forEach(tab => { // class-active will be turn off with all
            // off tabs

            tab.classList.remove(activeClass);
        });

    }

    function showTabContent(numb = 0) { // we show only active tab
        // function have default parametr - this is parametr when 
        // we don't announce function with argument before

        tabsContent[numb].classList.add('show', 'fade');
        tabsContent[numb].classList.remove('hide');
        tabs[numb].classList.add(activeClass); // we add
        // our tab activity class

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        // console.log(target);
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((tab, i) => {
                if (target == tab) {
                    // console.log(tab);
                    // console.log(target);
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
     // TIMER

    //  const deadline = "2022-08-30T23:58:59.000Z"; // data końcowa

     function getTimeRemainig(endtime) {
         // różnica między datą aktualną i datą końcową
         let t = Date.parse(endtime) - Date.now(),
               days, hours, minutes, seconds;
         
         if (t <= 0) {
 
             days = 0;
             hours = 0;
             minutes = 0;
             seconds = 0;
 
         } else {
             days = Math.floor(t / (1000 * 60 * 60 * 24)),
             // w nawiasach sprawdzamy ile mamy millisekund w dobie
             // 1 000 ms = 1 s
             // 60 000 ms = 1 m
             // 3 600 000 ms = 1 h
             // 86 400 000 ms = 1 day
     
             // dzieląc wybraną datę końcową na dobę w millisekundach
             // dostajemy ilość dni do zakończenia akcji
             // Math.floor usuwa liczby po przecinku za pomocą zaokrąglenia
     
                   hours = Math.floor((t / (1000 * 60 * 60) % 24)),
             // dzięki operacji matematycznej dostajemy ilość godzin do zakończenia
                   minutes = Math.floor((t / (1000 * 60) % 60)),
             // tutaj minuty
                   seconds = Math.floor((t / 1000) % 60);
             // tutaj sekundy
             // priorytet należy do dzielenia, później modulo
 
         }
 
         return {
             'total': t, // millisekundy ogółem
             // 
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds,
         };
     }
 
     // console.log(getTimeRemainig(deadline));
 
     function getZero(numb) {
         if (numb >= 0 && numb < 10) {
             return `0${numb}`;
         } else {
             return numb;
         }
     }
 
     function setClock(selector, endtime) {
         const timer = document.querySelector(selector),
               days = timer.querySelector("#days"),
               hours = timer.querySelector("#hours"),
               minutes = timer.querySelector("#minutes"),
               seconds = timer.querySelector("#seconds"),
               timeInterval = setInterval(updateClock, 1000);
     
         updateClock(); 
 
         function updateClock() {
 
             const t = getTimeRemainig(endtime);
 
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
 
             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
 
         }
         
     }
 
     setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => { // dodajemy kolejkę async
    const res = await fetch(url, { // najpierw ten kod
        method: "POST", // how
        headers: {'Content-type': 'application/json'}, // how
        body: data   // what exactly? 
    });

    return await res.json(); // dopiero później ten jako drugi

};

const getData = async (url) => {
    const getReq = await fetch(url);

    if (!getReq.ok) {
        throw new Error(`Could not fetch ${url}, status: ${getReq.status}`);
    }

    return await getReq.json(); // skoro json format jest na backendzie strony
    // to przy odbieraniu danych w json-formacie  metoda json() parsuje w obiekt js
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");









window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.openWindow)(".modal", modalTimerId), 10000); // when we want open modal window
    //after some time, and clear interval later

    _modules_tabs__WEBPACK_IMPORTED_MODULE_0___default()('.tabheader__item', '.tabcontent', '.tabheader__items', "tabheader__item_active");
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])(".timer", "2022-09-30T23:58:59.000Z");
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])("[data-modal]", '.modal', modalTimerId);
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])("form", modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: "total",
        currentCounter: 'current',
        field: ".offer__slider-inner",
        wrap: ".offer__slider-wrapper"
    });
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map