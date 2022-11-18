"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const formForPost = document.querySelector("form"),
          wrapperRequest = document.querySelector(".wrapper_after_request"),
          btnSubmit = document.querySelector(".data_btn"),
          btnContinue = document.querySelector(".request_button"),
          inputs = document.querySelectorAll("input"),
          cardholderName = document.querySelector(".card_front_name"),
          cardholderNumber = document.querySelector(".card_front_number"),
          cardholderDate = document.querySelector(".card_front_date"),
          errorCardName = document.querySelector(".data_form_error");

    postData(formForPost);
    afterPost(wrapperRequest, formForPost);
    
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            validationData(inputs, errorCardName);
        })
    })


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
                if(request.status === 200) {
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
            if(form.classList.contains("hidden")) {
                requestForm.classList.add('hidden');
                return form.classList.remove('hidden');
            }
            return;
        })
        return;
    }

    function validationData(inputs, error) {

        inputs.forEach(input => {

            switch(input.getAttribute("id")) {
                case "name":
                    validateCardName(input, error);
                    break;
            }


        })

        function validateCardName(input, error) {

            if(input.value.match(/^[\w\W]{0,10}$/i) && input.value.match(/\D/g) && !input.value.match(/^[>#*!(){}[\]]+$/g)) {
                error.classList.add("hidden");
                btnSubmit.disabled = false;
                input.style.border = "1px solid black";
                cardholderName.textContent = input.value;
            } else if (input.value.length === 0) {
                error.classList.add("hidden");
                cardholderName.textContent = "name surname";
                return input.style.border = "1px solid black";
            } else {
                error.classList.remove("hidden");
                btnSubmit.disabled = true;
                return input.style.border = "4px solid hsl(0, 100%, 66%)";
            }

            return;

        }
    }

});