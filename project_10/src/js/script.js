function hamburger() {

    const btnBurger = document.querySelector(".menu_burger"),
          menu = document.querySelector(".menu");

    function checkActiveClass(menuBrg, crossBtn) {
        crossBtn.classList.toggle('menu_burger_active');
        return menuBrg.classList.toggle('active');
    }

    btnBurger.addEventListener("click", () => {
        checkActiveClass(menu, btnBurger);
    });

}

hamburger();