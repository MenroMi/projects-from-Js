import './slider';
import modals from "./modules/modals";
import {openModal} from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    // const timerId = setTimeout(() => openModal(".popup", timerId), 60000);
    // timerId
    modals();
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
    forms();

});