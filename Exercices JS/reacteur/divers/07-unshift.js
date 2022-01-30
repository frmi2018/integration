const tab = ["A", "B", "C", "D"];

const value = tab.unshift("Z", "W");

console.log(tab); // [ 'Z', 'W', 'A', 'B', 'C', 'D' ]
console.log(value); // 6 => longueur du nouveau tableau
