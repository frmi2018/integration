const TableMult = (num) => {
  if (typeof num !== 'number') {
    return 'error';
  }

  if (num < 0) {
    return 'Vous devez entrer un nombre positif';
  }

  if (Number.isInteger(num) === false) {
    return 'Vous devez entrer un nombre entier';
  }

  let results = [];
  for (let i = 1; i <= 10; i++) {
    let result = i * num;
    results.push(i + ' * ' + num + ' = ' + result);
  }

  return results.join('\n');
};

console.log(TableMult(4));
