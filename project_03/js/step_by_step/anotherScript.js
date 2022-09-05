window.addEventListener('DOMContentLoaded', () => {

    const tabParent =  document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent');


    function hideTabsContent() {
        
        tabsContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');  
        });
        tabs.forEach(tab => { // class-active will be turn off with all
            // off tabs

            tab.classList.remove("tabheader__item_active");
        });

    }

    function showTabsContent(numb = 0) {
        tabsContent[numb].classList.add('show', 'fade');
        tabsContent[numb].classList.remove('hide');
        tabs[numb].classList.add("tabheader__item_active");
    }

    hideTabsContent();
    showTabsContent();

    tabParent.addEventListener('click', (event) => {

        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (target == tab) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }

    });

});


// ==================

// XMLHttpRequest and FormData

/*

const forms = document.querySelectorAll('form'); // 1

const message = { // 18
    loading: 'img/form/spinner.svg', // żeby dodać zdjęcie
    success: "Спасибо! Скоро с вами свяжутся!",
    failure: 'Что-то пошло не так'
}; // magazyn wiadomości, które chcemy pokazać klientowi


forms.forEach(item => { // 16

    postData(item); // 17

});

function postData(form) { // 2

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

        const request = new XMLHttpRequest(); // 6
        request.open('POST', 'server.php'); // 7

        request.setRequestHeader('Content-type', 'application/json'); // 8 
        
        const formData = new FormData(form); // 9

        // ==============
        // json-formats
        const obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        const json = JSON.stringify(obj);
        // ===============
        request.send(json); // 10

        request.addEventListener('load', () => { // 11

            if (request.status == 200){ // 12
                console.log(request.response); // 13
                showThanksModal(message.success);
                // statusMessage.textContent = message.success;
                form.reset(); // resetowanie formy
                statusMessage.remove();
            } else { //14
                showThanksModal(message.failure);
                // statusMessage.textContent = message.failure;

            }
        });

    });
}

*/