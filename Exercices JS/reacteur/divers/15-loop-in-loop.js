// Afficher chaque lettre de chaque mot du tableau
const words = ["Azerty", "Hello", "Bye"];

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    console.log(words[i][j]);
  }
}

// words[i] => un élément du tableau words (ou un mot)
