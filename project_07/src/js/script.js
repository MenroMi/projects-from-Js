import validator from "./modules/validator";
import forms from "./modules/form";


window.addEventListener("DOMContentLoaded", () => {

    const formForPost = document.querySelector("form");

    validator(formForPost);
    forms(formForPost);

});