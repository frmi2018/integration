const APIKEY = 'dc8c9152e8adaad0ec8bf635818c0d42';
let unit = 'metric';
let btnChangerDeVille = document.querySelector('#changer');

recevoirTemperature();

btnChangerDeVille.addEventListener('click', () => {
    let villeChoisie = prompt("Entrer une ville :","Paris");
    recevoirTemperature(villeChoisie);
})

function recevoirTemperature(ville='paris') {
    // Entrer url du site distant
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q='+
    ville+'&appid='+APIKEY+'&units='+unit;

    // créer une requête AJAX
    let requete = new XMLHttpRequest(); // créer un objet
    
    // GET recevoir des données
    requete.open('GET', URL);
    requete.responseType = 'json'; // nous voulons du JSON
    requete.send(); // nous envoyons notre requête

    // dès qu'on reçoit une réponse
    requete.onload = function() {
        // Requete terminé ?
        if (requete.readyState === XMLHttpRequest.DONE) {
            // Est-ce que tout est ok ? (erreur 200)
            if (requete.status === 200) {
                let response = requete.response;
                console.log(response);
                temp=response.main.temp;
                ville=response.name;
                document.querySelector('#ville').innerHTML=ville;
                document.querySelector('#temperature_label').innerHTML=temp;
            } else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}