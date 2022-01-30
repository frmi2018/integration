// Version 1

const swapCase = (tab) => {
  const str = tab.join("*");
  console.log(str); // Hello*Le Reacteur

  let newStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i].toLowerCase()) {
      // si le caractère sur lequel on boucle est en minuscule, on l'ajoute à newStr en majuscule
      newStr = newStr + str[i].toUpperCase();
    } else {
      // sinon, on l'ajoute à newStr en minuscule
      newStr = newStr + str[i].toLowerCase();
    }
  }

  console.log(newStr); // hELLO*lE rEACTEUR
  const newTab = newStr.split("*");
  console.log(newTab); // [ 'hELLO', 'lE rEACTEUR' ]

  return newTab;
};

console.log(swapCase(["Hello", "Le Reacteur"])); // Affichera : ["hELLO", "lE rEACTEUR"]

// étapes :
// transformer le tableau (tab) en string (str)
// créer une nouvelle string (newSTr) (vide au départ)
// parcourir str et ajouter les caractères un à un à newStr en permutant la casse
// transformer newStr en tableau (newTab)

// ------------------------------------------------------------------------------

// Version 2
const swapCase = (tab) => {
  const newTab = [];

  let str = "";

  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
      // console.log(tab[i][j]); // ou bien console.log(tab[i].charAt(j));
      if (tab[i][j] === tab[i][j].toUpperCase()) {
        str = str + tab[i][j].toLowerCase();
      } else {
        str += tab[i][j].toUpperCase();
      }
    }
    newTab.push(str);
    str = ""; // on "vide" str avant de passer au mot suivant
  }

  return newTab;
};

console.log(swapCase(["Hello", "Le Reacteur"])); // Affichera : ["hELLO", "lE rEACTEUR"]

// étapes :
// créer un tableau vide (newTab) qu'on remplira avec des éléments casse inversées
// parcourir tab puis parcourir chaque élément de tab (double boucle)
// pour chaque élément, on va déclarer une string vide (str) qu'on remplira avec les caractères de chaque élément mais casse inversée
// pusher str dans newTab
