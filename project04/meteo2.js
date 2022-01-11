const APIKEY = 'dc8c9152e8adaad0ec8bf635818c0d42';

let unit = 'metric';
let btnChangerDeVille = document.querySelector('#changer');
let requete, villeChoisie;

var url;
var options = {
    enableHighAccuracy: true
}

btnChangerDeVille.addEventListener('click', () => {
    villeChoisie = prompt("Entrer une ville :");
    recevoirTemperature(villeChoisie);
})

// Programme

// géolocalisation active ?
if ("geolocation" in navigator) {
    // Enregistrer les coordonnées
    navigator.geolocation.watchPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        // Entrer url du site distant
        url = 'https://api.openweathermap.org/data/2.5/weather?lon='+
        lon+'&lat='+lat+'&appid='+APIKEY+'&units='+unit;
        console.log(url);

        // créer une requête AJAX
        requete = new XMLHttpRequest(); // créer un objet
        
        // GET recevoir des données
        requete.open('GET', url);
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
                    villeChoisie=response.name;
                    // afficher la ville
                    document.querySelector('#ville').innerHTML=villeChoisie;
                    // afficher la température
                    document.querySelector('#temperature_label').innerHTML=temp;
                } else {
                    alert('Un problème est intervenu, merci de revenir plus tard.');
                }
            }
        }
    }, erreur, options);
} else {
    // choisir une ville par défaut
    error();
}

// fonctions

function erreur() {
    villeChoisie = 'paris';
    recevoirTemperature(villeChoisie);
}

function recevoirTemperature(villeChoisie) {
    // Entrer url du site distant
    url = 'https://api.openweathermap.org/data/2.5/weather?q='+
    villeChoisie+'&appid='+APIKEY+'&units='+unit;

    // créer une requête AJAX
    requete = new XMLHttpRequest(); // créer un objet
    
    // GET recevoir des données
    requete.open('GET', url);
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
                villeChoisie=response.name;
                // afficher la ville
                document.querySelector('#ville').innerHTML=villeChoisie;
                // afficher la température
                document.querySelector('#temperature_label').innerHTML=temp;
            } else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}