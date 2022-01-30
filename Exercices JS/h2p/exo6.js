var readline = require("readline-sync");

let saisie;
let fin = false;

console.log(saisie);

// tant que fin n'est pas égal à vrai
while (!fin) {
    if (saisie === undefined) {
        saisie = parseInt(readline.question('Quel nombre voulez-vous saisir ? '));
    } else {
        console.log(saisie);
        // Est-ce que saisie est un nombre donc supérieur à 9
        if (isNaN(saisie) || saisie < 10) {
            console.log("Ce n'est pas un nombre.")
            console.log('Veuillez recommencer la saisie, vous devez saisir un nombre.');
            saisie = parseInt(readline.question('Quel nombre voulez-vous saisir ? '));
        } else {
            fin = true;
        }
    }
}

console.log('Le nombre saisie est : ' + saisie);