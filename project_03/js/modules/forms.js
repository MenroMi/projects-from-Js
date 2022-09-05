import {closeWindow, openWindow} from "./modal";
import {postData} from "../services/services";

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

            postData('http://localhost:3000/requests', json)
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
        openWindow('.modal', modalTimerId); // odpowiada za włączenie modalnych okien
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
            closeWindow('.modal');
        }, 4000);

    }
}

export default forms;