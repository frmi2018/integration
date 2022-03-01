let base = document.querySelector(".base");
const premiereCase = document.getElementById("premiere-case");
const boxs = document.querySelectorAll(".case");
const destroy = document.querySelector(".destroy");
const allCases = [];
const choix = [];
let photoEnCours;

for (let i = 0; i < boxs.length; i++) {
  allCases.push(boxs[i]);
}
allCases.push(destroy);

let indexPhoto = 1;

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto}`;
photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto}`;

function nvBase() {
  const newBase = document.createElement("div");
  newBase.setAttribute("class", "base");
  newBase.setAttribute("draggable", "true");
  indexPhoto++;
  newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto}`;
  photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto}`;
  premiereCase.appendChild(newBase);
  base = newBase;
}

// for in (objet) / for of (array)

for (const vide of allCases) {
  vide.addEventListener("dragover", dragOver);
  vide.addEventListener("dragenter", dragEnter);
  vide.addEventListener("drop", dragDrop);
}

function dragDrop() {
  if (this.id === "premiere-case") {
    return;
  }
  // destroy
  if (this.id === "destroy") {
    base.remove();
    nvBase();
    return;
  }
  // verrouilllage
  this.removeEventListener("dragover", dragOver);
  this.removeEventListener("dragenter", dragEnter);
  this.removeEventListener("drop", dragDrop);
  this.appendChild(base);
  this.childNodes[0].setAttribute("draggable", "false");
  nvBase();

  choix.push(photoEnCours);
  if (choix.length === 3) {
    setTimeout(() => {
      alert("sélection terminée !");
    }, 200);
  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}
