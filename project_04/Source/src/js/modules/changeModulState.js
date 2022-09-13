import checkNumb from "./checkNumInputs";

const changeModal = (state) => {
    
    const balconForms = document.querySelectorAll(".balcon_icons_img"),
          balconWidth = document.querySelector("#width"),
          balconHeight = document.querySelector("#height"),
          balconGlazing = document.querySelector("#view_type"),
          balconColdOrWarm = document.querySelectorAll('.checkbox'),
          btn = document.querySelector('.popup_calc_button');

    function listenerEvent(selector, event, prop) {
        selector.forEach((form, i) => {
            form.addEventListener(event, () => {
                state[prop] = i+1;
                console.log(state);
            });
        });
    }

    listenerEvent(balconForms, 'click', 'form');

    inputSize(balconHeight, 'height');
    inputSize(balconWidth, 'width');

    function inputSize(selector, propertie) {

        checkNumb("#width");
        checkNumb("#height");

        selector.addEventListener('input', () => {
            state[`${propertie}`] = +selector.value;
            btn.removeAttribute('disabled');
        });
        
        if(selector.value === '') {
            btn.setAttribute('disabled', 'true');
        }

    }

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

    balconGlazing.addEventListener('change', (e) => {
        state.glazing = `${e.target.value}`;
    });

    coldOrWarm(this);

    function coldOrWarm(contects) {
        balconColdOrWarm.forEach(item => {
            if ( item !== contects) {
                item.checked = false;
            }
        });
    }

    console.log(balconColdOrWarm);

};

export default changeModal;
