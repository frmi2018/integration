const generateLeet = (str) => {
  if (!str) {
    return 'WUUT?! ¯\\_(ツ)_/¯';
  }

  const codex = {
    A: '4',
    E: '3',
    F: 'ph',
    H: '#',
    I: 'l',
    L: '1',
    O: '0',
    ' ': '_',
  };

  let generatedStr = '';

  for (let i = 0; i < str.length; i++) {
    const upperChar = str.charAt(i).toUpperCase();
    const foundChar = codex[upperChar];

    if (foundChar) {
      generatedStr += foundChar;
    } else {
      generatedStr += upperChar;
    }
  }

  return generatedStr;
};

console.log(generateLeet('I will love JavaScript forever'));
// Must returns "l_Wl11_10V3_J4V4SCRlPT_ph0R3V3R"

console.log(generateLeet('Le Reacteur is the best bootcamp ever'));
// Must returns "13_R34CT3UR_lS_T#3_B3ST_B00TC4MP_3V3R"

console.log(generateLeet());
// Must returns "WUUT?! ¯\_(ツ)_/¯"
