const container = document.querySelector(".grille");
let toutesLesDivs;
let alienInvaders = [];

function creationGrilleEtAliens() {
  let indexAttr = 0;
  for (let i = 0; i < 240; i++) {
    if (indexAttr === 0) {
      const bloc = document.createElement("div");
      bloc.setAttribute("data-left", "true");
      container.append(bloc);
      indexAttr++;
    } else if (indexAttr === 19) {
      const bloc = document.createElement("div");
      bloc.setAttribute("data-right", "true");
      container.append(bloc);
      indexAttr = 0;
    } else {
      const bloc = document.createElement("div");
      container.append(bloc);
      indexAttr++;
    }
  }
}

creationGrilleEtAliens();
