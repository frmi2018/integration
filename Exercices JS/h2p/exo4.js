// let nom = prompt('Quel est votre nom ? ');
// let prenom = prompt('Quel est votre prenom ? ');
// let age = prompt('Quel est votre age ? ');
// let txt = ""
// txt += '--------------------\n';
// txt += '---- BIENVENUE -----\n';
// txt += '--------------------\n';
// txt += 'Votre nom est : '+ nom + '\n';
// txt += 'Votre prenom est : '+ prenom + '\n';
// txt += 'Vous avez ' + age + "ans";

// alert(txt);

var readline = require("readline-sync");

let nom = readline.question('Quel est votre nom ? ');
let prenom = readline.question('Quel est votre prenom ? ');
let age = parseInt(readline.question('Quel est votre age ? '));
let txt = ""
txt += '--------------------\n';
txt += '---- BIENVENUE -----\n';
txt += '--------------------\n';
txt += 'Votre nom est : '+ nom + '\n';
txt += 'Votre prenom est : '+ prenom + '\n';
txt += 'Vous avez ' + age + "ans";

console.log(txt);