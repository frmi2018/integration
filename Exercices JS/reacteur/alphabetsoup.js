const alphabetSoup = (str) => {
  const result = str.split('').sort().join('');

  return result;
};

console.log(alphabetSoup('hello')); // Affichera "ehllo"
console.log(alphabetSoup('thereactor')); // Affichera "aceehorrtt"
console.log(alphabetSoup('hooplah')); // Affichera "ahhloop"
