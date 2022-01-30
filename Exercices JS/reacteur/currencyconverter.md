# Currency Converter 💶 💴 💵

Pour cet exercice, vous devrez créer un compte gratuit sur http://fixer.io/. Grâce à l'API key que vous fournira fixer, vous pourrez récupérer les taux de change.

Vous allez devoir concevoir un convertisseur de devises qui prendra 4 arguments, dans cet ordre :

- Le montant à convertir
- La devise de base
- La devise à obtenir
- Une fonction anonyme pour afficher le message

Par exemple, si nous souhaitons convertir 15 EUR en USD, il faudra exécuter :

```
currencyConverter(15, "eur", "usd", (message) => {
console.log(message); // Devra afficher : `15 EUR > 18.34 USD (taux de change appliqué : 1.223)`.
});
```

- Nous devons pouvoir aussi convertir les USD en AUD, les EUR en JPY, etc.
- Une erreur devra être affichée si la devise demandée n'est pas supportée.

## Aide

Un produit en croix vous permettra de convertir n'importe quelles devises.  
Exemple: on souhaite convertir 10$ en ¥.

taux de change \$ = taux de change ¥  
montant en $ à convertir = nouveau montant en ¥

On doit donc faire le calcul suivant pour connaitre le nouveau montant en ¥ :

10 \* taux de change ¥ / taux de change $
