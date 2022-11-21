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

export default forms;