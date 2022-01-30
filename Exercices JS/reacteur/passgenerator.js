const generator = require('generate-password');

const password = generator.generate({
  length: 10,
  numbers: true,
});

console.log(password); // HojZrsBhzd

// Autre méthode (la longueur est 10 par défaut et les nombres sont inclus par défaut. On peut donc ne pas préciser d'options.) :

const generator = require('generate-password');

const password = generator.generate();

console.log(password); // HojZrsBhzd
