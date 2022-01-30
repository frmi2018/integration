function migratoryBirds(arr) {
  let countingArray = [0, 0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    countingArray[arr[i] - 1]++;
  }
  let result = [];
  let max = 0;
  for (let j = 0; j < countingArray.length; j++) {
    if (countingArray[j] > max) {
      max = countingArray[j];
      result = [j + 1];
    } else if (countingArray[j] === max) {
      result.push(j + 1);
    }
  }
  if (result.length > 1) {
    result.sort();
    return result[0];
  } else {
    return result[0];
  }
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // doit afficher `4`

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // doit afficher `3`

console.log(
  migratoryBirds([
    5, 2, 2, 2, 4, 1, 1, 2, 4, 2, 2, 2, 4, 1, 2, 4, 1, 2, 4, 4, 3, 2, 3, 1, 3,
    3, 4, 3, 5, 2, 5, 3, 4, 1, 3, 2, 3, 3, 3, 5, 2, 4, 1, 5, 4, 5, 4, 4, 4, 5,
    3, 2, 1, 1, 3, 1, 1, 5, 5, 3, 5, 2, 2, 4, 5, 2, 4, 3, 2, 4, 4, 5, 3, 2, 3,
    2, 4, 5,
  ])
); // doit afficher `2`

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 2, 1, 3, 5])); // doit afficher `1`

console.log(
  migratoryBirds([2, 1, 5, 3, 2, 5, 1, 5, 5, 4, 4, 2, 1, 5, 4, 5, 3, 3, 3])
); // doit afficher `5`
