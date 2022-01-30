// Retourner la string str en ordre inverse

const str = "Le Reacteur";

// 1 - transformer str en tableau
const tab = str.split("");
console.log(tab); // [ 'L', 'e', ' ', 'R', 'e', 'a', 'c', 't', 'e', 'u', 'r' ]

// 2 - on va appliquer la méthode reverse sur le tableau pour inverser l'ordre
tab.reverse();
console.log(tab); // [ 'r', 'u', 'e', 't', 'c', 'a', 'e', 'R', ' ', 'e', 'L' ]

// 3 - on va transformer le tableau en string
const newStr = tab.join("");
console.log(newStr); // ruetcaeR eL

// -------

// Version courte :
const result = str.split("").reverse().join("");
console.log(result); // ruetcaeR eL
