# rot13

Créez un fichier nommé rot13.js.

Écrivez une fonction nommée rot13 qui prendra en paramètre une chaîne de caractères, et qui retournera cette chaîne en remplaçant chaque caractère alphabétique par le caractère situé 13 caractères plus loin dans l'ordre alphabétique.

z devient m et Z devient M. Les majuscules restent des majuscules, les minuscules restent des minuscules.

## Exemples

```
console.log(rot13("abc")); // nop
console.log(rot13("My horse is Amazing.")); // Zl ubefr vf Nznmvat.
console.log(rot13("AkjhZ zLKIJz , 23y")); // NxwuM mYXVWm , 23l
console.log(rot13("-12")); // -12
```

## Consignes

Vous n'aurez pas le droit d'utiliser les fonctions charCodeAt et fromCharCode. Vous aurez bien sûr le droit d'utiliser charAt.
