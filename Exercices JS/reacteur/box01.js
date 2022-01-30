const box = (width, height) => {
  let str = "";
  let caract = "";

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      // entre 2e et avant dernière ligne ?
      if (h > 0 && h < height - 1) {
        if (w == 0 || w == width - 1) {
          caract = "*";
        } else {
          caract = " ";
        }
      } else {
        // 1ère ligne ?
        if (h == 0) {
          if (w == 0) {
            caract = "/";
          } else if (w == width - 1) {
            caract = "\\";
          } else {
            caract = "*";
          }
        } else {
          if (w == 0) {
            caract = "\\";
          } else if (w == width - 1) {
            caract = "/";
          } else {
            caract = "*";
          }
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
