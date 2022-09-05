/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ],

    removeAdd() {
        const blockAds = document.querySelector('.promo__adv'),
        picAds = blockAds.querySelectorAll('img'),
        titleAds = blockAds.querySelector('.promo__adv-title').remove();   
        
        picAds.forEach(item => {
            item.remove();
        });
    
        return titleAds;        
    },

    replaceCategory() {
        const category = document.querySelector('.promo__genre');
        
        category.textContent = 'ДРАМА';
        return category;


    },

    replaceBackImg() {

        const backImg = document.querySelector('.promo__bg');
        backImg.style.backgroundImage = "url('/projects/project_2/img/bg.jpg')";
        backImg.style.backgroundPosition = 'top';

        return backImg;

    },

    sortFilms() {
        
        const films = document.querySelectorAll(".promo__interactive-item"),
        sortingFilms = this.movies.sort();


        for(let i = 0; i < sortingFilms.length; i++) {

            if (sortingFilms[i].length >= 21) {
            
                films[i].innerHTML = `${i+1}. ${sortingFilms[i].slice(0,21)}...`;
                films[i].insertAdjacentHTML('beforeend', "<div class='delete'></div>");
            
            } else {

                films[i].innerHTML = `${i+1}. ${sortingFilms[i]}`;
                films[i].insertAdjacentHTML('beforeend', "<div class='delete'></div>");
            
            }
        }

        // this.movies.forEach((item, i) => {
        //     films[i].innerHTML = `${i+1}. ${item} <div class="delete"></div>`;
        // });

    },
    addFilm() {

        const filmInput = document.querySelector(".add > input.adding__input"),
              acceptBtn = document.querySelector('.add > button'),
              objListFilm = document.querySelector(".promo__interactive-list"),
              favoriteFilm = document.querySelector('input[type="checkbox"]');


        acceptBtn.addEventListener('click', function() {
            let inputVal = filmInput.value;
            movieDB.movies.push(inputVal);
            objListFilm.insertAdjacentHTML('beforeend',`<li class="promo__interactive-item">${inputVal}<div class="delete"></div></li>`);
        });

        favoriteFilm.addEventListener('change', function() {
            console.log('Добавляем любимый фильм...');

        });

        acceptBtn.addEventListener('click', () => {
            return movieDB.sortFilms();
        });

    },


    
    deleteFilm() {
        
        const btnDelete = document.querySelectorAll(".delete");

        if (btnDelete) {
            btnDelete.forEach((trash) => {

                trash.addEventListener('click', () => {
                    
                    trash.parentElement.remove();
    
                });
            });
        }
    }
};

movieDB.removeAdd();
movieDB.replaceCategory();
movieDB.replaceBackImg();
movieDB.sortFilms();
movieDB.addFilm();

movieDB.deleteFilm();
