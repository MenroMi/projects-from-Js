const numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', ''); // ilość obejrzanych filmów
// + przed prompt oznacza, że pytanie będzie prosiło wyłącznie liczby
const personalMovieDB = { // obiekt dla naszej aplikacji
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


const lastFilm = prompt('Какой был последній просмотренный фільм?', ''), 
// pytanie do użytkownika o nazwie ostatniego filmu
    rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', ''),
// pytanie dotyczące oceny danego filmu
    lastFilm1 = prompt('Какой был последній просмотренный фільм?', ''),
    rateThisFilm1 = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');

personalMovieDB.movies[lastFilm] = rateThisFilm; /* 
personalMovieDB - odwołanie się do obiektu
. - oznacza, że otwieramy obiekt i chcemy się odwołać do klucza
movies - jest tym kluczem do którego chcemy się odwołać bezpośrednio w obiekcie nadrzędnym
w [] - w bracketach chcemy przekazać zmienną z wyrażeniem, która będzie zawartością danego klucza(obiekt, massive itd)
= rateThisFilm - jest takim samym kluczem, tyle że napisany po operatorze przyswajania (=).
*/
personalMovieDB.movies[lastFilm1] = rateThisFilm1;

console.log(personalMovieDB);

//+prompt('Сколько фільмов вы уже посмотрелі?')
//prompt('Какой был последній просмотренный фільм?')
//+prompt('Какую оценку Вы бы поставілі этому фільму?');