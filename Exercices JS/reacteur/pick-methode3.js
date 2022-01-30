// avec object.keys()

const pick = (obj, tab) => {
  const newObj = {};

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (tab.indexOf(keys[i]) !== -1) {
      newObj[keys[i]] = obj[keys[i]];
    }
  }

  return newObj;
};

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));
// Doit afficher { a: 1, c: 3 }
