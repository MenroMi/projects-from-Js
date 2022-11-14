function hamburger() {

    const btnBurger = document.querySelector(".menu_burger"),
          menu = document.querySelector(".menu"),
          menuLinks = document.querySelectorAll(".menu_item > a");
          
    hideMenuAfterClick(menu, btnBurger);

    function checkActiveClass(menuBrg, crossBtn) {
        crossBtn.classList.toggle('menu_burger_active');
        return menuBrg.classList.toggle('active_mobile_menu');
    }
    function hideMenuAfterClick(menuBrg, crossBtn) {
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(crossBtn.classList.contains('menu_burger_active') && menuBrg.classList.contains('active_mobile_menu')) {
                    crossBtn.classList.remove('menu_burger_active');
                    menuBrg.classList.remove('active_mobile_menu');
                }
                return; 
            })
        })
    }

    btnBurger.addEventListener("click", () => {
        checkActiveClass(menu, btnBurger);
    });

}

hamburger();