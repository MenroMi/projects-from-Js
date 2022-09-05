
/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';

window.addEventListener('DOMContentLoaded', () => {


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
            picAds = blockAds.querySelectorAll('img');
            
            picAds.forEach(item => {
                item.remove();
            });
        
            return picAds;        
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
       
    };
    
    const addForm = document.querySelector('form.add'),
          filmInput = document.querySelector("input.adding__input"),
          objListFilm = document.querySelector(".promo__interactive-list"),
          favoriteFilm = document.querySelector('input[type="checkbox"]');
    
    const sortFilms = (arr) => {
    
        arr.sort();
        // objListFilm.innerHTML = ""; // we remove all elements of list in html document
        // arr.forEach((film, i) => {
        //     objListFilm.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}<div class="delete"></div></li>`;
        // });
    };
    
    
    
        // this.movies.forEach((item, i) => {
        //     films[i].innerHTML = `${i+1}. ${item} <div class="delete"></div>`;
        // });
    
    const addFilm = () => {
    
        addForm.addEventListener('submit', (event) => {
    
            event.preventDefault();
    
            if (filmInput.value) {
    
                if (filmInput.value.length > 21) {
                    filmInput.value = `${filmInput.value.slice(0, 21)}...`;
                }
    
                if (favoriteFilm.checked) {
                    console.log('Добавляем любимый фильм...');
                }
    
                movieDB.movies.push(filmInput.value);
                sortFilms(movieDB.movies);
    
                makeNewList(movieDB.movies, objListFilm);
    
            }
    
            event.target.reset();
    
        });
    
    };
    
    const makeNewList = (films, parent) => {
    
        parent.innerHTML = "";
    
        films.forEach((film, i) => {
            objListFilm.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}<div class="delete"></div></li>`;
        });
    
        document.querySelectorAll(".delete").forEach((trash, i) =>{
            trash.addEventListener('click', () => {
                trash.parentElement.remove();
                movieDB.movies.splice(i, 1);
    
                makeNewList(movieDB.movies, objListFilm);
            });
        });
    
    }
    
    
    
    movieDB.removeAdd();
    movieDB.replaceCategory();
    movieDB.replaceBackImg();
    sortFilms(movieDB.movies);
    makeNewList(movieDB.movies, objListFilm);
    addFilm();

});