import checkNumb from "./checkNumInputs";
import { closeModal } from "./modals";

const forms = (state) => {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: "Спасибо! С вами свяжутся!",
        failure: 'Ошибка! Что-то не так!'
    };

    checkNumb("[name='user_phone']");

    const post = async (url, data, messageElem) => {
        messageElem.textContent = message.loading;

        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    function clear(items) {

        if (items.length) {
            items.forEach(item => {
                item.value = '';
            });
        } else {
            for ( let key in items) {delete items[key];}
        }

    }

    // inputs.forEach(input => {
    //     if(input.getAttribute('name') == "user_phone") {
    //         input.setAttribute('type', 'number');
    //     }
    // });




    form.forEach(elem => {
        bindPostData(elem);
    });

    function bindPostData(form) {


        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div'),
                  windows = document.querySelectorAll("[data-modal]");

            statusMessage.classList.add('status');

            form.appendChild(statusMessage);

            const formData = new FormData(form);

            for (let key in state) {
                formData.append(key, state[key]);
            }


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
                clear(state);
                setTimeout(() => {statusMessage.remove();
                    setTimeout(() => {closeModal("[data-modal]", windows);});
                }, 2000);
            });


        });
    }

};

export default forms;


// ==============================================



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
