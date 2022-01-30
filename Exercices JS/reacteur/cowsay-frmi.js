const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.";

// Début de votre code

const cowsay = (str, num) => {
  let txt = " -----------------------------------------\n/ ";
  let counter = 0;
  let caractEnd = "";
  let lastLine = false;

  for (let i = 0; i < str.length; i++) {
    // pour chaque caractère de la la chaine str
    counter++; // enlever 1 au nombre de caractère restant à afficher sur la ligne
    txt += str[i]; // ajouter le caractère à la chaine de caractère finale

    // choix du caractère de la bulle à afficher (fin de ligne)
    if (i === num - 2) {
      caractEnd = " \\";
    } else {
      caractEnd = " |";
    }
    // si c'est l'avant dernier caractère de la ligne
    if (counter === num - 1) {
      // si le prochain caractère n'est pas un espace
      if (str[i + 1] !== " ") {
        txt += "-" + caractEnd; // ajouter un tiret (mot coupé)
      } else {
        txt += str[i + 1] + caractEnd;
        i++; // avancé d'un caractère pour pas réécrire le dernier en début de ligne
      }
      txt += "\n"; // ajouter un saut de ligne
      counter = 0; // remettre le counter de caractère à zéro

      // choix du caractère de la bulle à afficher (début de ligne)
      if (i + num < str.length) {
        // pas dernière ligne à afficher
        txt += "| ";
      } else {
        // dernière ligne à afficher
        txt += "\\ ";
        lastLine = true;
      }
    }
    // si dernière ligne, ajouter des espaces en fin de ligne et fermer la bulle
    if (lastLine === true) {
      if (i === str.length - 1) {
        for (let j = 0; j < num - counter; j++) {
          txt += " ";
        }
        txt += " /\n -----------------------------------------\n";
      }
    }
  }
  return txt;
};

// Fin de votre code

console.log(cowsay(str, 39));
