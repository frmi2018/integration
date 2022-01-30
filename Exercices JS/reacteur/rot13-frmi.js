const rot13 = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = alphabet.toUpperCase();
  let position = 0;
  const newTab = [];

  // pour tous les caractères de la chaine str
  for (let i = 0; i < str.length; i++) {
    // chercher la position de la lettre en cours dans le tableau alphabet;
    if (
      alphabet.indexOf(str[i]) === -1 &&
      alphabetUpperCase.indexOf(str[i]) === -1
    ) {
      newTab.push(str[i]);
    } else if (alphabetUpperCase.indexOf(str[i]) === -1) {
      // ajouter 13 à la position
      position = alphabet.indexOf(str[i]);

      position += 13;
      if (position >= 26) {
        position -= 26;
      }
      newTab.push(alphabet[position]);
    } else {
      position = alphabetUpperCase.indexOf(str[i]);

      position += 13;
      if (position >= 26) {
        position -= 26;
      }
      newTab.push(alphabetUpperCase[position]);
    }
  }
  return newTab.join("");
};

console.log(rot13("abc")); // nop
console.log(rot13("My horse is Amazing.")); // Zl ubefr vf Nznmvat.
console.log(rot13("AkjhZ zLKIJz , 23y")); // NxwuM mYXVWm , 23l
console.log(rot13("-12")); // -12
