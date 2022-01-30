const displayArray = (tab) => {
  const str = tab.join(" ");
  return str;

  //   return tab.join(" ");
};

console.log(displayArray(["Xavier", "Farid", "Kévin"])); // Affichera "Xavier Farid Kévin"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme Banane Abricot Cerise"
