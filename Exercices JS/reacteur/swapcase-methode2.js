const swapCase = tab => {
    let str = tab.join(",");
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        newStr = newStr + str[i].toUpperCase();
      } else if (str[i] === str[i].toUpperCase()) {
        newStr = newStr + str[i].toLowerCase();
      }
    }
    let result = newStr.split(",");
    return result;
  };
  ​
  console.log(swapCase(["Hello", "Le Reacteur"])); // Affichera : ["hELLO", "lE rEACTEUR"]