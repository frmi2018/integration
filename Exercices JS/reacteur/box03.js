const box = (width, height) => {
  let str = "";
  let caract = "";

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      // ligne 1 ?
      if (h == 0) {
        if (w == 0) {
          caract = "A";
        } else if (w == width - 1) {
          caract = "B";
        } else if (w == 1 || w == width - 2) {
          caract = "-";
        } else {
          caract = "*";
        }
        // Dernière ligne ?
      } else if (h == height - 1) {
        if (w == 0) {
          caract = "D";
        } else if (w == width - 1) {
          caract = "C";
        } else if (w == 1 || w == width - 2) {
          caract = "-";
        } else {
          caract = "*";
        }
      } else {
        if (w > 0 && w < width - 1) {
          caract = " ";
        } else if (h == 1 || h == height - 2) {
          caract = "|";
        } else {
          caract = "*";
        }
      }
      str += caract;
    }
    str += "\n";
  }
  return str;
};

console.log(box(5, 3));
console.log(box(5, 1));
console.log(box(1, 1));
console.log(box(1, 5));
console.log(box(4, 4));
console.log(box(7, 6));
