// plusieurs return

const checkNums = (num1, num2) => {
  if (num2 > num1) {
    return 'num2 est supérieur à num1';
  } else if (num2 < num1) {
    return 'num2 est inférieur à num1';
  } else {
    return 'num1 est num2 sont équivalents';
  }
};

const firstParam = 100;
const secondParam = 200;

const result = checkNums(firstParam, secondParam);
console.log(result);
