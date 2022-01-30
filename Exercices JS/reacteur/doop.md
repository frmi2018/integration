# Doop

Créez un fichier nommé doop.js.

Créez une fonction doop(tab) qui recevra un tableau de trois paramètres :

Le premier et le troisième sont des nombres entiers
Le second est un opérateur arithmétique choisi parmi : "+", "-", "\*", "/" et "%"
Le programme doit afficher le résultat de l'opération arithmétique demandée.
Si le nombre de paramètres n'est pas égal à 3, le programme affichera ERROR.

La valeur de retour sera de type Number, sauf en cas d'erreur.

### Exemples

```
console.log(doop([5, "+", 4])); // Affichera : 9
console.log(doop([9, "*", 2])); // Affichera : 18
console.log(doop([11, "-", 4])); // Affichera : 7
console.log(doop([-1, "*", 4])); // Affichera : -4
console.log(doop([10.1, "-", 2])); // Affichera : ERROR
console.log(doop([8])); // Affichera : ERROR
```
