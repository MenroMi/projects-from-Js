const numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', ''); // ilość obejrzanych filmów
// + przed prompt oznacza, że pytanie będzie prosiło wyłącznie liczby
const personalMovieDB = { // obiekt dla naszej aplikacji
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let i = 0;

first: do {
    const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
    if (lastFilm == false) {
        alert('Нельзя строк пустых');
        continue first;
    } else if (lastFilm.length >= 50) {
        alert('Слішком большое названіе!');
        continue first;
    }
    const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
    if (rateThisFilm > 10) {
        alert('Оценка должна быть от 0 до 10.');
        const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
        personalMovieDB.movies[lastFilm] = rateThisFilm;
    }
    personalMovieDB.movies[lastFilm] = rateThisFilm;
    i++;    
} while ( i < 2 );

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы кіноман!');
} else {
    alert('Проізошла ошібка!');
}


console.log(personalMovieDB);


// const lastFilm = prompt('Какой был последній просмотренный фільм?', ''), 
// // pytanie do użytkownika o nazwie ostatniego filmu
//     rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', ''),
// // pytanie dotyczące oceny danego filmu
//     lastFilm1 = prompt('Какой был последній просмотренный фільм?', ''),
//     rateThisFilm1 = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');

// personalMovieDB.movies[lastFilm] = rateThisFilm; 
/* 
personalMovieDB - odwołanie się do obiektu
. - oznacza, że otwieramy obiekt i chcemy się odwołać do klucza
movies - jest tym kluczem do którego chcemy się odwołać bezpośrednio w obiekcie nadrzędnym
w [] - w bracketach chcemy przekazać zmienną z wyrażeniem, która będzie zawartością danego klucza(obiekt, massive itd)
= rateThisFilm - jest takim samym kluczem, tyle że napisany po operatorze przyswajania (=).
*/
// personalMovieDB.movies[lastFilm1] = rateThisFilm1;


//+prompt('Сколько фільмов вы уже посмотрелі?')
//prompt('Какой был последній просмотренный фільм?')
//+prompt('Какую оценку Вы бы поставілі этому фільму?');

// for ( let i = 0; i < 2; i++) {
//     if (i === 0) {
//         const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
//         const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
//         personalMovieDB.movies[lastFilm] = rateThisFilm;
//     } else if (i === 1) {
//         const lastFilm1 = prompt('Какой был последній просмотренный фільм?', '');
//         const rateThisFilm1 = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
//         personalMovieDB.movies[lastFilm1] = rateThisFilm1;
//     }
// }

// first: for ( let i = 0; i < 2; i++ ) {
//     const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
//     if ( lastFilm == false ) {
//         alert('Нельзя оставлять пустые строкі');
        
//     }

//     const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
//     personalMovieDB.movies[lastFilm] = rateThisFilm;

// }


// let i = 0;

// first: while (i < 2) {
//     const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
//     if (lastFilm == false) {
//         alert('Нельзя строк пустых');
//         continue first;
//     }
//     const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
//     personalMovieDB.movies[lastFilm] = rateThisFilm;
//     i++;
// }