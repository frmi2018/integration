const form = document.querySelector('.form-quizz');
let tableauResultats = [];

form.addEventListener('submit', (e) => {
  // empécher le rafraichissement de la page
  e.preventDefault();
  // récupérer les réponses
  for (i = 1; i < 6; i++) {
    tableauResultats.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  console.log(tableauResultats);
  tableauResultats = [];
});
