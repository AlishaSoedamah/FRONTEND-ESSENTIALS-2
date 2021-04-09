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


function showRandomNumber2() {
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();


function geefAntwoord(antwoord) {

    if (getal1 < getal2 == true) { // 1ste getal is kleiner
        if (antwoord == "lager") {
            //antwoord is goed
            document.querySelector("body").style.backgroundColor = 'Green';
            score = score + 1;
        }
        else {
            //antwoord is niet goed
            document.querySelector("body").style.backgroundColor = 'Red';
            score = score - 1;
        }
    }

    else { // 1ste getal is groter
        if (antwoord == "hoger") {
            //antwoord is goed
            document.querySelector("body").style.backgroundColor = 'Green';
            // getal 1 > getal 2 EN als het antwoord hoger is dan groen
            score = score + 1;
        }
        // antwoord is niet goed
        else {
            document.querySelector("body").style.backgroundColor = 'Red';
            // getal 1 > getal 2 EN als het antwoord fout is dan rood
            score = score - 1;
        }
    }

    document.querySelector(".score").innerHTML = score;
    showRandomNumber1();
    showRandomNumber2();
}

