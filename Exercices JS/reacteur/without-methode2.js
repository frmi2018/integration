//avec une doubel boucle

const without = (tab, toExclude) => {
  const newTab = [];

  for (let i = 0; i < tab.length; i++) {
    let isPresent = false;
    for (let j = 0; j < toExclude.length; j++) {
      if (tab[i] === tab[j]) {
        isPresent = true;
        break;
      }
    }
    if (isPresent === false) {
      newTab.push(tab[i]);
    }
  }
  return newTab;
};

console.log(without([2, 1, 2, 3], [1, 2]));
// Doit afficher `[3]`
