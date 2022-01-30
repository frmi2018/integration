const lowerUpper = (str) => {
  // Créer une nouvelle phrase vide
  let result = '';

  // Créer un tableau contenant chacun des mots
  const tab = str.split(' ');

  // Parcourir chaque mot
  for (let i = 0; i < tab.length; i++) {
    // Parcourir chaque lettre
    for (let j = 0; j < tab[i].length; j++) {
      // Ajouter une lettre sur 2 en minuscule, dans la nouvelle phrase
      if (j % 2 === 0) {
        result = result + tab[i].charAt(j).toLowerCase();
      } else {
        result = result + tab[i].charAt(j).toUpperCase();
      }
    }

    result = result + ' ';
  }

  return result;
};

console.log(lowerUpper('La ville de Paris'));
