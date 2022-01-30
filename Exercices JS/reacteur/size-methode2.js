const size = (arg) => {
  // si arg existe et que sa longueur ne retourne pas "undefined"
  if (arg && arg.length !== undefined) {
    return arg.length;
  } else {
    return 0;
  }
};

console.log(size('pebbles')); // Doit afficher `7`
console.log(size([1, 2, 3])); // Doit afficher `3`
console.log(size()); // Doit afficher `0`
console.log(size(null)); // Doit afficher `0`
console.log(size(10)); // Doit afficher `0`
console.log(size(true)); // Doit afficher `0`
