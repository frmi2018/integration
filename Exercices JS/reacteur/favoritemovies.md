# Favorite movies 📽

Le but de cet exercice est d'afficher les noms, années, genres et acteurs de vos 3 films préférés. Les informations devront provenir de l'API https://www.omdbapi.com/.

## Créer un compte

Pour avoir l'autorisation d'utiliser le service omdbapi, vous devrez obtenir une clé (API KEY) sur la page https://www.omdbapi.com/apikey.aspx. Vous devrez ensuite consulter votre boîte mail.

## Exemple d'utilisation de l'API

Pour obtenir les informations du film Inception, vous devrez appeler l'URL suivante : http://www.omdbapi.com/?t=inception&apikey=c7678f53

t=inception représente le film à chercher
apikey=c7678f53 représente la clé d'accès à l'API (vous devrez remplacer cette valeur par votre propre API KEY)

Remarquez que ces 2 paramètres sont séparés dans l'URL par le caractère &.

## Exemple

```
Name : 2001: A Space Odyssey
Year : 1968
Genre : Adventure, Sci-Fi
Actors : Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter

---

Name : Interstellar
Year : 2014
Genre : Adventure, Drama, Sci-Fi
Actors : Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow

---

Name : Inception
Year : 2010
Genre : Action, Adventure, Sci-Fi
Actors : Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy

---
```
