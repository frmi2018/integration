const box = (width, height) => {
  let str = ""; // chaine de caractère à retourner par la fonction
  for (let y = 0; y < height; y++) {
    // pour chaque ligne
    for (let x = 0; x < width; x++) {
      // pour chaque colonne
      if ((y === 0 || y === height - 1) && (x === 0 || x === width - 1)) {
        // position x,y = coin ?
        str += "o"; // affiche rond
      } else if (y > 0 && y < height - 1) {
        // position y autre que 1ère et dernière ligne ?
        if (x > 0 && x < width - 1) {
          // position x autre que 1ère colonne et dernière colonne ?
          str += " "; // oui, affiche " "
        } else {
          str += "|"; // non, affiche "|"
        }
      } else {
        // affiche "-" dans toutes les autres position
        str += "-";
      }
    }
    str += "\n"; // changement de ligne
  }
  return str; // retourne la chaine de caractère à afficher
};

console.log(box(5, 3));
console.log(box(5, 1));
console.log(box(1, 1));
console.log(box(1, 5));
console.log(box(4, 4));
