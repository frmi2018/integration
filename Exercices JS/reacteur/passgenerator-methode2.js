// Générer un mot de passe de 16 caractères dans lequel il peut y avoir des nombres, des lettres minuscules, des lettres majuscules et des symboles :
const generator = require('generate-password');

const password = generator.generate({
  length: 16,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
});

console.log(password); // d,j:quFOZewZp<1+
