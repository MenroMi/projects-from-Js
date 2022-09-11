const forms = () => {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll("[name='user_phone']");

    const message = {
        loading: 'Загрузка...',
        success: "Спасибо! С вами свяжутся!",
        failure: 'Ошибка! Что-то не так!'
    };

    phoneInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '');
        });
    });

    const post = async (url, data, messageElem) => {
        messageElem.textContent = message.loading;

        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clear = (inputs) => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    // inputs.forEach(input => {
    //     if(input.getAttribute('name') == "user_phone") {
    //         input.setAttribute('type', 'number');
    //     }
    // });




    form.forEach(elem => {
        bindPostData(elem);
    });

    // validationPhone();

    // function validationPhone() {

    //     const inputPhone = document.querySelectorAll("[name='user_phone']");

    //     form.forEach(form => {

    //         const err = document.createElement('div');

    //         inputPhone.forEach(input => {

    //             err.classList.add("status");
    //             form.appendChild(err);

    //             input.addEventListener('input', (e) => {
                    
    //                 e.preventDefault();

    //                 if (input.value.match(/\D/g)) {
    //                     input.style.border = "1px solid red";
    //                     err.textContent = 'Введите сами цифры!';
    //                 } else {
    //                     input.style.border = '';
    //                     err.remove();
    //                 }

                    

    //             });
    //         });

        
    //     });

    // }

    function bindPostData(form) {


        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            form.appendChild(statusMessage);

            const formData = new FormData(form);


            post("assets/server.php", formData, statusMessage)
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                clear(inputs);
                setTimeout(() => {statusMessage.remove();}, 5000);
            });


        });
    }

};

export default forms;