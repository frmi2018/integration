/*
  Description :
  Creates an object composed of the picked object properties.
  Arguments :
  1) The source object.
  2) The property paths to pick.
  Returns :
  The new object.
*/

const pick = (obj, tab) => {
  // Créer un objet vide et y mettre les propriétés demandées
  const newObj = {};

  for (let i = 0; i < tab.length; i++) {
    const key = tab[i]; // "a", "c"
    const value = obj[key]; // 1, "2", 3
    newObj[tab[i]] = value; // Ajoute une nouvelle clé
  }

  return newObj;
};
console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));
