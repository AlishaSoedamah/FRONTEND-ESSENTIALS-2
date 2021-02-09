//Alert box
function alertFunctie() {
    alert("Een alert box!");
}

//Prompt
function promptFunctie() {
    prompt("What's up suckers");
}
//Tonen in console.log
console.log(promptFunctie);

//confirmbox
function confirmboxFunctie() {

    confirmbox = confirm("klik een knop!");

    if (confirmbox == true) {
        console.log("Ok");

    } else {
        console.log("Ok dan niet");
    }

}

alertFunctie();
promptFunctie();
confirmboxFunctie();