# Correction Box01

```
/***\
*   *
\***/
```

```
const box = (width, height) => {
  let str = "";
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if (
        (i === 1 && j === 1) ||
        (i === height && j === width && height !== 1 && width !== 1)
      ) {
        str = str + "/";
      } else if ((i === 1 && j === width) || (i === height && j === 1)) {
        str = str + "\\";
      } else if (i !== 1 && i !== height && j !== 1 && j !== width) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    if (i !== height) {
      str = str + "\n";
    }
  }
  return str;
};
console.log(box(4, 1));
```

Autre méthode :

```
const box = (width, height) => {
  let str = "";

  // Affiche chaque ligne
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 && j === 0) {
        str = str + "/";
      } else if (i === 0 && j === width - 1) {
        str = str + "\\";
      } else if (i !== 0 && i !== height - 1) {
        if (j === 0 || j === width - 1) {
          str = str + "*";
        } else {
          str = str + " ";
        }
      } else if (i === height - 1) {
        if (j === 0) {
          str = str + "\\";
        } else if (j === width - 1) {
          str = str + "/";
        } else {
          str = str + "*";
        }
      } else {
        str = str + "*";
      }
    }

    if (i !== height - 1) {
      str = str + "\n";
    }
  }
  return str;
};

console.log(box(5, 4));
```
