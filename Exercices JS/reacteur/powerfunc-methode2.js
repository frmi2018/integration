// méthode 2

const powerFunction = (num, power) => {
  let result = num;

  if (power === 0) {
    // le return suivant met fin à la fonction, le reste du code ne sera pas exécuté
    return 1;
  } else if (power > 0) {
    for (let i = 1; i < power; i++) {
      result = result * num;
    }
  } else {
    // en multipliant power par -1, power devient positif
    power = power * -1;
    for (let i = 1; i < power; i++) {
      result = result * num;
    }
    result = 1 / result;
  }

  return result;
};

console.log(powerFunction(3, 3)); // 27
console.log(powerFunction(3, -3)); // 0.037037037037037035
console.log(powerFunction(3, 0)); // 1
