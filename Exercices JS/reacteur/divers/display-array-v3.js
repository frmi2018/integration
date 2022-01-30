const displayArray = (tab, option) => {
  let str;
  if (option === false) {
    // on retourner une string telle que "Pomme Banane Abricot Cerise"
    str = tab.join(" ");
  } else {
    // on retourner une string telle que "Pomme, Banane, Abricot et Cerise"
    const lastElement = tab.pop();
    str = tab.join(", ") + " et " + lastElement;
  }

  return str;
};

console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false));
// Affichera "Pomme Banane Abricot Cerise"

console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], true));
// Affichera "Pomme, Banane, Abricot et Cerise"
