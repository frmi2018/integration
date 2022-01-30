/*
  Description :
  Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

  Arguments :
  1) The array to inspect.
  
  Returns :
  The new duplicate free array.
*/

// Début de votre code

const uniq = (tab) => {
  const newTab = [];

  for (let i = 0; i < tab.length; i++) {
    if (newTab.indexOf(tab[i]) === -1) {
      // si l'élément sur lequel on boucle n'est pas présent dans newTab, alors on l'ajoute à newTab
      newTab.push(tab[i]);
    }
  }

  return newTab;
};

// Fin de votre code

console.log(uniq([2, 1, 2])); // Doit afficher `[2, 1]`
