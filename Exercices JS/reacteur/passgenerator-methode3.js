// Autre code (les options "uppercase" et "lowercase" sont true par défaut) :

const generator = require('generate-password');

const password = generator.generate({
  length: 16,
  numbers: true,
  symbols: true,
});

console.log(password); // d,j:quFOZewZp<1+
