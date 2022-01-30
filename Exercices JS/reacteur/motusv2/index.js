console.log(' _  _   __  ____  _  _  ____');
console.log('( \\/ ) /  \\(_  _)/ )( \\/ ___)');
console.log('/ \\/ \\(  O ) )(  ) \\/ (\\___ \\');
console.log('\\_)(_/ \\__/ (__) \\____/(____/');

var prompt = require('prompt');
var words = require('./words.json');
var _ = require('lodash');
var colors = require('colors');
var player = require('play-sound')();
var counter = 6;
var currWord = 0;
var wordLength = parseInt(process.argv[2]);
var guessWord = [];
var win = false;
// var timeoutLose = false;
var patt = /^([a-zA-Z]+)$/;

prompt.delimiter = '';
prompt.message = '';

function replaceSpec(str) {
  str = str.toLowerCase();
  str = str.replace(/[éèêë]/g, 'e');
  str = str.replace(/[àâä]/g, 'a');
  str = str.replace(/[îï]/g, 'i');
  str = str.replace(/[ôö]/g, 'o');
  str = str.replace(/[ùûü]/g, 'u');
  str = str.replace(/[ç]/g, 'c');
  str = str.toUpperCase();
  return str;
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function count(char, string) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (char === string[i]) {
      count++;
    }
  }
  return count;
}

var wordsArr = [];
for (var key in words) {
  var entry = words[key].label;
  if (entry.length === wordLength) {
    if (entry.indexOf('\'') === -1 && entry.indexOf(' ') === -1 && entry.indexOf('-') === -1) {
      wordsArr.push(words[key].label);
    }
  }
}

var mysWord = replaceSpec(wordsArr[_.random(0, wordsArr.length - 1)]);
var guesses = [];

for (var i = 0; i < wordLength; i++) {
  if (i === 0) {
    guessWord.push(mysWord[i]);
  } else {
    guessWord.push('*');
  }
}

function motus() {
  console.log('\nMot mystère: ' + guessWord.join(''));
  if (win === true) {
    console.log('\nC\'est gagné!');
    player.play('./sounds/win.wav', function (err) {
      if (err) {
        throw err;
      }
    });
  } else if (counter === 0) {
    console.log('C\'est perdu...');
    console.log('Le mot mystère était: ' + mysWord + '...');
    player.play('./sounds/lose.wav', function (err) {
      if (err) {
        throw err;
      }
    });
  } else {
    console.log('\nIl vous reste ' + counter + ' essais.\n');
    prompt.start();

    prompt.get({
      properties: {
        input: {
          description: 'Veuillez entrer un mot de ' + wordLength + ' lettres:',
        }
      }
    }, function (err, user) {

      var input = replaceSpec(user.input);
      if (input.length !== mysWord.length) {
        console.log('\nVotre mot comporte ' + input.length + ' lettres au lieu de ' + mysWord.length + '.');
        console.log('\nRéessayez!');
        motus();
      } else {
        var numCheck = false;
        for (var j = 0; j < input.length; j++) {
          if (isNaN(input[j]) === false) {
            numCheck = true;
          }
        }
        if (numCheck === true) {
          console.log('\nVotre proposition ne peut pas comporter de chiffres.');
          console.log('\nRéessayez!');
          motus();
        } else if (patt.test(input) === false) {
          console.log('\nVotre proposition ne peut pas comporter de caractères spéciaux.');
          console.log('\nRéessayez!');
          motus();
        } else {
          var colorArray = [];
          guesses[currWord] = [];
          for (var i = 0; i < input.length; i++) {
            if (input[i] === mysWord[i]) {
              guesses[currWord][i] = input[i].red.bold;
              guessWord[i] = input[i];
              colorArray[i] = 'red';
            }
          }
          for (var m = 0; m < input.length; m++) {
            if (guesses[currWord][m] === undefined && count(input[m].yellow.bold, guesses[currWord]) + count(input[m].red.bold, guesses[currWord]) < count(input[m], mysWord) && count(input[m], mysWord) > 0) {
              guesses[currWord][m] = input[m].yellow.bold;
              colorArray[m] = 'yellow';
            } else if (guesses[currWord][m] === undefined) {
              guesses[currWord][m] = input[m];
              colorArray[m] = 'white';
            }
          }
          console.log('');
          for (var l = 0; l < guesses.length - 1; l++) {
            console.log(guesses[l]);
          }
          for (var k = 0; k < guesses[currWord].length; k++) { // animation et sons
            process.stdout.write(guesses[currWord][k]); // permet d'afficher les caractères sur la même ligne
            if (colorArray[k] === 'red') {
              var audio1 = player.play('./sounds/valid.wav', function (err) { });
              wait(250);
              audio1.kill();
            } else if (colorArray[k] === 'yellow') {
              var audio2 = player.play('./sounds/misplaced.wav', function (err) { });
              wait(250);
              audio2.kill();
            } else {
              var audio3 = player.play('./sounds/wrong.wav', function (err) { });
              wait(250);
              audio3.kill();
            }
          }
          guesses[currWord] = guesses[currWord].join('');
          if (input === mysWord) {
            win = true;
          }
          console.log('');
          counter--;
          currWord++;
          motus();
        }
      }
    });
  }
}
motus();
