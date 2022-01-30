const size = (collection) => {
  if (typeof collection === 'string' || Array.isArray(collection)) {
    const len = collection.length;
    return len;
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
