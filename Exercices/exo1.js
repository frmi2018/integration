let a = 1;
let b = 5;
console.log('----- Avant Inversion -----');
console.log('A : ' + a);
console.log('B : ' + b);
console.log('----- Après Inversion -----');
let tmp = a; // variable temporaire pour permettre l'inversion
a = b;
b = tmp;
console.log('A : ' + a);
console.log('B : ' + b);