const inputsCouleur = document.querySelectorAll(".inp-couleur");
const inputRange = document.querySelector(".inp-range");
const btns = document.querySelectorAll("button");
const fond = document.body;
const containerCouleurs = document.querySelector(".container-couleurs");

// Démarrage
let valCouleurs = ["#BA5370", "#F4E2D8"];
let inclinaison = 45;
let index = 3;
inputsCouleur[0].value = valCouleurs[0];
inputsCouleur[1].value = valCouleurs[1];
inputsCouleur[0].style.background = valCouleurs[0];
inputsCouleur[1].style.background = valCouleurs[1];
// fond.style.background = `linear-gradient(${inclinaison}deg,${valCouleurs[0]},${valCouleurs[1]})`;
fond.style.background = `linear-gradient(${inclinaison}deg,${valCouleurs})`;

// inclinaison
inputRange.addEventListener("input", (e) => {
  inclinaison = e.target.value * 3.6;
  fond.style.background = `linear-gradient(${inclinaison}deg,${valCouleurs})`;
});

// + / -

btns.forEach((btn) => {
  btn.addEventListener("click", rajouteEnleve);
});

function rajouteEnleve(e) {
  const allInputs = document.querySelectorAll(".inp-couleur");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (e.target.className === "plus") {
    if (allInputs.length > 7) {
      return;
    }

    const nvCouleur = document.createElement("input");
    nvCouleur.setAttribute("class", "inp-couleur");
    nvCouleur.setAttribute("data-index", index);
    nvCouleur.setAttribute("maxlength", 6);
    nvCouleur.value = `#${randomColor.toUpperCase()}`;
    nvCouleur.style.background = `#${randomColor}`;
    containerCouleurs.appendChild(nvCouleur);
    valCouleurs.push(`#${randomColor.toUpperCase()}`);
    // Maj du fond
    fond.style.background = `linear-gradient(${inclinaison}deg,${valCouleurs})`;
    index++;
  }
}
