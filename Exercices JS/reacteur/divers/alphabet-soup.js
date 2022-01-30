const alphabetSoup = (str) => {
  const tab = str.split("");
  console.log(tab); // [ 'h', 'e', 'l', 'l', 'o' ]

  const newTab = tab.sort();
  console.log(newTab); // [ 'e', 'h', 'l', 'l', 'o' ]

  const newStr = newTab.join("");
  console.log(newStr); // ehllo

  return newStr;

  //   return str.split("").sort().join("");
};

console.log(alphabetSoup("hello")); // Affichera "ehllo"
//console.log(alphabetSoup("thereactor")); // Affichera "aceehorrtt"
// console.log(alphabetSoup("hooplah")); // Affichera "ahhloop"
