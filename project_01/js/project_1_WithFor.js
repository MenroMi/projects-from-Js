const numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', ''); // ilość obejrzanych filmów
// + przed prompt oznacza, że pytanie będzie prosiło wyłącznie liczby
const personalMovieDB = { // obiekt dla naszej aplikacji
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


first: for ( let i = 0; i < 2;) {
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
}

console.log(personalMovieDB);

// first: for ( let i = 0; i < 2; i++ ) {
//     const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
//     if ( lastFilm == false ) {
//         alert('Нельзя оставлять пустые строкі');
        
//     }

//     const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
//     personalMovieDB.movies[lastFilm] = rateThisFilm;

// }