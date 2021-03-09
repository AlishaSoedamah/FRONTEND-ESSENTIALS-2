
// vraag de gebruiker om getalen 
getalEen = prompt("Vul hier het eerste getal in");
getalTwee = prompt("Vul hier het tweede getal in");


function telOp(parEen, parTwee) {

    var som = parseInt(parEen) + parseInt(parTwee);
    return som;
}

console.log(telOp(getalEen, getalTwee));

