const simpleAdding = (num) => {
  let total = 0;
  // Début de votre code
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  // Fin de votre code
  return total;
};

const result = simpleAdding(4);
console.log(result);
