// Pour faire des saisies dans le terminal
// installer le module suivant : npm install readline-sync
// dans terminal : taper node fichier.js

var readline = require("readline-sync");

const PUISSANCE = 2;

let saisie = parseInt(readline.question("Puissance voulue ? ")); //converti saisie (string) en Entier
console.log(PUISSANCE + " à la puissance " + saisie + " = " + saisie**PUISSANCE);

// sans readline-sync
// utiliser un fichier HTML pour charger le code JavaScript
// ou mettre le code entre une balise script

// let puissance = prompt("Puissance voulue ? ");
// let resultat = puissance**2;
// alert("2 à la puissance " + puissance + " = " + resultat);