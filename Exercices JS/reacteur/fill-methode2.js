const fill = (tab, str) => {
  for (let i = 0; i < tab.length; i++) {
    tab[i] = str;
  }

  return tab;
};

console.log(fill([1, 2, 3], 'a')); // Doit afficher `['a', 'a', 'a']`
