const palindrome = (str) => {
  // 1. Supprimer les espaces
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== ' ') {
      newStr = newStr + str.charAt(i);
    }
  }

  // 2. Ne pas prendre en compte les minuscules et les majuscules
  newStr = newStr.toLowerCase();

  // 3. Créer la même chaîne de caractères mais inversée
  let reversed = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversed = reversed + newStr.charAt(i);
  }

  // 4. Comparer reversed et newStr
  if (reversed === newStr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome('Aromate et Amora'));
