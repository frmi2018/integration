const displayArray = array => {
  let popped = array.pop();
  let result = array.join(", ") + " et " + popped;
​
  return result;
};
​
console.log(displayArray(["Xavier", "Farid", "Kévin"])); // Affichera "Xavier, Farid et Kévin"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme, Banane, Abricot et Cerise"