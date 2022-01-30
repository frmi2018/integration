const words = ['cheval', 'sport', 'animal', 'formateur', 'journal'];

const addPlurals = (array) => {
  const newWords = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (word.slice(-2) === 'al') {
      const newStr = word.slice(0, -1);
      newWords.push(newStr + 'ux');
    } else {
      newWords.push(word + 's');
    }
  }

  return newWords;
};

console.log(addPlurals(words));
