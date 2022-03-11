const APICALL = "http://api.quotable.io/random";

const tempsAffichage = document.querySelector(".temps");
const scoreAffichage = document.querySelector(".score");

const phraseAEcrire = document.querySelector(".phrase-a-ecrire");
const phraseTest = document.querySelector("phrase-test");

let temps = 60;
tempsAffichage.innerText = `Temps : ${temps}`;

let timer = setInterval(time, 1000);

function time() {
  temps--;
  tempsAffichage.innerText = `Temps : ${temps}`;
  scoreAffichage.innerText = `Score : ${score}`;
  if (temps === 0) {
    clearInterval(timer);
  }
}
