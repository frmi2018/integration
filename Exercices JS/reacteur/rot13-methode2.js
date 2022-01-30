const rot13 = (str) => {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';

  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (
      lowerCaseLetters.indexOf(str[i]) === -1 &&
      upperCaseLetters.indexOf(str[i]) === -1
    ) {
      newStr = newStr + str[i];
    }
    if (lowerCaseLetters.indexOf(str[i]) !== -1) {
      newStr = newStr + lowerCaseLetters[lowerCaseLetters.indexOf(str[i]) + 13];
    } else if (upperCaseLetters.indexOf(str[i]) !== -1) {
      newStr = newStr + upperCaseLetters[upperCaseLetters.indexOf(str[i]) + 13];
    }
  }

  return newStr;
};

console.log(rot13('abc')); // nop
console.log(rot13('My horse is Amazing.')); // Zl ubefr vf Nznmvat.
console.log(rot13('AkjhZ zLKIJz , 23y')); // NxwuM mYXVWm , 23l
console.log(rot13('-12')); // -12
