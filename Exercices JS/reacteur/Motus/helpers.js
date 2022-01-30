var _ = require("lodash");
var clc = require("cli-color");
var player = require("play-sound")((opts = {}));
var log = require("single-line-log").stdout;

function play(sound) {
  player.play("./sounds/" + sound + ".wav", function(err) {
    if (err) throw err;
  });
}

function analyzeWord(word, randomWord) {
  var score = 0;
  var arr = [];
  /* RED LETTERS */
  var redLetters = [];
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (word[i] == randomWord[i]) {
      redLetters.push(letter);
    }
  }
  /* YELLOW LETTERS */
  var yellowLetters = [];
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var index = _.indexOf(redLetters, letter);
    if (word[i] !== randomWord[i] && index == -1) {
      _.remove(redLetters, index);
      yellowLetters.push(letter);
    }
  }
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var obj = {};
    if (word[i] === randomWord[i]) {
      obj.letter = letter;
      obj.color = 1;
      randomWord[i] = "*";
      score++;
    } else if (_.indexOf(randomWord, letter) > -1) {
      var index = _.indexOf(redLetters, letter);
      if (index > -1) {
        _.remove(redLetters, index);
        obj.letter = letter;
        obj.color = 0;
      } else {
        obj.letter = letter;
        obj.color = 2;
      }
    } else {
      obj.letter = letter;
      obj.color = 0;
    }
    arr.push(obj);
  }
  return { arr, score };
}

function showLettersOneByOne(win, word, playAgain) {
  var progressiveWord = [];
  for (var i = 0; i < word.length; i++) {
    var obj = {};
    if (word[i].color == 1) {
      obj.letter = clc.bgRed(word[i].letter);
      obj.sound = "letterOk";
      progressiveWord.push(obj);
    } else if (word[i].color == 2) {
      obj.letter = clc.black.bgYellow(word[i].letter);
      obj.sound = "letterAlmostOk";
      progressiveWord.push(obj);
    } else {
      obj.letter = clc.black.bgWhite(word[i].letter);
      obj.sound = "letterNotOk";
      progressiveWord.push(obj);
    }
  }
  printWord(progressiveWord, win, playAgain);
}

function printWord(progressiveWord, win, playAgain) {
  var i = 0;
  var word = "";
  var loop = setInterval(function() {
    word += progressiveWord[i].letter;
    log(word);
    play(progressiveWord[i].sound);
    i++;
    if (i == progressiveWord.length) {
      log((word += "\n"));
      if (win) {
        playAgain(false);
      } else {
        playAgain(true);
      }
      clearInterval(loop);
    }
  }, 400);
}

/* function animateWord(word, bravo) {
  var animCounter = 20;
  for 
  var loop = setInterval(function() {
    if (animCounter) {
      clearInterval(loop);
    }
  }, 100);
} */

module.exports = { play, analyzeWord, showLettersOneByOne /* , animateWord */ };
