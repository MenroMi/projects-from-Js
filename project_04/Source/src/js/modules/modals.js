const modals = () => {
    function bindModals(trigger, modal, close) {

        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
        
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        
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