const pyramid = (size) => {
  let nbStar = 1;
  let str = "";
  let Space = size - 1;

  // afficher les lignes
  for (let line = 0; line < size; line++) {
    // ajout espace début de ligne
    if (Space > 0) {
      for (i = 0; i < Space; i++) {
        str += " ";
      }
    }
    // ajout 2 croix sauf 1ère ligne
    if (line != 0) {
      nbStar += 2;
    }
    // ajout des croix
    for (let i = 1; i <= nbStar; i++) {
      str += "X";
    }
    // ajout espace fin de ligne
    if (Space > 0) {
      for (i = 0; i < Space; i++) {
        str += " ";
      }
    }
    // décrémente espace
    Space--;
    // ajout changement ligne
    str += "\n";
  }
  return str;
};

console.log(pyramid(5));
console.log(pyramid(1));
console.log(pyramid(3));
