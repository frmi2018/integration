// un seul return

const checkNums = (num1, num2) => {
  let str;

  if (num2 < num1) {
    str = 'num2 est inférieur à num1';
  } else if (num2 > num1) {
    str = 'num2 est supérieur à num1';
  } else if (num1 === num2) {
    str = 'num1 est num2 sont équivalents';
  }

  return str;
};

console.log(checkNums(3, 122));
