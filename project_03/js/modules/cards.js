import {getData} from "../services/services";

function cards() {
    const menu = document.querySelector('.menu'),
          field = menu.querySelector('.menu__field'),
          container = field.querySelector('.container');

    class Items {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;            
            this.title = title;
            this.descr = descr;
            this.price = price; // (1) (5)
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); // (2)
        }

        changeToUAH() { // podaną metodę możemy wywołać również w kosntruktorze (3)
            this.price = this.price * this.transfer; // konwerter walut (powiedzmy);    (4) 
        }


        render() {
            const element = document.createElement('div');
            

            if (this.classes.length !== 0) {
                this.classes.forEach(className => element.classList.add(className));
            } else {
                this.element = "menu__item";
                element.classList.add(this.element);

            }

            element.innerHTML = `<img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;

            this.parent.append(element);


        }

    }



    getData('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new Items(img, altimg, title, descr, price, ".menu .container").render();
            });
    });
}

export default cards;