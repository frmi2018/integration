var zero2sixteen = [
  'zéro',
  'un',
  'deux',
  'trois',
  'quatre',
  'cinq',
  'six',
  'sept',
  'huit',
  'neuf',
  'dix',
  'onze',
  'douze',
  'treize',
  'quatorze',
  'quinze',
  'seize',
];
var twenty2sixty = ['vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
var hundred2thousand = ['cent', 'mille'];

function handleJoiner(num, currentNum, value) {
  if (
    num !== 11 &&
    currentNum > 10 &&
    (value === zero2sixteen[1] || value === zero2sixteen[11])
  ) {
    if (currentNum === 11 && num > 100) {
      return value;
    }
    return 'et ' + value;
  }
  return value;
}

function handleTens(num) {
  var res = '';
  if (num % 100 > 0) {
    res += ' ';
  }
  currentNum = num % 100;
  var tens = Math.floor(currentNum / 10);
  if (tens < 2) {
    if (currentNum > 16) {
      res += zero2sixteen[10] + '-' + zero2sixteen[currentNum - 10];
    } else {
      if (currentNum) {
        res += handleJoiner(num, currentNum, zero2sixteen[currentNum]);
      }
    }
  } else if (tens >= 2 && tens < 6) {
    res += twenty2sixty[tens - 2];
    if (currentNum % 10) {
      if (currentNum % 10 === 1) {
        res += ' ';
      } else {
        res += '-';
      }
      res += handleJoiner(num, currentNum, zero2sixteen[currentNum % 10]);
    }
  } else if (tens >= 6 && tens < 8) {
    res += twenty2sixty[6 - 2];
    if (currentNum - 60 > 16) {
      res += '-' + zero2sixteen[10] + '-' + zero2sixteen[currentNum - 70];
    } else {
      if (currentNum !== 60) {
        if (currentNum === 61 || currentNum === 71) {
          res += ' ';
        } else {
          res += '-';
        }
        res += handleJoiner(num, currentNum, zero2sixteen[currentNum - 60]);
      }
    }
  } else if (tens >= 8) {
    res += zero2sixteen[4] + '-' + twenty2sixty[0];
    if (currentNum - 80 > 16) {
      res += '-' + zero2sixteen[10] + '-' + zero2sixteen[currentNum - 90];
    } else {
      if (currentNum !== 80) {
        res += '-' + zero2sixteen[currentNum - 80];
      } else {
        res += 's';
      }
    }
  }

  return res;
}

function handleHundreds(num) {
  var res = '';
  if (num % 1000 > 0) {
    res += ' ';
  }
  currentNum = num % 1000;
  var hundreds = Math.floor(currentNum / 100);
  if (hundreds === 0) {
    return res;
  } else if (hundreds === 1) {
    res += hundred2thousand[0];
    return res;
  }
  res += zero2sixteen[hundreds] + ' ' + hundred2thousand[0];
  if (currentNum % 100 === 0) {
    res += 's';
  }
  return res;
}

function handleThousands(num) {
  var thousands = Math.floor(num / 1000);
  if (thousands === 0) {
    return '';
  } else if (thousands === 1) {
    return hundred2thousand[1];
  }
  return zero2sixteen[thousands] + ' ' + hundred2thousand[1];
}

function NumberToLetters(num) {
  var res = '';

  if (num === '' || isNaN(num) || num < 0 || num > 9999 || num % 1 !== 0) {
    res += 'Paramètre invalide';
    return res;
  }

  num = parseInt(num);

  if (num === 0) {
    res += zero2sixteen[0];
    return res;
  }

  res += handleThousands(num);
  res += handleHundreds(num);
  res += handleTens(num);

  return res.replace('  ', ' ').trim();
}

module.exports = NumberToLetters;
