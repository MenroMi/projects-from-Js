"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const formForPost = document.querySelector("form"),
        wrapperRequest = document.querySelector(".wrapper_after_request"),
        btnSubmit = document.querySelector(".data_btn"),
        btnContinue = document.querySelector(".request_button"),
        cardName = document.querySelector(".card_front_name"),
        cardNumber = document.querySelector(".card_front_number");

    const usernameEl = document.querySelector("#username"),
        numberEl = document.querySelector("#cardnumber"),
        monthEl = document.querySelector("#month"),
        yearEl = document.querySelector("#year"),
        cvvCodeEl = document.querySelector("#code-cvv");

    const isRequired = value => value === '' ? true : false;
    const checkLength = (length, min, max) => length < min || length > max ? true : false;
    const checkSpecialCharactersAndNumbers = value => {
        const regex = /(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])|(?=(.*[0-9]))/;
        return regex.test(value);
    };
    const isCardNumber = value => {
        const regex = /^((4\d{3})|(5[1-5]\d{2}))(-?|\040?)(\d{4}(-?|\040?)){3}|^(3[4,7]\d{2})(-?|\040?)\d{6}(-?|\040?)\d{5}/;
        return console.log(regex.test(value));

    };
    const isMonth = value => value.test(/^((0?[1-9])|((1|2)[0-9])|12)$/) ? true : false;
    const isYear = value => value.test(/^((0?[1-9])|((1|2)[0-9])|99)$/) ? true : false;
    const showError = (input, msg) => {
        input.classList.add("form-error");

        const divField = input.parentElement;
        const errorMsg = divField.querySelector("small");
        errorMsg.style.color = 'red';

        return errorMsg.textContent = msg;
    };
    const showSuccess = input => {
        input.classList.remove("form-error");

        const divField = input.parentElement;
        const errorMsg = divField.querySelector("small");
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

            let parts = []

            switch (e.target.id) {
                case 'username':
                    if (e.target.value.length > 25) {
                        validateUsername(usernameEl);
                        return;
                    }
                    cardName.textContent = e.target.value;
                    validateUsername(usernameEl);
                    break;
                case 'cardnumber':
                    if (e.target.value.length > 16) {
                        validateCardNumber(numberEl);
                    }
                    for (let i=0, len=e.target.value.length; i<len; i+=4) {
                        parts.push(e.target.value.substring(i, i+4))
                      }
                      if (parts.length) {
                        cardNumber.textContent = parts.join(' ');
                      } else {
                          return e.target.value;
                      }
                    validateCardNumber(numberEl);
                    break;
                case 'password':
                    checkPassword();
                    break;
                case 'confirm-password':
                    checkConfirmPassword();
                    break;
            }
        });
    }

    function validateUsername(username) {

        let valid = false;
        let min = 3,
            max = 25;
        const name = username.value.trim();

        if (isRequired(name)) {
            showError(username, "Can't be blank.");
        } else if (checkLength(name.length, 3, 25)) {
            showError(username, `Wrong length. Your cardname must be between ${min} and ${max} characters.`);
        } else if (checkSpecialCharactersAndNumbers(name)) {
            showError(username, "Without special characters or numbers.");
        }
        else {
            showSuccess(username);
            valid = true;
        }

        return valid;

    }

    function validateCardNumber(numbers) {
        let valid = false;
        const numb = numbers.value.trim();

        if (isRequired(numb)) {
            showError(numbers, "Can't be blank.");
        } else if (!isCardNumber(numb)) {
            showError(numbers, "Card number must have 16 numbers.");
        } else {
            showSuccess(numbers);
            valid = true;
        }

        return valid;
    } 



});