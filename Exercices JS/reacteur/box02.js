const box = (width, height) => {
  let str = "";
  let caract = "";

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (h == 0) {
        if (w == 0 || w == width - 1) {
          caract = "A";
        } else {
          caract = "B";
        }
      } else if (h == height - 1) {
        if (w == 0 || w == width - 1) {
          caract = "C";
        } else {
          caract = "B";
        }
      } else {
        if (w > 0 && w < width - 1) {
          caract = " ";
        } else {
          caract = "B";
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
