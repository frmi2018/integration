const axios = require('axios');

const currencyConverter = (
  amount,
  currencyToConvert,
  currencyToReturn,
  func
) => {
  axios
    .get(
      'http://data.fixer.io/api/latest?access_key=854f51882353995d47146531174f3c04'
    )
    .then((response) => {
      // On met les devises en majuscules car les clés sont en majuscules dans les data
      currencyToConvert = currencyToConvert.toUpperCase();
      currencyToReturn = currencyToReturn.toUpperCase();

      /*
Si la monnaie de base est l'euro et le montant à convertir est 15 :
1€ => 1.12788$
15€ => ?

Si la monnaie de base est autre que l'euro, si on veut convertir des USD en JPY et si le montant à convertir est 15 :
15 * taux du ¥ / taux du $
*/

      // Si une des devises est inconnue :
      if (
        response.data.rates[currencyToReturn] === undefined ||
        response.data.rates[currencyToConvert] === undefined
      ) {
        return console.log('Devise(s) inconnue(s)');
      }

      // Calcul du nouveau montant :
      const newAmount =
        (amount * response.data.rates[currencyToReturn]) /
        response.data.rates[currencyToConvert];

      // Le taux de change, si la devise de sortie est l'euro ou pas :
      let changeRate;
      if (currencyToReturn !== 'EUR') {
        changeRate = response.data.rates[currencyToReturn];
      } else {
        changeRate = newAmount / amount;
      }

      // Appel de la fonction anonyme qui permet d'afficher un message :
      func(
        `${amount} ${currencyToConvert} > ${newAmount} ${currencyToReturn} (taux de change appliqué : ${changeRate})`
      );
    });
};

currencyConverter(15, 'eur', 'usd', (message) => {
  console.log(message); // 15 EUR > 16.950210000000002 USD (taux de change appliqué : 1.130014)
});

currencyConverter(15, 'usd', 'jpy', (message) => {
  console.log(message); // 15 USD > 1610.324469431352 JPY (taux de change appliqué : 121.312613)
});

currencyConverter(15, 'usd', 'eur', (message) => {
  console.log(message); // 15 USD > 13.274171824419874 EUR (taux de change appliqué : 0.8849447882946583)
});

// Test de la fonction avec une erreur dans une devise :
currencyConverter(15, 'eur', 'uds', (message) => {
  console.log(message); // Devise(s) inconnue(s)
});
