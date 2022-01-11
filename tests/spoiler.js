let btn     = document.querySelector('button');
let txt     = document.querySelector('div');
let hidden  = true;

// cacher le texte
txt.style.display = "none";

btn.addEventListener('click', () => {
    if (hidden) {
        btn.textContent = "Cacher";
        txt.style.display = "block";
        hidden = false;
    } else {
        btn.textContent = "Afficher";
        txt.style.display = "none";
        hidden = true;
    }
});

