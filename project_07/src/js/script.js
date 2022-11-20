"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const formForPost = document.querySelector("form"),
        wrapperRequest = document.querySelector(".wrapper_after_request"),
        btnSubmit = document.querySelector(".data_btn"),
        btnContinue = document.querySelector(".request_button"),
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

    const isRequired = value => value === '' ? true : false;
    const checkLength = (length, min, max) => length < min || length > max ? true : false;
    const checkSpecialCharactersAndNumbers = value => (/(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])|(?=(.*[0-9]))/).test(value);
    const isCardNumber = value => (/(?=(.*[a-zA-Z]))|(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/).test(value);
    const isMonth = value => (/^((0?[1-9])|((1)[0-2]))$/).test(value);
    const isYear = value => (/^((0?[1-9])|(([0-9])[0-9])|99)$/).test(value);

    const showError = (input, msg) => {
        input.classList.add("form-error");
        let divField;

        if(input.id === "month" || input.id === "year") {
            console.log(input.id);
            divField = input.parentElement.parentElement;
        } else {
            divField = input.parentElement;
        }
        const errorMsg = divField.querySelector("small");
        errorMsg.style.color = 'red';
        btnSubmit.disabled = 'true';

        return errorMsg.textContent = msg;
    };

    const showSuccess = input => {
        input.classList.remove("form-error");
        let divField;

        if(input.id === "month" || input.id === "year") {
            divField = input.parentElement.parentElement;
        } else {
            divField = input.parentElement;
        }

        const errorMsg = divField.querySelector("small");
        btnSubmit.disabled = 'false';

        return errorMsg.textContent = '';
    }

    postData(formForPost);
    validateData(formForPost);
    afterPost(wrapperRequest, formForPost);

    function postData(form) {

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const divError = document.createElement("div");
            divError.textContent = "Please, try again.";
            divError.classList.add("data_error")


            const request = new XMLHttpRequest();
            const formData = new FormData(form);

            request.open("POST", "server.php");

            request.send(formData);



            request.addEventListener("error", (e) => {
                e.preventDefault();
                form.append(divError);
                setTimeout(() => {
                    divError.remove();
                }, 3000);
            })

            request.addEventListener("load", () => {
                if (request.status === 200) {
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

    function afterPost(requestForm, form) {
        btnContinue.addEventListener("click", () => {
            if (form.classList.contains("hidden")) {
                requestForm.classList.add('hidden');
                return form.classList.remove('hidden');
            }
            return;
        })
        return;
    }


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

                    for (let i=0, len=value.length; i<len; i+=4) { // spacebar on front card picture
                        parts.push(value.substring(i, i+4))
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
                    cardMonth.textContent = value.length === 1 ? `0${value}` : value;
                    validateCardMonth(monthEl);
                    break;
                case 'year':
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
    }

});