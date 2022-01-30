const arrayAddition = (tab) => {
  // https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
  const sortedTab = tab.sort((a, b) => {
    return a - b;
  });

  const max = sortedTab.pop();
  let result = 0;
  for (let i = 0; i < sortedTab.length; i++) {
    result = result + sortedTab[i];
  }
  if (result === max) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
