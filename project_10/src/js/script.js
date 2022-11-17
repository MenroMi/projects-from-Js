window.addEventListener("DOMContentLoaded", () => {

    function scrollOnRequirements() {

        const btnRequire = document.querySelector("#require"),
              requirementsCoords = document.querySelector("#grapefruit");

        btnRequire.addEventListener('click', () => {
            return document.documentElement.scrollTo(0, requirementsCoords.offsetTop);
        });


    }

    scrollOnRequirements();


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


});