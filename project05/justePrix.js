// Etape 1 - Sélectionner nos éléments
let input       = document.querySelector("input"); // ou #prix
let error       = document.querySelector("small"); // ou #text-danger
let formulaire  = document.querySelector("form"); // ou #formulaire

// Variables
let coups = 0;
let nombreChoisi;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

function nbAleatoireEntier(nb) {
    return Math.floor(Math.random()*nb);
};

// Etape 3 - Générer un nombre aléatoire entre 0 et 1000
let nombreAleatoire = nbAleatoireEntier(1001);

// Etape 6 - Créer la fonction vérifier
function verifier(nb) {
    let instruction = document.createElement('div');
    // c'est plus
    if (nb < nombreAleatoire) {
        instruction.textContent = "#" + coups + " (" + nombreChoisi + ") C'est plus";
        // ajouter une class à un élément HTML
        instruction.className = "instruction plus";
    } else {
        // c'est moins
        if (nb > nombreAleatoire) {
            instruction.textContent = "#" + coups + " (" + nombreChoisi + ") C'est moins";
            instruction.className = "instruction moins";
        // c'est le juste prix
        } else {
            instruction.textContent = "#" + coups + " (" + nombreChoisi + ") Félicitations vous avez trouvé le juste prix !";
            instruction.className = "instruction fini";
            input.disabled = true; // désactiver le formulaire
        }
    }
    // Ajouter l'élément (instruction) devant les autres
    document.querySelector("#instructions").prepend(instruction);
};

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {

if (!Number(input.value)) {
    // ou isNaN(input.value)
    // Afficher le message d'erreur
    error.style.display = "inline";
} else {
    // Cacher le message d'erreur
    error.style.display = "none";
}
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // annule l'envoi par défaut
    // vérification si pas un nombre ou vide
    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = "red";    
    } else {
        input.style.borderColor = "silver";
        coups++;
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

