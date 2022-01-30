# Correction Box00

```
o---o
|   |
o---o
```

```
const box = (width, height) => {
  //   console.log("o---o\n|   |\no---o");
  let str = "";

  // Affiche chaque ligne
  for (let i = 0; i < height; i++) {
    // Affiche chaque caractere de chaque ligne
    for (let j = 0; j < width; j++) {
      // Est-ce qu'on est sur la premiere ou la derniere ligne ?
      if (i === 0 || i === height - 1) {
        // Oui on est sur la premiere ou la derniere ligne
        if (j === 0 || j === width - 1) {
          str = str + "o";
        } else {
          str = str + "-";
        }
      } else {
        // Non, on n'est pas sur la premiere ou la derniere ligne
        if (j === 0 || j === width - 1) {
          str = str + "|";
        } else {
          str = str + " ";
        }
      }
    }
    // Est-ce que c'est la derniere ligne ?
    if (i !== height - 1) {
      str = str + "\n";
    }
  }

  return str;
};

console.log(box(5, 3));
```

Box00 - Correction par étapes
Étape 1 : afficher 3 lignes d'un tiret chacune

```
const box = (width, height) => {
  let str = "";

  for (let i = 1; i <= height; i++) {
    str = str + "-";
    str = str + "\n";
  }

  return str;
};

console.log(box(5, 3));
```

```
-
-
-
```

Étape 2 : afficher 3 lignes de 5 tirets chacune

```
const box = (width, height) => {
  let str = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      str = str + "-";
    }
    str = str + "\n";
  }

  return str;
};

console.log(box(5, 3));
```

```
-----
-----
-----
```

Étape 3 : différencier la 1ère et la dernière ligne des autres lignes

```
const box = (width, height) => {
  let str = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if (i === 1 || i === height) {
        str = str + "-";
      } else {
        str = str + "*";
      }
    }
    str = str + "\n";
  }

  return str;
};

console.log(box(5, 3));
```

```
-----
*****
-----
```

Étape 4 : gérer le 1er et le dernier caractère de la 1ère ligne et de la dernière ligne

```
const box = (width, height) => {
  let str = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if (i === 1 || i === height) {
        if (j === 1 || j === width) {
          str = str + "o";
        } else {
          str = str + "-";
        }
      } else {
        str = str + "*";
      }
    }
    str = str + "\n";
  }

  return str;
};

console.log(box(5, 3));
```

```
o---o
*****
o---o
```

Étape 5 : gérer, pour les lignes centrales, le 1er caractère et le dernier caractère

```
const box = (width, height) => {
  let str = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if (i === 1 || i === height) {
        if (j === 1 || j === width) {
          str = str + "o";
        } else {
          str = str + "-";
        }
      } else {
        if (j === 1 || j === width) {
          str = str + "|";
        } else {
          str = str + "*";
        }
      }
    }
    str = str + "\n";
  }

  return str;
};

console.log(box(5, 3));
```

```
o---o
|***|
o---o
```

Étape 6 : Remplacer les \* par des espaces

```
o---o
|   |
o---o
```
