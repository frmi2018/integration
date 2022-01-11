let btn = document.querySelector('button');
let secondes = 10;
let timer;

btn.addEventListener('click', start); // execute la fonction start si clique sur bouton

function start() {
    timer = setInterval(decompte, 1000); // appel la fonction decompte toutes les secondes
};

function stop() {
    clearInterval(timer); // stop le timer
};

function decompte() {
    secondes --;
    if (secondes == 0) {
        stop(); // appel fonction stop
        document.body.innerHTML += "<br>"+"Stop!"; // ajoute dans body le texte stop!
    } else {
        document.body.innerHTML += "<br>"+secondes; // ajoute dans boby seconde en cours
    }
};