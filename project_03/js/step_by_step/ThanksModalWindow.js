const modal = document.querySelector('.modal');

function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}


function showThanksModal() { // chcemy pokazać nowe modalnie okno po wysłaniu form
    // nie usunąć, tylko ukryć poprzednie i uwidocznić nowo stworzone;
    const prevModalDialog = document.querySelector('.modal__dialog');
    // wyciąga się to okno, które ma być poźniej ukryte.
    // podczas usuwania, przy powtórnej próbie włączyć modalne okno, nie otworzy się

    prevModalDialog.classList.add('hide'); //ukrywamy modalne okno
    openModal(); // odpowiada za włączenie modalnych okien
    const thanksModal = document.createElement('div'); // tworzymy nowe okno modalne (dynamiczne tworzony element)
    thanksModal.classList.add('modal__dialog'); // dodaje się do nowego okna ten sam styl. Taka zamiana jednego modalnego okna na drugie
    thanksModal.innerHTML = `
        <div class="modal__dialog">
            <div class="moda__close" data-close>×</div>
            <div class="modal__title"></div>
        </div>
    `; // dodajemy elementy, które mają się wyświetlić po kliknięciu
    

}