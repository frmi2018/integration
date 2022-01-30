# find v2

```
/*
  Description :
  Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with two arguments: (collection, value).

  Arguments :
  1) The collection to inspect.

  Returns :
  The matched element, else null.

  Aide :
  Vous pourriez avoir besoin de la fonction `Object.keys()` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

// Début de votre code

// Fin de votre code

const users = [
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

console.log(find(users, { lastName: "Doe", gender: "male" })); // Doit afficher `{ firstName: "John", lastName: "Doe", age: 28, gender: "male" }`
```
