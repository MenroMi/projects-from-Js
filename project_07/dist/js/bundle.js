/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function forms(formPost) {

    const wrapperRequest = document.querySelector(".wrapper_after_request"),
    btnContinue = document.querySelector(".request_button");

    const postData = form => {

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const divError = document.createElement("div");
            divError.textContent = "Please, try again.";
            divError.classList.add("data_error")

            /* AJAX */

            const request = new XMLHttpRequest();          
            request.open("POST", "http://localhost:3000/posts");

            request.setRequestHeader("Content-type", "application/json");
            const formData = new FormData(form);
            
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });

            const jsonForm = JSON.stringify(object);

            request.send(jsonForm);

            request.addEventListener("error", (e) => {
                e.preventDefault();
                form.append(divError);
                setTimeout(() => {
                    divError.remove();
                }, 3000);
            });

            request.addEventListener("load", () => {
                if (request.status >= 200 || request.status < 300) {
                    console.log(request.response);
                    form.reset();
                    form.classList.add('hidden');
                    wrapperRequest.classList.remove('hidden');
                    console.log(form.classList.contains("hidden"));
                } else {
                    form.reset();
                    form.append(divError);
                    setTimeout(() => {
                        divError.remove();
                    }, 3000);
                }
            });
        });
    }

    const afterPost = (requestForm, form) => {
        btnContinue.addEventListener("click", () => {
            if (form.classList.contains("hidden")) {
                requestForm.classList.add('hidden');
                return form.classList.remove('hidden');
            }
            return;
        })
        return;
    }

    postData(formPost);
    afterPost(wrapperRequest, formPost)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/validator.js":
/*!*************************************!*\
  !*** ./src/js/modules/validator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function validator(formPost) {
    const
        btnSubmit = document.querySelector(".data_btn"),
        cardName = document.querySelector(".card_front_name"),
        cardNumber = document.querySelector(".card_front_number"),
        cardMonth = document.querySelector(".card_front_date_m"),
        cardYear = document.querySelector(".card_front_date_y"),
        cardCVV = document.querySelector(".card_back_cvv");

    const usernameEl = document.querySelector("#username"),
        numberEl = document.querySelector("#cardnumber"),
        monthEl = document.querySelector("#month"),
        yearEl = document.querySelector("#year"),
        cvvCodeEl = document.querySelector("#code-cvv");

    const isRequired = value => value === '' ? true : false; // checking that input is not empty
    const checkLength = (length, min, max) => length < min || length > max ? true : false; // check length
    const checkSpecialCharactersAndNumbers = value => (/(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])|(?=(.*[0-9]))/).test(value); // the regex checks the value for special characters and numbers.
    const isCardNumber = value => (/(?=(.*[a-zA-Z]))|(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/).test(value); // must be only numbers
    const isMonth = value => (/^((0?[1-9])|((1)[0-2]))$/).test(value); // check for month number. Should be from 00 to 12.
    const isYear = value => (/^((0?[1-9])|(([0-9])[0-9])|99)$/).test(value);
    // check for year number. From 01 to 99.

    const showError = (input, msg) => {
        input.classList.add("form-error");
        let divField;

        if (input.id === "month" || input.id === "year") {
            console.log(input.id);
            divField = input.parentElement.parentElement;
        } else {
            divField = input.parentElement;
        }
        const errorMsg = divField.querySelector("small");
        errorMsg.style.color = 'red';
        btnSubmit.disabled = true;

        return errorMsg.textContent = msg;
    };

    const showSuccess = input => {
        input.classList.remove("form-error");
        let divField;

        if (input.id === "month" || input.id === "year") {
            divField = input.parentElement.parentElement;
        } else {
            divField = input.parentElement;
        }

        const errorMsg = divField.querySelector("small");
        btnSubmit.disabled = false;
        return errorMsg.textContent = '';
    }



    validateData(formPost);


    function validateData(form) {
        form.addEventListener('input', function (e) {

            let parts = [];
            const value = e.target.value,
                id = e.target.id;

            switch (id) {
                case 'username':
                    if (value.length > 25) {
                        validateUsername(usernameEl);
                        return;
                    }
                    cardName.textContent = value;
                    validateUsername(usernameEl);
                    break;
                case 'cardnumber':

                    for (let i = 0, len = value.length; i < len; i += 4) { // spacebar on front card picture
                        parts.push(value.substring(i, i + 4))
                    }

                    if (value.length > 16) {
                        validateCardNumber(numberEl); // without call function here didnt worked validation with amount of characters
                        return; // without return all numbers are displayed on pic front card 
                    }

                    if (parts.length) {
                        cardNumber.textContent = parts.join(' ');
                    }

                    validateCardNumber(numberEl);
                    break;
                case 'month':
                    if (value.length > 2) {
                        validateCardMonth(monthEl);
                        return;
                    }
                    cardMonth.textContent = value.length === 1 ? `0${value}` : value;
                    validateCardMonth(monthEl);
                    break;
                case 'year':
                    if (value.length > 2) {
                        validateCardYear(yearEl);
                        return;
                    }
                    cardYear.textContent = value.length === 1 ? `0${value}` : value;
                    validateCardYear(yearEl);
                    break;
                case "code-cvv":
                    if (value.length > 3) {
                        validateCardCVV(cvvCodeEl);
                        return;
                    }
                    cardCVV.textContent = value;
                    validateCardCVV(cvvCodeEl);
            }
        });
    }

    function validateUsername(username) {

        let min = 3, max = 25;
        const name = username.value.trim();

        if (isRequired(name)) {
            showError(username, "Can't be blank.");
        } else if (checkLength(name.length, min, max)) {
            showError(username, `Wrong length. Your cardname must be between ${min} and ${max} characters.`);
        } else if (checkSpecialCharactersAndNumbers(name)) {
            showError(username, "Without special characters or numbers.");
        }
        else {
            showSuccess(username);
        }

        return;

    }

    function validateCardNumber(numbers) {

        let min = 16, max = 16;
        const numb = numbers.value.trim();

        if (isRequired(numb)) {
            showError(numbers, "Can't be blank.");
        } else if (isCardNumber(numb)) {
            showError(numbers, "Wrong format. Only numbers");
        } else if (checkLength(numb.length, min, max)) {
            showError(numbers, "Must be 16 characters.");
        } else {
            showSuccess(numbers);

        }

        return;

    }

    function validateCardMonth(month) {

        let min = 1, max = 2;
        const numb = month.value.trim();

        if (isRequired(numb)) {
            showError(month, "Can't be blank.");
        } else if (isCardNumber(numb)) {
            showError(month, "Only numbers.");
        } else if (!isMonth(numb)) {
            showError(month, "From 01 to 12.");
        } else if (checkLength(numb.length, min, max)) {
            showError(month, "Must be 2 characters.");
        } else {
            showSuccess(month);
        }

        return;

    }

    function validateCardYear(year) {

        let min = 1, max = 2;
        const numb = year.value.trim();

        if (isRequired(numb)) {
            showError(year, "Can't be blank.");
        } else if (isCardNumber(numb)) {
            showError(year, "Only numbers.");
        } else if (!isYear(numb)) {
            showError(year, "From 01 to 99.");
        } else if (checkLength(numb.length, min, max)) {
            showError(year, "Must be 2 characters.");
        } else {
            showSuccess(year);
        }

        return;

    }

    function validateCardCVV(cvv) {

        let min = 3, max = 3;
        const numb = cvv.value.trim();

        if (isRequired(numb)) {
            showError(cvv, "Can't be blank.");
        } else if (isCardNumber(numb)) {
            showError(cvv, "Only numbers.");
        } else if (checkLength(numb.length, min, max)) {
            showError(cvv, "Must be 3 characters.");
        } else {
            showSuccess(cvv);
        }

        return;
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/validator */ "./src/js/modules/validator.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");




window.addEventListener("DOMContentLoaded", () => {

    const formForPost = document.querySelector("form");

    (0,_modules_validator__WEBPACK_IMPORTED_MODULE_0__["default"])(formForPost);
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])(formForPost);

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map