function tabs() {

    function tabGlazing(tabs, tabContent, tabParent) {
        const parent = document.querySelector(tabParent),
              tabsChildren = document.querySelectorAll(tabs),
            //   imgChildren = document.querySelectorAll(...imgs),
              tabsContent = document.querySelectorAll(tabContent);
        



        function hide() {


            // imgChildren.forEach(img => {    
            //     img.classList.add('img_glazing');
            // });

            tabsChildren.forEach(tab => {
                if ( tab.tagName == 'A') {
                    tab.classList.remove("active");
                } else {
                    tab.classList.remove("after_click");
                }
            });

            tabsContent.forEach(content => {
                content.style.display = 'none';
            });
        }

        function show(i = 0) {

            if ( tabsChildren[i].tagName == 'A') {
                tabsChildren[i].classList.add("active");
            } else {
                tabsChildren[i].classList.add("after_click");
            }

            tabsContent[i].style.display = 'block';
        }
        
        hide();
        show();

        parent.addEventListener('click', (e) => {
            const target = e.target;
            if (target) {
                tabsChildren.forEach((tab, i) => {
                    if (target == tab) {
                        
                        console.log(target);
                        hide();
                        show(i);
                    }
                });
            }
            // if (target) {
            //     imgChildren.forEach((img, i) => {
            //         if (target == img) {
            //             hide();
            //             show(i);
            //         }
            //     });
            // }

        });



    }

    tabGlazing(".glazing_block a", '.glazing_content', ".glazing_slider"); // ".glazing_block img"
    tabGlazing(".decoration_item div", "[data-elem]", ".decoration_slider");

}


export default tabs;