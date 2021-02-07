let strNaam;
let boolNaamCorrect;


// vraag de gebruiker om zijn naam én sla de opgegeven naam op in strNaam
strNaam = prompt("Hoe heet je?");

// toon een-confirm box (gebruiker kan op OK of Cancel drukken). Als de gebruiker op OK drukt, wordt er TRUE opgeslagen in de boolNaamCorrect variabele. Als Cancel dan FALSE.
boolNaamCorrect = confirm("Heet je echt " + strNaam + "?");

//True?
if (boolNaamCorrect == true) {
    alert("welkom " + strNaam);
}

//False?
else {
    strNaam = prompt("Nja nog een keer dan: hoe heet je?");
    boolNaamCorrect = confirm("Heet je echt " + strNaam + "?");
}

//True this time?
if (boolNaamCorrect == true) {
    alert("hiya " + strNaam);
}

//Still false?
else {
    alert("Dat is ook prima, welkom.")
}


