const rot13 = (str) => {
  let result = ''; // le résultat final
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = alphabet.toUpperCase();
  const len = str.length;

  for (let i = 0; i < len; i++) {
    let element = ''; // à chaque tour, je repars d'une string vide pour construire un nouveau mot
    const indexLowerChar = alphabet.indexOf(str[i]); // savoir à quel index de alphabet se trouve le caractère auquel j'en suis dans ma boucle
    const indexUpperChar = alphabetUpper.indexOf(str[i]); // idem pour alphabetUpper

    // succession de conditions pour ajouter le bon caractère correspondant
    if (indexLowerChar !== -1 && indexLowerChar < 13) {
      element += alphabet[indexLowerChar + 13];
    } else if (indexLowerChar !== -1 && indexLowerChar >= 13) {
      element += alphabet[indexLowerChar - 13];
    } else if (indexUpperChar !== -1 && indexUpperChar < 13) {
      element += alphabetUpper[indexUpperChar + 13];
    } else if (indexUpperChar !== -1 && indexUpperChar >= 13) {
      element += alphabetUpper[indexUpperChar - 13];
    } else {
      element += str[i];
    }
    result += element;
  }
  return result;
};

console.log(rot13('abc'));
console.log(rot13('My horse is Amazing.'));
console.log(rot13('AkjhZ zLKIJz , 23y'));
console.log(rot13('-12'));
