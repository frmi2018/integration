var words = require('./words.json');
var prompt = require('prompt');

function getWords(words) {
  var wordsToUse = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].label.length > 4) {
      words[i].label = words[i].label.replace(/à/g, 'a');
      words[i].label = words[i].label.replace(/â/g, 'a');
      words[i].label = words[i].label.replace(/ç/g, 'c');
      words[i].label = words[i].label.replace(/è/g, 'e');
      words[i].label = words[i].label.replace(/é/g, 'e');
      words[i].label = words[i].label.replace(/ê/g, 'e');
      words[i].label = words[i].label.replace(/î/g, 'i');
      words[i].label = words[i].label.replace(/ï/g, 'i');
      words[i].label = words[i].label.replace(/ô/g, 'o');
      words[i].label = words[i].label.replace(/ù/g, 'u');
      words[i].label = words[i].label.replace(/û/g, 'u');

      wordsToUse.push(words[i].label);
    }
  }
  return wordsToUse;
}

function secretWordCrypted(mot, foundLetters) {
  var res = '';
  for (var j = 0; j < mot.length; j++) {
    if (foundLetters.indexOf(mot[j]) !== -1) {
      res += mot[j];
    } else {
      res += '*';
    }
  }
  return res.toUpperCase();
}

function trouverLettre(letter, secretWord, foundLetters) {
  for (var i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter) {
      foundLetters.push(letter);
      return true;
    }
  }
  return false;
}

var wordsToUse = getWords(words);
var attempts = 10;
var secretWord = wordsToUse[Math.floor(Math.random() * (1341 - 0 + 1)) + 0];
var foundLetters = [];

console.log('Bienvenue dans le Pendu !');

prompt.message = '';
prompt.delimiter = '';
prompt.start();

function display() {
  if (attempts === 1) {
    console.log('\nIl vous reste ' + attempts + ' coup à jouer');
  } else {
    console.log('\nIl vous reste ' + attempts + ' coups à jouer');
  }
  console.log(
    'Quel est le mot secret ? ' + secretWordCrypted(secretWord, foundLetters)
  );

  prompt.get(
    {
      properties: {
        letter: {
          description: 'Proposez une lettre :',
        },
      },
    },
    function (err, result) {
      if (result.letter.length !== 1) {
        display();
        return;
      } else {
        result.letter = result.letter.toLowerCase();
      }

      if (trouverLettre(result.letter, secretWord, foundLetters)) {
        if (secretWordCrypted(secretWord, foundLetters).indexOf('*') === -1) {
          console.log(
            'Vous avez trouvé le mot mystère "' +
              secretWord.toUpperCase() +
              '" !'
          );
        } else {
          display();
        }
      } else {
        attempts--;
        if (attempts <= 0) {
          console.log(
            'Vous n\'avez pas réussi à trouver le mot mystère "' +
              secretWord.toUpperCase() +
              '" !'
          );
        } else {
          display();
        }
      }
    }
  );
}

display();
