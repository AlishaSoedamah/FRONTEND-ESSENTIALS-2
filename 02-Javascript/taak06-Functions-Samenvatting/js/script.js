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
//comeback to later
function showRandomNumber2() {
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();

//true or false, change the backgroundcolor. How is the question...

function geefAntwoord(antwoord) {
    // getal 1 < getal 2 EN als het antwoord lager  is dan groen
    if (getal1 < getal2 == true) {
        document.querySelector("body").style.backgroundColor = 'Green';
    }
    // getal 1 < getal 2 EN als het antwoord hoger  is dan rood
    if (getal1 < getal2 == false) {
        document.querySelector("body").style.backgroundColor = 'Red';
    }
    // getal 1 > getal 2 EN als het antwoord hoger  is dan groen
    // getal 1 > getal 2 EN als het antwoord lager  is dan rood

    console.log();


    //if (geefAntwoord == true) {
    //    document.querySelector("body").style.backgroundColor = 'Green';
    //}
    //else {
    //    document.querySelector("body").style.backgroundColor = 'Red';
    //}
}

