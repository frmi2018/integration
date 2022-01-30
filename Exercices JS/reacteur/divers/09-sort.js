const tab = ["Pommes", "bananes", "cerise", "Poire"];

tab.sort();

// console.log(tab); // [ 'Poire', 'Pommes', 'bananes', 'cerise' ]

const tab2 = [2, 10, 21, 5, 1];

tab2.sort(function (a, b) {
  return a - b;
});

console.log(tab2); // [ 1, 2, 5, 10, 21 ]
