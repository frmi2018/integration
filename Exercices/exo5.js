var readline = require("readline-sync");

let chiffreSaisie = parseInt(readline.question('Quelle table de miltiplication voulez-vous afficher ? '));
let resultat;

for (let i = 1; i <= 10; i++) {
    resultat = chiffreSaisie * i;
    console.log(chiffreSaisie + " * " + i + " = " + resultat); // pas besoin de /n car console log revient à la ligne
};