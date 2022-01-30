const pick = (obj, tab) => {
  let result = {};
  for (let i = 0; i < tab.length; i++) {
    // console.log(obj[tab[i]]);
    result[tab[i]] = obj[tab[i]];
  }
  return result;
};

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])); // Doit afficher { a: 1, c: 3 }
