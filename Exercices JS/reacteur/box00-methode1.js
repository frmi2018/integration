const box = (width, height) => {
  let str = ""; // chaine de caractère retourné par la fonction
  let caract = ""; // caractère à afficher
  // pour chaque ligne
  for (let h = 0; h < height; h++) {
    // Pour chaque colonne de la ligne en cours
    for (let w = 0; w < width; w++) {
      // la position actuelle est un coin ?
      if ((h == 0 || h == height - 1) && (w == 0 || w == width - 1)) {
        // oui, le caractère à ajouter est "o"
        caract = "o";
        // non, tester si ligne autre que 1ère et dernière
      } else if (h > 0 && h < height - 1) {
        // oui, tester si colonne différente de la 1ère et dernière
        if (w > 0 && w < width - 1) {
          // oui, le caractère à ajouter est "espace"
          caract = " ";
          // non, le caractère à ajouter est "|"
        } else {
          caract = "|";
        }
        // non, le caractère à ajouter est forcément "-"
      } else {
        caract = "-";
      }
      // ajouter le caractère à la chaine de caractère
      str += caract;
    }
    // fin de ligne, ajouter saut de ligne à la chaine de caractère
    str += "\n";
  }
  // fin de la fonction, retourner la chaine de caractère
  return str;
};

console.log(box(5, 3));
console.log(box(5, 1));
console.log(box(1, 1));
console.log(box(1, 5));
console.log(box(4, 4));
