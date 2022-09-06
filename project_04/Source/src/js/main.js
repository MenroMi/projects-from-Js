import './slider';
import modals from "./modules/modals";
import {openModal} from "./modules/modals";

window.addEventListener('DOMContentLoaded', () => {

    const timerId = setTimeout(() => openModal(".popup", timerId), 5000);

    modals(timerId);


});