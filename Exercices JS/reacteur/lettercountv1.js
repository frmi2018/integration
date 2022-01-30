const str = "le reacteur c'est super !";
let counter = 0;
// début de votre code
let i = 0;
while (i < str.length) {
  if (str[i] === 'e') {
    counter++;
  }
  i++;
}
// fin de votre code
console.log(counter);
