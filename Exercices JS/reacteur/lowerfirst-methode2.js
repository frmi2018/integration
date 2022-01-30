const lowerFirst = (str) => {
  let newStr = str.replace(str[0], str[0].toLowerCase());

  return newStr;
};

console.log(lowerFirst('Fred')); // Doit afficher `fred`
console.log(lowerFirst('FRED')); // Doit afficher `fRED`
