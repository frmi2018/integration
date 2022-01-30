# Array Addition

Créez un fichier nommé array-addition.js.

Créez la fonction arrayAddition qui prend en paramètre un tableau de nombres et qui retourne true si la somme de tous les nombres, à l'exception du plus grand, est égale au nombre le plus grand. Sinon elle retourne false.
Par exemple, si le tableau contient [1, 2, 3, 12, 6], la valeur de retour sera true car 1 + 2 + 3 + 6 = 12.
Le tableau peut contenir des valeurs identiques (sauf pour le plus grand nombre) et des nombres négatifs.

La valeur de retour sera de type Boolean.

## Exemples

```
console.log(arrayAddition([1, 2, 3, 12, 6]));
```

Affichera

```
true
```

```
console.log(arrayAddition([1, 2, 3, 4]));
```

Affichera

```
false
```
