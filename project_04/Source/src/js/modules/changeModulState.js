import checkNumb from "./checkNumInputs";

const changeModal = (state) => {
    
    const balconForms = document.querySelectorAll(".balcon_icons_img"),
          balconWidth = document.querySelectorAll("#width"),
          balconHeight = document.querySelectorAll("#height"),
          balconGlazing = document.querySelectorAll("#view_type"),
          balconColdOrWarm = document.querySelectorAll('.checkbox'),
          btn = document.querySelector('.popup_calc_button');

    checkNumb("#width");
    checkNumb("#height");
    // validationState(state, balconForms, 'form');

    // function validationState(stateSelector,balconSelector, prop) {
    //     btn.addEventListener("mouseenter", () => {
    //         if(stateSelector[prop] == '') {
    //             balconSelector[0].parentElement.style.border = '1px solid red';
    //             btn.setAttribute('disabled', 'true');
    //         } else {
    //             balconSelector[0].parentElement.parentElement.style.border = '';
    //             btn.removeAttribute('disabled');
    //         }
    //     });
    // }
    
    function listenerEvent(selector, event, prop) {
        selector.forEach((form, i) => {

            form.addEventListener(event, () => {
                switch(form.tagName) {
                    case 'SPAN':
                        state[prop] = i;
                        form.parentElement.style.border = '';
                        btn.removeAttribute('disabled');
                        break;
                    case 'INPUT':
                        if (form.getAttribute('type') === "checkbox") {
                            selector.forEach((check, j) => {
                                check.checked = false;
                                if (i == j) {
                                    check.checked = true;
                                    i == 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
                                }
                            });
                        } else {
                            state[prop] = +form.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = form.value;
                        break;
                    }
                
                console.log(state);
            });


        });
    }

    listenerEvent(balconForms, 'click', 'form');
    listenerEvent(balconHeight, 'input', 'height');
    listenerEvent(balconWidth, 'input', 'width');
    listenerEvent(balconGlazing, 'change', 'type');
    listenerEvent(balconColdOrWarm, 'change', 'profile');







    /*
                    if (selector.length > 1 && form.getAttribute('type') !== "checkbox") {
                    state[prop] = i+1;
                } else {
                    if (form.getAttribute('type') === "checkbox") {
                        selector.forEach((check, j) => {
                            check.checked = false;
                            if (i == j) {
                                check.checked = true;
                                if (i == 0) {
                                    state[prop] = 'Cold';
                                } else {
                                    state[prop] = "Warm";
                                }
                            }
                        });
                    } else {
                        state[prop] = form.value;
                    }
                }
                
    */

    // inputSize(balconHeight, 'height');
    // inputSize(balconWidth, 'width');

    // function inputSize(selector, propertie) {

    //     checkNumb("#width");
    //     checkNumb("#height");

    //     selector.addEventListener('input', () => {
    //         state[`${propertie}`] = +selector.value;
    //         btn.removeAttribute('disabled');
    //     });
        
    //     if(selector.value === '') {
    //         btn.setAttribute('disabled', 'true');
    //     }

    // }

    // function inputSize(selector, propertie) {

    //     btn.addEventListener("mouseenter", () => {
    //         if(selector.value === "") {
    //             elemError.textContent = 'Заполните все данные';
    //             elemError.style.display = 'block';
    //             elemError.style.width = '180px';
    //             selector.style.border = '1px solid red';
    //             selector.style.boxShadow = '0px 0px 4px red';
    //             btn.setAttribute('disabled', 'true');
    //         }
    
    //         selector.addEventListener('input', () => {

    //             if(selector.value.match(/\D/ig)) {
    //                 selector.style.border = '1px solid red';
    //                 selector.style.boxShadow = '0px 0px 4px red';
    //                 elemError.textContent = 'Впишите только цифры!';
    //                 elemError.style.cssText = `
    //                     display: block;
    //                     height: 20px;
    //                     width: 200px;
    //                     box-shadow: 0px 0px 6px red;
    //                     margin: 0 auto;
    //                     border-radius: 3px;
    //                     font-weight: 600;
    //                     margin-top: 15px;
    //                 `;
    //                 btn.setAttribute('disabled', 'true');

    //             } else {
    //                 selector.style.border = '';
    //                 selector.style.boxShadow = '';
    //                 elemError.style.display = 'none';
    //                 state[`${propertie}`] = +selector.value;
    //                 btn.removeAttribute('disabled');
    //             }
                
    //         });
    //     });
    // }

    // coldOrWarm(this);

    // function coldOrWarm(contects) {
    //     balconColdOrWarm.forEach(item => {
    //         if ( item !== contects) {
    //             item.checked = false;
    //         }
    //     });
    // }

    // console.log(balconColdOrWarm);

};

export default changeModal;
