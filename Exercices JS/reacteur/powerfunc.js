// méthode 1

const abs = (num) => {
  let abs;
  if (num > 0) {
    abs = num;
  } else {
    abs = num * -1;
  }
  return abs;
};

const powerFunc = (num, power) => {
  let total = 1;
  const newValue = abs(power);

  for (let i = 0; i < newValue; i++) {
    total = total * num;
  }

  if (power > 0) {
    return total;
  } else {
    return 1 / total;
  }
};

console.log(powerFunc(4, -2));
