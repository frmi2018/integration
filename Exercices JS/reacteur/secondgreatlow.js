const secondGreatLow = (values) => {
  for (let i = 0; i < values.length; i++) {
    if (isNaN(values[i]) === true) {
      return 'error';
    }
  }

  let uniqueValues = [];
  for (let i = 0; i < values.length; i++) {
    if (uniqueValues.indexOf(values[i]) === -1) {
      // si l'élément n'est pas déjà ajouté
      uniqueValues.push(values[i]); // l'élément est ajouté
    }
  }

  if (uniqueValues.length === 1) {
    return [values[0], values[0]];
  }

  uniqueValues.sort(function (a, b) {
    return b - a;
  });

  return [uniqueValues[uniqueValues.length - 2], uniqueValues[1]];
};

console.log(secondGreatLow([1, 42, 42, 180])); // Affichera [42, 42]
console.log(secondGreatLow([4, 90])); // Affichera [90, 4]
console.log(secondGreatLow([7, 7, 12, 98, 106])); // Affichera [12, 98]
console.log(secondGreatLow([8])); // Affichera [8, 8]
console.log(secondGreatLow([-12, -12, -12])); // Affichera [-12, -12]
console.log(secondGreatLow(['ABC', 9, 4, 10])); //  Affichera : ERROR
