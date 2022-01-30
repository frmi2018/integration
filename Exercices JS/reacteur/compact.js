/*
  Description :
  Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  Arguments :
  1) The array to compact.
  Returns :
  The new array of filtered values.
*/
// Début de votre code
const compact = (tab) => {
  const newTab = [];

  for (let i = 0; i < tab.length; i++) {
    // if (tab[i] !== false && tab[i] !== 0 && tab[i] !== "" && tab[i] !== undefined) {
    if (tab[i]) {
      // on teste l'existence
      newTab.push(tab[i]);
    }
  }

  return newTab;
};
// Fin de votre code
console.log(compact([0, 1, false, 2, '', 3])); // Doit afficher `[1, 2, 3]`
