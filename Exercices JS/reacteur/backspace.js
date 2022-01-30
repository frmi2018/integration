const backspace = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '@') {
      newStr = newStr.slice(0, -1);
    } else {
      newStr += char;
    }
  }

  return newStr;
};

console.log(backspace('Rer@ayu@@ctt@eupm@@r'));
// Must returns "Reacteur"

console.log(backspace('YOO@'));
// Must returns "YO"

console.log(backspace('@@@'));
// Must returns ""

console.log(backspace(''));
// Must returns ""
