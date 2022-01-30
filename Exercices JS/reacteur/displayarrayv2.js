const displayArray = (tab) => {
  let str = '';
  for (let i = 0; i < tab.length; i++) {
    if (i === tab.length - 1) {
      str = str + tab[i];
    } else if (i === tab.length - 2) {
      str = str + tab[i] + ' et ';
    } else {
      str = str + tab[i] + ', ';
    }
  }
  return str;
};

console.log(displayArray(['Xavier', 'Farid', 'Kévin'])); // Affichera "Xavier, Farid et Kévin"
console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'])); // Affichera "Pomme, Banane, Abricot et Cerise"
