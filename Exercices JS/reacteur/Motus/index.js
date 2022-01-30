/* IMPORT LIBS */
var Prompt = require("prompt-base");
var _ = require("lodash");
var clc = require("cli-color");

/* CONFIG FILE */
var config = require("./config");

/* WORDS FILE */
var words = require("./words.json");

/* HELPERS FUNCTIONS */
var { play, analyzeWord, showLettersOneByOne } = require("./helpers");

/* GAME PARAMS */
var counter;
var randomWord;
function startGame() {
  console.log(config.motus);
  counter = 6;
  /* RANDOM POSITION IN DICTIONNARY ARRAY */
  var randomPosition = _.random(dictionnary.length + 1);
  randomWord = formatSpecialChars(
    dictionnary[randomPosition]
  ).toLocaleUpperCase();
  //randomWord = "ABCCD";
  //randomWord = "CONVERSATION";
  /* DEBUG PROGRAM */
  var stars = "";
  for (var i = 0; i < randomWord.length - 1; i++) {
    stars += "*";
  }
  console.log(
    config.debug
      ? "[DEBUG MODE] LE MOT À TROUVER EST : " + randomWord + "\n"
      : "TROUVEZ LE MOT SUIVANT : " + randomWord[0] + stars + "\n"
  );
  askWord();
}

/* CREATE A DICTIONNARY */
var dictionnary = [];

/* FORMAT SPECIAL CHARS */
function formatSpecialChars(str) {
  str = str.toLowerCase();
  str = str.replace(/à/g, "a");
  str = str.replace(/â/g, "a");
  str = str.replace(/ç/g, "c");
  str = str.replace(/è/g, "e");
  str = str.replace(/é/g, "e");
  str = str.replace(/ê/g, "e");
  str = str.replace(/î/g, "i");
  str = str.replace(/ï/g, "i");
  str = str.replace(/ô/g, "o");
  str = str.replace(/ù/g, "u");
  str = str.replace(/û/g, "u");
  return str.toLocaleUpperCase();
}

/* ITERATE THROUGH JSON FILE AND KEEP ONLY 4 OR MORE LETTERS WORDS */
for (var i = 0; i < words.length; i++) {
  if (words[i].label.length == config.wordLength) {
    dictionnary.push(words[i].label);
  }
}

/* IN CASE USER LOST */
function youLoose(message) {
  askWordPrompt.mute();
  askWordPrompt.end();
  console.log("\r\n" + message + "\n");
  play("loose");
}

/* IN CASE USER WON */
function youWin(message) {
  askWordPrompt.mute();
  askWordPrompt.end();
  console.log("\r\n" + message + "\n");
  play("applause");
}

/* COUNTER LEFT */
function sayCounterleft() {
  console.log("-- IL VOUS RESTE " + counter + " COUPS...");
}

var askWordPrompt = new Prompt({
  name: "word",
  message: "Proposez un mot de " + config.wordLength + " lettres :"
});

function askWord() {
  sayCounterleft();
  /* USER HAS NOT GIVEN ANSWER YET */
  var hasGivenAnswer = false;
  /* TIMER */
  var tictac = setTimeout(function() {
    if (!hasGivenAnswer) {
      youLoose("TROP TARD ! IL FALLAIT DEVINER : " + randomWord);
    } else {
      /* USER HAS GIVEN ANSWER, SO CANCEL TICTAC */
      clearTimeout(tictac);
    }
  }, config.time);
  /* PROMPT */
  askWordPrompt.ask(function(word) {
    /* USER HAS GIVEN ANSWER, SO CANCEL TICTAC */
    clearTimeout(tictac);
    var result = analyzeWord(word.toLocaleUpperCase(), randomWord);
    if (result.score === randomWord.length) {
      showLettersOneByOne(true, result.arr, function(playAgain) {
        //animateWord(randomWord);
        youWin("VOUS AVEZ GAGNÉ !");
      });
    } else if (counter == 0) {
      youLoose("VOUS AVEZ PERDU ! IL FALLAIT DEVINER : " + randomWord);
    } else if (word.length != randomWord.length) {
      youLoose(
        "VOUS AVEZ PERDU (NOMBRE DE LETTRES) ! IL FALLAIT DEVINER : " +
          randomWord
      );
    } else {
      showLettersOneByOne(false, result.arr, function(playAgain) {
        askWord();
      });
    }
    counter--;
  });
}

startGame();
