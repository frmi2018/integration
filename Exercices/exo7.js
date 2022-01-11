var readline = require("readline-sync");

let saisie, diviseur;
let fin = false;

function verifier(saisie, diviseur) {
    if (verificationSiDivisible(saisie, diviseur)) {
        if (saisie >= 10) {
            console.log('Le nombre ' + saisie + ' est divisible par ' + diviseur)
        } else {
            console.log('Le chiffre ' + saisie + ' est divisible par ' + diviseur)
        }
    } else {
        if (saisie >= 10) {
            console.log('Le nombre ' + saisie + " n'est pas divisible par " + diviseur)
        } else {
            console.log('Le chiffre ' + saisie + " n'est pas divisible par " + diviseur)
        }
    }
    console.log('Le résultat de ' + saisie + ' / ' + diviseur + " = " + saisie / diviseur);
}

function verificationSiDivisible(saisie, diviseur) {
    return saisie % diviseur === 0;
}

function saisieClavier() {
    saisie = parseInt(readline.question('Saisir un nombre : '));
    diviseur = parseInt(readline.question('Saisir un diviseur : '));
}

// tant que fin n'est pas égal à vrai
while (!fin) {
    if (saisie === undefined) {
        console.log("Je verifie qu'un nombre est divisible par un autre.")
        saisieClavier();
    } else {
        if (isNaN(saisie) || isNaN(diviseur) || diviseur == 0) {
            console.log('Erreur de saisie, merci de recommencer.')
            saisieClavier();
        } else {
            verifier(saisie, diviseur);
            fin = true;
        }
    }
}