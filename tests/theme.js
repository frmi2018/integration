let bouton = document.querySelector('#mode');

// existe-t-il un localStorage qui s'appelle "theme" ?
if (localStorage.theme) {
    // Sa valeur est égale à "sombre" ?
    if (localStorage.theme == 'sombre') {
        modeSombre();
    } 
}

bouton.addEventListener('click', () => {
    // Body a-t-il une classe "dark" ?
    if (document.body.classList.contains('dark')) {
        // mode clair
        // Retirer les class de body
        document.body.className = '';
        // Changer le texte du bouton en "Thème sombre" + icone lune
        bouton.innerHTML = '<i class="fas fa-moon"></i> <span>Thème sombre</span>';
        // Définir le localStorage avec le nom "theme" sur "clair"
        localStorage.setItem('theme', 'clair');
    } else {
        // mode sombre
        // On appelle la fonction modeSombre()
        modeSombre();
    }
});

// Fonction mode sombre
function modeSombre() {
    // mettre la classe de Body sur "dark"
    document.body.className = 'dark';
    // changer le texte du bouton en "Thème clair" + icone soleil
    bouton.innerHTML = '<i class="fas fa-sun"></i> <span>Thème clair</span>';
    // définir le localStorage avec le nom "theme" sur "sombre"
    localStorage.setItem('theme', 'sombre');
};