strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arroutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
function stringNaarPosities(str) { //str = STUDENT
    outputArray = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strAlfabet.length; j++) {
            if (str[i].toUpperCase() == strAlfabet[j]) { //str[0], strAlfabet[18]
                //outputArray[18,19,20,3,4,13,19]
                //str1 = L, strAlfabet[11] = L
                outputArray.push(j); //outputArray[10,11,0,18,10,11,0]
                //[K,L,A,S,K,L,A]
                // console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        }
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
//let lengteArr = arr.lenth
function positiesNaarString(arr) {
    var outputString = "";
    //TODO: opdracht 1
    //outputArray[18,19,20,3,4,13,19]
    outputString["S", "T", "U"];
    //hier ga ik posities weer terugzetten naar letters en ik zet dit in de variable uitputstring
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        outputString += strAlfabet[item];
    }
    return outputString;
}

//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodeword(strInput, strCodeword) { //student,klas
    var outputString = "";

    var inputLength = strInput.length; //lengte van het woord student, 7
    var codewordLength = strCodeword.length; //lengte van het woord klas, 4

    var intDiv = Math.floor(inputLength / codewordLength); //het aantal keer dat het codeword in zijn geheel in het bericht past
    var intMod = inputLength % codewordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld

    console.log(intDiv);

    //TODO: opdracht 2
    //maak twee losse for loops om een correcte string terug te geven
    //hier moet ik met 2 for loops van KLAS -> KLASKLA maken
    //in intDiv staat hoeveel keer KLAS moet voorkomen
    //in intMod staat hoeveel leters er dan nog overblijven en dat is 3 -> KLA
    for (var i = 0; i < intDiv; i++) {
        outputString += strCodeword;
        console.log(outputString);
    }
    for (var i = 0; i < intMod; i++) {
        outputString += strCodeword[i];
    }
    console.log("Codeword full: " + outputString);
    return outputString;
}

//functie die een een bericht versleuteld.
function versleutel() {
    strInput = document.querySelector("#input").value;
    strCodeword = document.querySelector("#codeword").value;

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);//student,klas
    arrInputPosities = stringNaarPosities(strInput);//STUDENT outputArray[18,19,20,3,4,13,19]
    arrCodewordPosities = stringNaarPosities(strCodewordFull);//KLASKLA outputArray[10,11,0,18,10,11,0]


    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if (arrInputPosities[i] + arrCodewordPosities[i] > 25) {
            //i = 0 - > als 18 + 10 = 26
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i]) - 25); //- > (18 + 10) 25 -> 18 - 25 = 3 (D)
        }
        else {
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }

    }


    console.log("versleuteld bericht: " + positiesNaarString(outputArray));
    document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}

function ontsleutel() {
    //TODO: opdracht 3
    strCodeword = document.querySelector("#codeword").value;
    outputString = document.querySelector("#output").value;
    strCodewordFull = vermenigvuldigCodeword(outputString, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arroutputPosities = stringNaarPosities(outputString);
    //console.log(strCodeword + strCodewordFull + arroutputPosities);

    outputArray = [];
    for (var i = 0; i < arroutputPosities.length; i++) {
        if (arroutputPosities[i] - arrCodewordPosities[i] < 0) {
            outputArray.push((arroutputPosities[i] - arrCodewordPosities[i]) + 25);
        }
        else {
            outputArray.push(arroutputPosities[i] - arrCodewordPosities[i]);
        }
    }
    document.querySelector('#output').value = positiesNaarString(outputArray);

}