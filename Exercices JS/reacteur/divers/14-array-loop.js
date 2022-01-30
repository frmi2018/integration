const tab = ["A", "B", "C", "D", "E", "F", [3, 5, 4]];

console.log(tab.length); // 6

// pour afficher le 1er élément d'un tableau :
console.log(tab[0]); // A

// pour afficher le dernier élément :
console.log(tab[tab.length]); // undefined
console.log(tab[tab.length - 1]); // F

for (let i = 0; i <= tab.length - 1; i++) {
  console.log(tab[i]);
}
