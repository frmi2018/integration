const doop = (tab) => {
  const a = tab[0];
  const op = tab[1];
  const b = tab[2];
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return 'error';
  } else {
    if (op === '+') {
      return a + b;
    } else if (op === '-') {
      return a - b;
    } else if (op === '*') {
      return a * b;
    } else if (op === '/') {
      return a / b;
    } else if (op === '%') {
      return a % b;
    } else {
      return 'error';
    }
  }
};

console.log(doop([5, '+', 4])); // Affichera : 9
console.log(doop([9, '*', 2])); // Affichera : 18
console.log(doop([11, '-', 4])); // Affichera : 7
console.log(doop([-1, '*', 4])); // Affichera : -4
console.log(doop([10.1, '-', 2])); // Affichera : ERROR
console.log(doop([8])); // Affichera : ERROR
