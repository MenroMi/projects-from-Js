function closeWindow(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';

}

function openWindow(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    if (modalTimerId) {
        console.log(modalTimerId);
        clearInterval(modalTimerId);
    }

}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // MODAL WINDOW

    const modalsOpen = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);

    modalsOpen.forEach(modal => {

        modal.addEventListener('click', () => openWindow(modalSelector, modalTimerId)); // 

    });

    modalWindow.addEventListener('click', (event) => {

        const target = event.target;
        if (target === modalWindow || target.getAttribute("data-close") == '') {closeWindow(modalSelector);}

    });

    document.addEventListener('keydown', (event) => { // modal window to close when push 'ESC'

        if (event.keyCode === 27 && modalWindow.classList.contains('show')) {closeWindow(modalSelector);} // unique code "esc" key 

    });

    function showModalByScroll() {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ) {
            // można dodać -1 px w przypadku gdy nie pojawia się modalne okno
            openWindow(modalSelector, modalTimerId);
            window.removeEventListener('scroll',showModalByScroll);
        }

        
    }
    
    window.addEventListener('scroll',showModalByScroll);


}

export default modal;
export {closeWindow};
export {openWindow};