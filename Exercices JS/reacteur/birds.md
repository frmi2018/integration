# Birds 🦜

Vous devez étudier la population d'oiseaux migrateurs.

Chaque fois qu'un type particulier d'oiseau est repéré, son numéro d'identification (1, 2, 3, 4 ou 5) sera ajouté à un tableau d'observation.

Il n'y a que 5 espèces d'oiseaux différentes !!!

Créez une fonction migratoryBirds, qui prendra en paramètre un tableau, et qui retournera le numéro d'identification de l'espèce d'oiseau la plus représentée dans ce tableau.

Si deux espèces sont représentées autant de fois, alors la fonction devra retourner l'espèce ayant le plus petit numéro d'identification.

Exemples :

```
console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // doit afficher `4`

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // doit afficher `3`

console.log(
  migratoryBirds([5, 2, 2, 2, 4, 1, 1, 2, 4, 2, 2, 2, 4, 1, 2, 4, 1, 2, 4, 4, 3, 2, 3, 1, 3, 3, 4, 3, 5, 2, 5, 3, 4, 1, 3, 2, 3, 3, 3, 5, 2, 4, 1, 5, 4, 5, 4, 4, 4, 5, 3, 2, 1, 1, 3, 1, 1, 5, 5, 3, 5, 2, 2, 4, 5, 2, 4, 3, 2, 4, 4, 5, 3, 2, 3, 2, 4, 5])
); // doit afficher `2`

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 2, 1, 3, 5])); // doit afficher `1`

console.log(
  migratoryBirds([2, 1, 5, 3, 2, 5, 1, 5, 5, 4, 4, 2, 1, 5, 4, 5, 3, 3, 3])
); // doit afficher `5`
```
