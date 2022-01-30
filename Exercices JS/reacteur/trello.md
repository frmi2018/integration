# Trello

Vous êtes en charge de créer un programme qui va vous permettre d'intéragir avec Trello. Si vous n'avez pas encore de compte, créez-en un en cliquant ici, puis récupérez votre clé API ainsi qu'un jeton en cliquant là.Mettez ces deux valeurs de côté, vous en aurez besoin pour la suite.

Votre clé API et votre jeton (appelé aussi token), vont vous permettre d'authentifier vos requêtes auprès de Trello. La documentation de l'API est disponible ici : https://developers.trello.com/v1.0/reference

## Architecture du programme

Construisez un programme qui va permettre de récupérer plusieurs paramètres utilisateur via le terminal.

Par exemple, pour créer un board, vous pourriez passer cette instruction :

```
node trello.js boards "Mon nouveau Board"
```

Ou encore, pour afficher les listes d'un board :

```
node trello.js boards 5c3faf7315f5d00f89b8f003 lists # `5c3faf7315f5d00f89b8f003` est un identifiant de board
```

Voici les services que vous devrez mettre en place :

## Boards

Afficher tous les noms de vos boards
Créer un board
Supprimer un board

## Lists

Afficher tous les noms des listes d'un board en particulier
Créer une liste
Supprimer une liste

## Cards

Afficher toutes les cards d'une liste en particulier
Créer une card
Supprimer une card

## Aide

Pour transmettre des paramètres depuis le Terminal, vous aurez besoin d'utiliser process.argv (voir dans le cours onglet Terminal => Node Parameters)

Pour lister tous vos boards, utilisez cette route :

```
https://api.trello.com/1/members/me/boards?key={key}&token={token}
```

👉 Pour que l'utilisateur puisse effectuer des opérations sur les boards/lists/cards, vous devrez lui mettre en avant les ID correpondants, pour chaque élément.

👉 Vous devrez toujours inclure votre key et token dans chaque requête.

👉 Vérifiez bien de quel type de requête il s'agit (GET, POST, etc.).
