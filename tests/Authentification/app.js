const btnInscription = document.querySelector(".btn-inscription");
const btnConnection = document.querySelector(".btn-connection");
const btnDeco = document.querySelector(".btn-deco");

const formInscription = document.querySelector(".form-inscription");
const emailInscription = document.querySelector(".email-inscription");
const mdpInscription = document.querySelector(".mdp-inscription");

const formConnection = document.querySelector(".form-connection");
const emailConnection = document.querySelector(".email-connection");
const mdpConnection = document.querySelector(".mdp-connection");

const h1 = document.querySelector("h1");
const info = document.querySelector(".info");

btnInscription.addEventListener("click", () => {
  if (formConnection.classList.contains("apparition")) {
    formConnection.classList.remove("apparition");
  }
  formInscription.classList.toggle("apparition");
});

btnConnection.addEventListener("click", () => {
  if (formInscription.classList.contains("apparition")) {
    formInscription.classList.remove("apparition");
  }
  formConnection.classList.toggle("apparition");
});

formInscription.addEventListener("submit", (e) => {
  e.preventDefault();
  const mailValeur = emailInscription.value;
  const mdpInscriptionValeur = mdpInscription.value;

  auth
    .createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur)
    .then((cred) => {
      console.log(cred);
      formInscription.reset();
      formInscription.classList.toggle("apparition");
    });
});

// Déconnection

btnDeco.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("Déconnecté");
  });
  auth.onAuthStateChanged();
});

// Connection

formConnection.addEventListener("submit", (e) => {
  e.preventDefault();
  const mailValeur = emailConnection.value;
  const mdpConnectionValeur = mdpConnection.value;

  auth.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur).then(() => {
    console.log("Vous êtes connecté.");
    formConnection.reset();
    formConnection.classList.toggle("apparition");
  });
});

// Gérer le contenu

auth.onAuthStateChanged((utilisateur) => {
  if (utilisateur) {
    info.innerText = "Voici le contenu privé !";
    h1.innerText = "Vous voilà de retour !";
  } else {
    console.log("Vous êtes déconnecté.");
    info.innerText = "Voici le contenu public !";
    h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous";
  }
});
