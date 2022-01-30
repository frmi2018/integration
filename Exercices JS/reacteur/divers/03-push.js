const tab = ["Farid", "Xavier", 42];

// tab = [20, 10]; // impossible, génère une erreur

const pushed = tab.push("Le Reacteur", 30, true);

console.log(tab); // [ 'Farid', 'Xavier', 42, 'Le Reacteur', 30, true ]
console.log(pushed); // 6 => la nouvelle longueur du tableau
