import './slider';
import modals from "./modules/modals";
import {openModal} from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => {

    // const timerId = setTimeout(() => openModal(".popup", timerId), 60000);
    // timerId
    modals();
    tabs();

});