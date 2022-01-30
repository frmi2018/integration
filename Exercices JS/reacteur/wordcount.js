const wordCount = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      count = count + 1;
    }
  }

  if ((count === 0 && str.length > 0) || count > 0) {
    return count + 1;
  } else {
    return 0;
  }
};

console.log(wordCount('Hello World'));
