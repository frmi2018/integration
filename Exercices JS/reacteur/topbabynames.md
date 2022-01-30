# Top Baby Names 👶

Vous allez devoir récupérer les 10 prénoms les plus utilisés en 2018 et retourner une liste classée par ordre alphabétique qui contiendra le nombre (entre parenthèses) pour l'année, à côté de chaque prénom.

## Données

Nous allons utiliser une API qui est fournie par la ville de Paris. Pour plus d'infos, cliquez ici.

Utilisez cette route API pour récupérer un tableau d'objets :

https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&rows=10000&sort=nombre&refine.annee=2018

Voici le top 15 des prénoms les plus donnés en 2018 : https://unprenom.fr/articles/top-15-prenoms-paris-2018

## Aide 🍼

- Vous pouvez tester la route dans votre navigateur, dans un premier temps, pour voir à quoi ressemble la structure des données récupérées.

- Vous utiliserez la bibliothèque axios pour interroger l'API.

- Vous pouvez utiliser lodash pour trier votre liste de prénoms, en utilisant la méthode \_.sortBy : https://lodash.com/docs/4.17.11#sortBy
