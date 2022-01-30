var Prompt = require('prompt-base');
var _ = require('lodash');
var words = require('./words.json');

var debug = true;

/* CREATE A DICTIONNARY */
var dictionnary = [];

/* FORMAT SPECIAL CHARS */
function formatSpecialChars(str) {
  str = str.toLowerCase();
  str = str.replace(/à/g, 'a');
  str = str.replace(/â/g, 'a');
  str = str.replace(/ç/g, 'c');
  str = str.replace(/è/g, 'e');
  str = str.replace(/é/g, 'e');
  str = str.replace(/ê/g, 'e');
  str = str.replace(/î/g, 'i');
  str = str.replace(/ï/g, 'i');
  str = str.replace(/ô/g, 'o');
  str = str.replace(/ù/g, 'u');
  str = str.replace(/û/g, 'u');
  return str;
}

/* ITERATE THROUGH JSON FILE AND KEEP ONLY 4 OR MORE LETTERS WORDS */
for (var i = 0; i < words.length; i++) {
  if (words[i].label.length >= 4) {
    dictionnary.push(words[i].label);
  }
}

/* HANGMAN STEPS */
var hangman = [
  [' _|_\r', '|   |______\r', '|          |\r', '|__________|\r', '\n'],
  [
    '  |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '  |\r',
    '  |\r',
    '  |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |\r',
    '  |\r',
    '  |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |    o\r',
    '  |\r',
    '  |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |    o\r',
    '  |    |\r',
    '  |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |    o\r',
    '  |    |\r',
    '  |    |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |    o\r',
    '  |   /|\r',
    '  |    |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |    o\r',
    '  |   /|\\\r',
    '  |    |\r',
    '  |\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |    o\r',
    '  |   /|\\\r',
    '  |    |\r',
    '  |   /\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
  [
    '   ____\r',
    '  |    |\r',
    '  |    o\r',
    '  |   /|\\\r',
    '  |    |\r',
    '  |   / \\\r',
    ' _|_\r',
    '|   |______\r',
    '|          |\r',
    '|__________|\r',
    '\n',
  ],
];
function showHangman() {
  var drawing = hangman[10 - counter];
  for (var i = 0; i < drawing.length; i++) {
    console.log(drawing[i]);
  }
}

/* GAME PARAMS */
var counter = 0;
var word = '';
var foundLetters = [];
var typedLetters = [];
function startGame() {
  console.log('Bienvenue dans le Pendu !\n');
  counter = 10;
  /* RANDOM POSITION IN DICTIONNARY ARRAY */
  var randomPosition = _.random(dictionnary.length + 1);
  word = formatSpecialChars(dictionnary[randomPosition]);
  /* DEBUG PROGRAM */
  debug
    ? console.log(
        '[DEBUG MODE] Le mot est : ' + word.toLocaleUpperCase() + '\n'
      )
    : null;
  foundLetters = [];
  typedLetters = [];
  askLetter();
}

/* FORMAT WORD WITH FOUND LETTERS */
function showWordWithFoundLetters() {
  var partiallyFoundWord = '';
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (_.indexOf(foundLetters, letter) > -1) {
      partiallyFoundWord += letter.toLocaleUpperCase();
    } else {
      partiallyFoundWord += '*';
    }
  }
  return partiallyFoundWord;
}

/* FIND LETTER IN WORD */
function findLetterInWord(letter) {
  if (letter !== undefined) {
    var letterIsFound = false;
    for (var i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        foundLetters.push(letter);
        typedLetters.push(letter);
        letterIsFound = true;
        break;
      }
    }
    if (letterIsFound) {
      console.log(
        '\n-- La lettre ' +
          letter.toLocaleUpperCase() +
          ' est bien dans le mot ! 👍\n'
      );
    } else {
      console.log(
        '\n-- Désolé, la lettre ' +
          letter.toLocaleUpperCase() +
          " n'est pas dans le mot... 👎\n"
      );
      counter -= 1;
    }
  } else if (_.indexOf(typedLetters, letter) > -1) {
    console.log("⚠️ Hey, t'as déjà proposé cette lettre !\n");
  } else {
    console.log("⚠️ Hey, t'as oublié de taper une lettre !\n");
  }
  askLetter();
}

var prompt = new Prompt({
  name: 'letter',
  message: 'Proposez une lettre :',
});

function askLetter() {
  if (showWordWithFoundLetters() === word.toLocaleUpperCase()) {
    console.log('Bravo, vous avez gagné ! 🙂');
    console.log('Le mot à deviner était : ' + word.toLocaleUpperCase() + '\n');
    playAgain();
  } else if (counter > 0) {
    showHangman();
    console.log('Il vous reste ' + counter + ' coups à jouer.');
    console.log('Quel est le mot secret ? ' + showWordWithFoundLetters());
    prompt.ask(function (letter) {
      if (_.indexOf(foundLetters, letter) > -1) {
        console.log(
          '⚠️ La lettre ' +
            letter.toLocaleUpperCase() +
            ' a déjà été trouvée !\n'
        );
        askLetter();
      } else {
        findLetterInWord(letter);
      }
    });
  } else {
    console.log('Vous avez perdu !');
    console.log('Le mot à deviner était : ' + word.toLocaleUpperCase());
    pylayAgain();
  }
}

var promptPlayAgain = new Prompt({
  name: 'answer',
  message: 'Voulez-vous rejouer ? [o/n]',
});

function playAgain() {
  promptPlayAgain.ask(function (answer) {
    if (answer.toLowerCase() == 'o' || answer.toLowerCase() == 'oui') {
      console.log("Let's play again bro! 🤘\n");
      startGame();
    } else if (answer.toLowerCase() == 'n' || answer.toLowerCase() == 'non') {
      console.log('Ok, allez salut ! 👋\n');
    } else {
      console.log('Désolé, je ne comprends pas votre réponse...\n');
      playAgain();
    }
  });
}

startGame();
