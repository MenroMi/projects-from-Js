function tabs() {

    function tabGlazing(imgs, tabs, tabContent, tabParent) {
        const parent = document.querySelector(tabParent),
              tabsChildren = document.querySelectorAll(tabs),
              imgChildren = document.querySelectorAll(imgs),
              tabsContent = document.querySelectorAll(tabContent);
        



        function hide() {


            imgChildren.forEach(img => {
                img.classList.add('img_glazing');
            });

            tabsChildren.forEach(tab => {
                tab.classList.remove('active');
            });

            tabsContent.forEach(content => {
                content.style.display = 'none';
                
            });
        }

        function show(i = 0) {

            tabsChildren[i].classList.add("active");

            tabsContent[i].style.display = 'block';
        }
        
        hide();
        show();

        parent.addEventListener('click', (e) => {
            const target = e.target;
            if (target) {
                tabsChildren.forEach((tab, i) => {
                    if (target == tab) {
                        hide();
                        show(i);
                    }
                });
            }
            if (target) {
                imgChildren.forEach((img, i) => {
                    if (target == img) {
                        hide();
                        show(i);
                    }
                });
            }

        });



    }

    tabGlazing(".glazing_block img",".glazing_block a", '.glazing_content', ".glazing_slider");

}


export default tabs;