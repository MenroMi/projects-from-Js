const numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', ''); // ilość obejrzanych filmów
// + przed prompt oznacza, że pytanie będzie prosiło wyłącznie liczby
const personalMovieDB = { // obiekt dla naszej aplikacji
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let x = 0;
while (x < 1){
    const   a = prompt('Последний фильм?', ''),
            b = +prompt('Ваша оценка?', '');
    if(a != null && b != null && a != '' && b != '' && a.length < 50){
    // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и а < 50 символов то
    personalMovieDB.movies[a] = b;
    console.log("Done!");
    } else {
        console.log("Error");
        x--;
    }
    x++;
}
// Second
let y = 0;
while (y < 1){
    const   c = prompt('Последний фильм?', ''),
            d = +prompt('Ваша оценка?', '');
    (c != null && d != null && c != '' && d != '' && c.length < 50) ? personalMovieDB.movies[c] = d : y--, console.log("Error");
    y++;
}