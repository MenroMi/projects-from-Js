"use strict";

let numberOfFilms; // ilość obejrzanych filmów
// + przed prompt oznacza, że pytanie będzie prosiło wyłącznie liczby

let personalMovieDB = { // obiekt dla naszej aplikacji
    count: [],
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start() { // 1
    
        this.count = +prompt('Сколько фільмов вы уже посмотрелі?', '');

        while (this.count == '' || this.count === null || isNaN(this.count))  {
            this.count = +prompt('Сколько фільмов вы уже посмотрелі?', '');
        }
        
    },
    
    showMyDB(hidden) {
         // 3 w przypadku false w poprzedniej funkcji program na końcu nie wyświetli tabeli(obiektu)
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            alert('Ошибка, анкета закрыта для просмотра!');
        }

    },

    writeYourGenres() { // 4
        for ( let k = 1; k <= 3; k++) {
            let answerUser = prompt(`Ваш любимый жанр под номером ${k}?`);
            if ( answerUser == null || answerUser == '' || +answerUser) {
                alert('Введены некорректные данные');
                k--;
            } else {
                personalMovieDB.genres[k-1] = answerUser;
            }
        }

        personalMovieDB.genres.forEach((key, i) => {
            console.log(`Любимый жанр #${i+1} - это ${key}`);
          });
        // personalMovieDB.genres.pop();
    },

    rememberMyFilms() { // 5
        let i = 0;

        first: do { // dodana została etykieta (label), do której można się zwrócić
            const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
            if (lastFilm == false || lastFilm === null) { 
        /*
        Górny if zawiera warunki, gdy zmienna z odpowiedzią będzie miała pustą (false) lub anulowaną odpowiedź (null)
        */
                alert('Нельзя строк пустых');
                continue first; 
        /*
        W przypadku spełnionego warunku wyskakuje alarm i loop wraca do początku (dzięki połączonej etykiecie)
        */
            } else if (lastFilm.length >= 50) {
                alert('Слішком большое названіе!');
                continue first;
            }
            for ( let x = 0; x < 1; x++) {
                const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
                if (rateThisFilm > 10 || rateThisFilm === null || rateThisFilm == false || isNaN(rateThisFilm)) {
                    alert('Оценка должна быть от 0 до 10.');
                    x--;
        /*
        inkrement (x++) dodaje liczbę do naszej wartości (x), a przy spełnieniu warunka, to dekrement (x--) cofa
        */
                } else {
                    personalMovieDB.movies[lastFilm] = rateThisFilm;
                }
            }
            // personalMovieDB.movies[lastFilm] = rateThisFilm;
            i++;    
        } while ( i < 2 );
    },

    yourInvolvement() { // 6

        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы кіноман!');
        } else {
            alert('Проізошла ошібка!');
        }

    },

    toggleVisibleMyDB(privatCheck) {

        if (privatCheck === false) {
            this.privat = true;
            console.log('wartość zmiennej: ' + this.privat);
        } else if (privatCheck === true) {
            this.privat = false;
            console.log('wartość zmiennej: ' + this.privat);
        }
        
    },

};

personalMovieDB.start();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.yourInvolvement();
// personalMovieDB.dontShowDB(personalMovieDB.privat);
// oneFunc(item, nextCheck); 

// =================================