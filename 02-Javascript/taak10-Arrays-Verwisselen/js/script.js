topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];

function fillTable() {
    var i;
    for (i = 0; i < topFilms.length; i++) {
        document.getElementsByClassName("film-ranking")[i].innerHTML = i + 1;
        document.getElementsByClassName("film-naam")[i].innerHTML = topFilms[i];
    }
}
fillTable();
function moveup(item) {
    if (item > 0) {
        //roep de functie aan om een item te verplaatsen
        moveInArray(topFilms, item, item - 1);
        fillTable();
    }
    else {
        alert("Kan niet!");
    }
}

function movedown(item) {
    if (item < 4) {
        moveInArray(topFilms, item, item + 1);
        fillTable();
    }
    else {
        alert("Kan niet!");
    }
}
//deze functie krijgt 3 waardes mee: de naam van de array, de positie waar die opstaat, de positie waar die heen moet
function moveInArray(arr, from, to) {
    // Delete the item from it's current position
    var item = arr.splice(from, 1);
    // Move the item to its new position
    arr.splice(to, 0, item[0]);
    console.log(topFilms);
};
// laat de array topFilms in de console zien

function resetList() {

}