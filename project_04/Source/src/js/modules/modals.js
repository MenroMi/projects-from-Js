function openModal(modalSelector, timer) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (timer) {
        clearTimeout(timer);
    }
}

function closeModal(modal, windows) {

    windows.forEach(win => {
        win.style.display = 'none';
    });

    modal.style.display = 'none';
    document.body.style.overflow = '';

}

const modals = (timer) => {

    function bindModals(triggerSelector, modalSelector, closeSelector, closeOverflow = true) {


        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll("[data-modal]");

        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(win => {
                    win.style.display = 'none';
                });

                openModal(modalSelector, timer);
    
            });
    

        });

       document.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                closeModal(modal, windows);
            }                

       });

       modal.addEventListener("click", (e) => {
        if (e.target.classList.contains(modalSelector.slice(1)) && closeOverflow) {
            closeModal(modal, windows);
        }
        });

        close.addEventListener('click', () => {
                closeModal(modal, windows);
        });

    }

    bindModals(".popup_engineer_btn", ".popup_engineer", '.popup_engineer .popup_close');
    bindModals(".phone_link", ".popup", '.popup .popup_close');
    bindModals(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    bindModals(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
    bindModals(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);

};


export default modals;
export {openModal};