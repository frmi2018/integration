const factorial = (num) => {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
};

const result = factorial(8);
console.log(result);
