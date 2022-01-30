const reverseString = (str) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str.charAt(i);
  }

  return result;
};

console.log(reverseString('Le Reacteur'));
console.log(reverseString('I Love Code'));
