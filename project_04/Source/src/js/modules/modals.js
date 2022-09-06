const modals = () => {
    function bindModals(trigger, modal, close) {

        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        
        });

        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains('popup_engineer')) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

       document.addEventListener('keydown', (e) => {

            if (e.keyCode === 27) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }


       });


        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
          engineerModal = document.querySelector('.popup_engineer'),
          modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModals(callEngineerBtn, engineerModal, modalEngineerClose);

};


export default modals;