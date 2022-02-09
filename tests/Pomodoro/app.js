const affichageTravail = document.querySelector(".affichageT");
const affichagePause = document.querySelector(".affichageP");
const btnGo = document.querySelector(".b1");
const btnPause = document.querySelector(".b2");
const btnReset = document.querySelector(".b3");
const cycles = document.querySelector("h2");

let checkInterval = false;
let tempsInitial = 3;
let tempsDeRepos = 3;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `nombre de cycles ${nbDeCycles}`;

afficheTemps(tempsInitial, tempsDeRepos);

btnGo.addEventListener("click", () => {
  if (checkInterval === false) {
    checkInterval = true;

    tempsInitial--;
    afficheTemps(tempsInitial, tempsDeRepos);
    let timer = setInterval(() => {
      if (pause === false && tempsInitial > 0) {
        tempsInitial--;
        afficheTemps(tempsInitial, tempsDeRepos);
      } else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
        tempsInitial = 3;
        tempsDeRepos = 3;
        afficheTemps(tempsInitial, tempsDeRepos);
        nbDeCycles++;
        cycles.innerText = `nombre de cycles ${nbDeCycles}`;
      } else if (pause === false && tempsInitial === 0) {
        tempsDeRepos--;
        afficheTemps(tempsInitial, tempsDeRepos);
      }
    }, 1000);

    // Reset
    btnReset.addEventListener("click", () => {
      clearInterval(timer);
      checkInterval = false;
      tempsInitial = 3;
      tempsDeRepos = 3;
      nbDeCycles = 0;
      afficheTemps(tempsInitial, tempsDeRepos);
      cycles.innerText = `nombre de cycles ${nbDeCycles}`;
    });
  } else {
    return;
  }
});

btnPause.addEventListener("click", () => {
  if (pause === false) {
    btnPause.innerText = "Reprendre";
  } else if (pause === true) {
    btnPause.innerText = "Pause";
  }
  pause = !pause;
});

function afficheTemps(tempsInitial, tempsDeRepos) {
  affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
    tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
  }`;
  affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
    tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
  }`;
  return;
}
