// Générer un tableau de mots de passe de 16 caractères chacun. Il devra y avoir, dans chaque mot de passe, au moins un nombre, une lettre majuscule, une lettre minuscule et un symbole :

const generator = require('generate-password');

const password = generator.generateMultiple(5, {
  length: 16,
  numbers: true,
  symbols: true,
  strict: true,
});

console.log(password);
/*
[ '4-j6xmT<LAL&6rR"',
  'eWvwlG}K6d%"m4>|',
  'I5,jOscsY`![T~q?',
  ',6Ke~azIui28=.&>',
  'HF{}G#o7,[gY`yIT' ]
*/
