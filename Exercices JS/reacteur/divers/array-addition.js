const arrayAddition = (tab) => {
  // on trie les nombres du tableau => le + grand nombre est en dernier [ 1, 2, 3, 6, 12 ]
  tab.sort(function (a, b) {
    return a - b;
  });

  // on supprime le dernier élément du tableau et on le stocke dans une variable
  const maxNumber = tab.pop();
  console.log(tab); // [ 1, 2, 3, 6 ]
  console.log(maxNumber); // 12

  // additionner tous les nombres du tableau tab
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  console.log(sum); // 12

  if (maxNumber === sum) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
