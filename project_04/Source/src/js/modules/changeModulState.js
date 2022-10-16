import checkNumb from "./checkNumInputs";

const changeModal = (state) => {
    
    const balconForms = document.querySelectorAll(".balcon_icons_img"),
          balconWidth = document.querySelectorAll("#width"),
          balconHeight = document.querySelectorAll("#height"),
          btn = document.querySelector('.popup_calc_button');

    checkNumb("#width");
    checkNumb("#height");
    // validationState(state, balconForms, 'form');
    
    // function listenerEvent(selector, event, prop) {
    //     selector.forEach((form, i) => {

    //         form.addEventListener(event, () => {
    //             switch(form.tagName) {
    //                 case 'SPAN':
    //                     state[prop] = i;

    //                     break;
    //                 case 'INPUT':
    //                     if (form.getAttribute('type') === "checkbox") {
    //                         selector.forEach((check, j) => {
    //                             check.checked = false;
    //                             if (i == j) {
    //                                 check.checked = true;
    //                                 i == 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
    //                             }
    //                         });
    //                     } else {
    //                         state[prop] = +form.value;
    //                     }
    //                     break;
    //                 case 'SELECT':
    //                     state[prop] = form.value;
    //                     break;
    //                 }
                
    //             console.log(state);
    //         });

    //     });
    // }

    // listenerEvent(balconForms, 'click', 'form');

    // listenerEvent(balconGlazing, 'change', 'type');
    // listenerEvent(balconColdOrWarm, 'change', 'profile');

    modalFormAndSize(balconForms,'form');
    modalFormAndSize(balconHeight, 'height');
    modalFormAndSize(balconWidth, 'width');

    function validationDataFirst(elem) {
    
            if (elem.tagName == 'INPUT') {
                if(state.height == '' && state.width == '') {
                    elem.classList.add("error_modal");
                    btn.setAttribute('disabled', 'true');
                } else {
                    elem.classList.remove('error_modal');
                    validationData();
                }
            }
    }

    function validationDataSecond(elem) {
    
        if (elem.firstElementChild.tagName == 'SPAN') {
            if(state.form == '') {
                elem.classList.add("error_modal");
                btn.setAttribute('disabled', 'true');
            } else {
                elem.classList.remove("error_modal");
                validationData();
            }
        }

    }

    function validationData() {
            if ( state.width != '' && state.height != '' && state.form != '') {
                btn.removeAttribute('disabled');
            }
    }


    // ==== first modal popup_calc

    function modalFormAndSize(selector, prop) {
        selector.forEach((item, i) => {

            if (item.tagName == 'INPUT') {
                btn.addEventListener('mouseenter', () => {validationDataFirst(item);});
                item.addEventListener('input', () => {
                    state[prop] = item.value;
                    validationDataFirst(item);
                    console.log(state);
                });
            }

            if (item.tagName == 'SPAN') {
                btn.addEventListener('mouseenter', () => {validationDataSecond(item.parentElement);});
                item.addEventListener('click', () => {
                    state[prop] = i;
                    validationDataSecond(item.parentElement);
                    console.log(state);
                });
            }

        });

    }


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

};

export default changeModal;
