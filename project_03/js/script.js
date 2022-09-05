import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";
import {openWindow} from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openWindow(".modal", modalTimerId), 10000); // when we want open modal window
    //after some time, and clear interval later

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', "tabheader__item_active");
    timer(".timer", "2022-09-30T23:58:59.000Z");
    modal("[data-modal]", '.modal', modalTimerId);
    cards();
    forms("form", modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: "total",
        currentCounter: 'current',
        field: ".offer__slider-inner",
        wrap: ".offer__slider-wrapper"
    });
    calc();

});