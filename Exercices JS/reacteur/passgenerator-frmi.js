const passwordGen = (num) => {
  const str1 = "abcdefghijklmnopqrstuvwxyz";
  const str2 = "0123456789";
  let password = "";
  let chr = "";

  if (num > 5 && num < 16) {
    // vérifier si nombre entre 6 et 15
    for (i = 1; i <= num; i++) {
      if (headsOrTails()) {
        // si 1 c'est lettre
        chr = str1[Math.floor(Math.random() * str1.length)];
        if (headsOrTails()) {
          // si 1 c'est lettre MAJ
          chr = chr.toUpperCase();
        }
      } else {
        // si 0 c'est chiffre
        chr = str2[Math.floor(Math.random() * str2.length)];
      }
      password += chr; // ajouter caractère au password
    }
  } else {
    return "entrer un nombre entre 6 et 15";
  }
  return password;
};

const headsOrTails = () => {
  return Math.floor(Math.random() * 2);
};

console.log(passwordGen(15)); // Df1jUNaQ
