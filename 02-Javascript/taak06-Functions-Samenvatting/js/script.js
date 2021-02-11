var score = 0;
let getal1;

function makeRandomNumber() {
    return Math.floor(Math.random() * 99 + 1);
}

function showRandomNumber1() {
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

getal1 = showRandomNumber1();

//random numer 2

function showRandomNumber2() {
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();

//true or false, change the backgroundcolor. How is the question...
function geefAntwoord() {

}

if (geefAntwoord == true) {
    document.querySelector("body").style.backgroundColor = 'Green';
}
else {
    document.querySelector("body").style.backgroundColor = 'Red';
}
//marked to come back to later... last update 11-2-2021 20:17 by alisha I am so confused bruh