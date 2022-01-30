const axios = require('axios');

// Renseignez ici votre API key et votre token (⚠️ les données suivantes sont fictives, les requêtes n'aboutiront pas) :
const APIKey = '186b5067df843611d88b654029c967de';
const token =
  '42a78cf5d75ff4de8d2c3b008e61469cf4ba4e0ca5dadffb83dd23490abde6f6';

// Récupérer les instructions passées dans le terminal :
const instruction1 = process.argv.slice(2)[0];
const instruction2 = process.argv.slice(2)[1];
const instruction3 = process.argv.slice(2)[2];

/*
Liste des instructions (commandes à rentrer dans le terminal) :
- pour obtenir les noms des boards et leurs ids => node index.js boards
- pour créer un board => node index.js boards {boardName}
- pour supprimer un board => node index.js boards {boardId} delete
*/

// Liste des urls à interroger :
const urls = [
  `https://api.trello.com/1/members/me/boards?key=${APIKey}&token=${token}`, // lister les boards
  `https://api.trello.com/1/boards/?key=${APIKey}&token=${token}&name=${instruction2}`, // créer un board
  `https://api.trello.com/1/boards/${instruction2}/?key=${APIKey}&token=${token}`, // supprimer un board
];

/* C'est dans la fonction getData que nous effectuons les requêtes. Elle reçoit 2 arguments : l'url à interroger et la méthode à utiliser (GET, POST, DELETE, etc.)
 La fonction getData retourne une promesse afin de pouvoir accéder à la réponse du serveur en dehors de celle-ci (en dehors de la fonction getData)
 Pour en savoir + sur le concept de promesse : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
const getData = (url, method) => {
  return new Promise((resolve, reject) => {
    // on stocke la réponse du serveur dans la variable data
    let data;
    if (method === 'get') {
      data = axios.get(url);
    } else if (method === 'post') {
      data = axios.post(url);
    } else if (method === 'delete') {
      data = axios.delete(url);
    }

    // puis on passe dans le then() ou dans le catch()
    data
      .then((response) => {
        // en cas de succès de la requête, on retourne la réponse du serveur (accessible dans le then() qui suit l'appel de getData())
        resolve(response.data);
      })
      .catch((error) => {
        // en cas d'échec de la requête, on retourne la réponse du serveur (accessible dans le catch() qui suit l'appel de getData())
        reject(
          `Request failed with status code ${error.response.status} and error message "${error.response.data}"`
        );
      });
  });
};

// Get all boards
if (instruction1 === 'boards' && !instruction2) {
  getData(urls[0], 'get')
    .then((result) => {
      // on récupère dans la variable result la réponse du serveur (en cas de succès)
      for (let i = 0; i < result.length; i++) {
        console.log(result[i].name, '-', result[i].id);
      }
    })
    .catch((err) => {
      // on récupère dans la variable err la réponse du serveur (en cas d'échec)
      console.log(err);
    });
}
// Create a board
else if (instruction1 === 'boards' && instruction2 && !instruction3) {
  getData(urls[1], 'post')
    .then((result) => {
      if (result) {
        console.log(
          `Board "${result.name}" with id "${result.id}" successfully created.`
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
// Delete a board
else if (
  instruction1 === 'boards' &&
  instruction2 &&
  instruction3 === 'delete'
) {
  getData(urls[2], 'delete')
    .then((result) => {
      if (result._value === null) {
        console.log(`Board with id "${instruction2}" successfully deleted.`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
