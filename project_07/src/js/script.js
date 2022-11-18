"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const formForPost = document.querySelector("form"),
          wrapperRequest = document.querySelector(".wrapper_after_request"),
          btnContinue = document.querySelector(".request_button");

    postData(formForPost);
    afterRequestForm(wrapperRequest, formForPost    );


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

    function afterRequestForm(requestForm, form) {
        btnContinue.addEventListener("click", () => {
            if(form.classList.contains("hidden")) {
                requestForm.classList.add('hidden');
                return form.classList.remove('hidden');
            }
            return;
        })
        return;
    }


});