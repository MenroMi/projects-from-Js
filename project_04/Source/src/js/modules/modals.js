const modals = () => {

    function openModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';

    }

    function bindModals(triggerSelector, modalSelector, closeSelector) {


        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                openModal(modal);
    
            });
    

        });

       document.addEventListener('keydown', (e) => {

            if (e.keyCode === 27) {
                closeModal(modal);
            }
       });

       modal.addEventListener("click", (e) => {
        if (e.target.classList.contains('popup_engineer')) {
            closeModal(modal);
        }
        });

        close.addEventListener('click', () => {
                closeModal(modal);
        });

    }

    function timerId(modalWindow, time) {
        
        setTimeout(() => {
            document.querySelector(modalWindow).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);

    }


    timerId(".popup", 60000);
    bindModals(".popup_engineer_btn", ".popup_engineer", '.popup_engineer .popup_close');
    bindModals(".phone_link", ".popup", '.popup .popup_close');
    
};


export default modals;