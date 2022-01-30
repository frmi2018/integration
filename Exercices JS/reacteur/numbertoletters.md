# Number to Letters

En utilisant le langage JavaScript, vous devrez écrire une fonction NumberToLetters(num) qui récupérera en argument un nombre compris entre 0 et 9999 inclus, et le retournera en lettres. Pour tous les paramètres non valides, la fonction retournera Paramètre invalide.

Fichier à créer : number-to-letters.js

## Exemples :

NumberToLetters(15) doit retourner quinze.  
NumberToLetters(35) doit retourner trente-cinq.

## Orthographe des nombres

Nous utiliserons la recommandation orthographique d'après 1990.
Voir http://leconjugueur.lefigaro.fr/frlesnombres.php

## Aide

Combien y a-t-il de milliers dans 5130 ?

```
let num = 5130;
console.log(Math.floor(num / 1000)); // 5
```

Combien y a-t-il de centaines dans 2330 ?

```
let num = 2330;
console.log(Math.floor((num % 1000) / 100)); // 3
```

Bonus

- Supporter les nombres jusqu'à 999 999 999 999
- Supporter les nombres négatifs
- Supporter les nombres décimaux
