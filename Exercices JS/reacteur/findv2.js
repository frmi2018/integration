/*
  Description :
  Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with two arguments: (collection, value).
  Arguments :
  1) The collection to inspect.
  
  Returns :
  The matched element, else undefined.
*/

// Début de votre code
const find = (tab, obj) => {
  // Parcourir le tableau
  for (let i = 0; i < tab.length; i++) {
    // Comparer dynamiquement toutes les clés de obj avec tab[i]
    const keys = Object.keys(obj); // ["gender", "firstName"]

    let isDifferent = false;
    for (let j = 0; j < keys.length; j++) {
      if (obj[keys[j]] !== tab[i][keys[j]]) {
        isDifferent = true;
      }
    }

    if (isDifferent === false) {
      return tab[i];
    }
  }
  // Si aucun élément n'a été trouvé, alors on retourne undefined
  return undefined;
};

// Fin de votre code
const users = [
  { firstName: 'John', lastName: 'Doe', age: 28, gender: 'male' },
  { firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female' },
  { firstName: 'Jim', lastName: 'Carrey', age: 54, gender: 'male' },
  { firstName: 'Kate', lastName: 'Winslet', age: 40, gender: 'female' },
];
console.log(find(users, { gender: 'female', firstName: 'Jane' }));
