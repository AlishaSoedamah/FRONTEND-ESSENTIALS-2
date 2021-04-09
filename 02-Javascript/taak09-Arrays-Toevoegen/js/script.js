topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = [];

//met deze for-loop word de ordered list gevuld met film namen
for (i = 0; i < topFilms.length; i++) {
    document.querySelector(".imdb-film" + (i + 1)).innerHTML = topFilms[i];
}


function kiesFilm() {
    var keuze = prompt("welke film staat op plek 1");
    eigenTopFilms.push(topFilms[keuze]);
    document.querySelector(".eigen-film1").innerHTML = eigenTopFilms[0];

    var keuze = prompt("welke film staat op plek 2");
    eigenTopFilms.push(topFilms[keuze]);
    document.querySelector(".eigen-film2").innerHTML = eigenTopFilms[1];

    var keuze = prompt("welke film staat op plek 3");
    eigenTopFilms.push(topFilms[keuze]);
    document.querySelector(".eigen-film3").innerHTML = eigenTopFilms[2];
}

console.log(eigenTopFilms);