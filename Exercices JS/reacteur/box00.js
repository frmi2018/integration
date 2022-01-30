const box = (width, height) => {
  //   console.log("o---o\n|   |\no---o");
  let str = '';

  // Affiche chaque ligne
  for (let i = 0; i < height; i++) {
    // Affiche chaque caractere de chaque ligne
    for (let j = 0; j < width; j++) {
      // Est-ce qu'on est sur la premiere ou la derniere ligne ?
      if (i === 0 || i === height - 1) {
        // Oui on est sur la premiere ou la derniere ligne
        if (j === 0 || j === width - 1) {
          str = str + 'o';
        } else {
          str = str + '-';
        }
      } else {
        // Non, on n'est pas sur la premiere ou la derniere ligne
        if (j === 0 || j === width - 1) {
          str = str + '|';
        } else {
          str = str + ' ';
        }
      }
    }
    // Est-ce que c'est la derniere ligne ?
    if (i !== height - 1) {
      str = str + '\n';
    }
  }

  return str;
};

console.log(box(5, 3));
