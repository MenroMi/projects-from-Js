import './slider';
import modals from "./modules/modals";
import {openModal} from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModal from "./modules/changeModulState";


window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const timerId = setTimeout(() => openModal(".popup", timerId), 60000);
    const modulState = {};

    changeModal(modulState);
    console.log(modulState);
    modals(timerId);
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
    tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
    forms();

});