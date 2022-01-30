const lowerFirst = (str) => {
  let newStr = str[0].toLowerCase() + str.substring(1);

  return newStr;
};

console.log(lowerFirst('Fred')); // Doit afficher `fred`
console.log(lowerFirst('FRED')); // Doit afficher `fRED`
