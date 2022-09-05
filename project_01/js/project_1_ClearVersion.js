let numberOfFilms; // ilość obejrzanych filmów
// + przed prompt oznacza, że pytanie będzie prosiło wyłącznie liczby

function start() {
    
    numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', '');

    while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms))  {
        numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', '');
    }
}

start();

let personalMovieDB = { // obiekt dla naszej aplikacji
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};


function showMyDB() { // sprawdza czy user wybrał true or false w sprawie publiczności ankiety

    startgame: do {
        let questionnairePrivate = prompt('Скажи, пожалуйста, твоя анкета может быть публичной?', 'Правда ИЛИ Ложь');
        if (questionnairePrivate.toLowerCase() === "правда") {
            personalMovieDB.privat = false;
            alert('Прекрасно, идём дальше!');
        } else if(questionnairePrivate.toLowerCase() === "ложь") {
            personalMovieDB.privat = true;
            alert('Окей, твоя анкета не будет видна');
            break;
        } else {
            alert('Пожалуйста, дай точный ответ =)');
            continue startgame;
        }
    
    } while (personalMovieDB.privat === true);

}

showMyDB();

function dontShowDB(hidden) { // w przypadku false w poprzedniej funkcji program na końcu nie wyświetli tabeli(obiektu)
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        alert('Ошибка, анкета закрыта для просмотра!');
        personalMovieDB = null;
    }
 }

function writeYourGenres() {

    for ( let k = 1; k <= 3; k++) {
        let answerUser = prompt(`Ваш любимый жанр под номером ${k}?`);
        if ( answerUser === null || answerUser == '' || +answerUser) {
            k--;
        } else {
            personalMovieDB.genres[k-1] = answerUser;
        }
    }

    personalMovieDB.genres.pop();
}

writeYourGenres();

function rememberMyFilms() {

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
}

rememberMyFilms();

function yourInvolvement() {

    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы кіноман!');
    } else {
        alert('Проізошла ошібка!');
    }

}

yourInvolvement();

dontShowDB(personalMovieDB.privat);
