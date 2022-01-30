const displayArray = (tab, opt) => {
  if (opt === true) {
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
  } else {
    const str = tab.join(' ');
    return str;
  }
};

console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'], false)); // Affichera "Pomme Banane Abricot Cerise"
console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise'], true)); // Affichera "Pomme, Banane, Abricot et Cerise"
