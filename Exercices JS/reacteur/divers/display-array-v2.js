// Version 1

const displayArray = (tab) => {
  let str = "";

  for (let i = 0; i <= tab.length - 1; i++) {
    // console.log(tab[i]);
    if (i === tab.length - 1) {
      // si on est au dernier tour de boucle
      str = str + tab[i];
    } else if (i === tab.length - 2) {
      // si on est à l'avant dernier tour de boucle
      str = str + tab[i] + " et ";
    } else {
      // pour tous les autres tours de boucle
      str = str + tab[i] + ", ";
    }
  }

  return str;
};

// ------------------------------------------------------------------------------

// Version 2

const displayArray = (tab) => {
  // étape 1 : supprimer le dernier élément et le stocker dans une variable
  const lastElement = tab.pop();
  console.log(tab); // [ 'Pomme', 'Banane', 'Abricot' ]
  console.log(lastElement); // Cerise

  // étape 2 : on assemble les éléments de tab en une string
  const str = tab.join(", ");
  console.log(str); // Pomme, Banane, Abricot

  // étape 3 : assembler lastElement et str
  const newStr = str + " et " + lastElement;
  console.log(newStr); // Pomme, Banane, Abricot et Cerise

  return newStr;
};

// ------------------------------------------------------------------------------

// Version 2 bis
const displayArray = (tab) => {
  const lastElement = tab.pop();
  let str = tab.join(", ") + " et " + lastElement;
  return str;
};

// console.log(displayArray(["Xavier", "Farid", "Kévin"])); // Affichera "Xavier, Farid et Kévin"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme, Banane, Abricot et Cerise"
