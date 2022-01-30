const exOh = (str) => {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'x') {
      countX++;
    } else if (str.charAt(i) === 'o') {
      countO++;
    }
  }

  if (countX === countO) {
    return true;
  } else {
    return false;
  }
};

console.log(exOh('xooxxoo'));
