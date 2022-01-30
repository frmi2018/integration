// Début de votre code
const showAddress = (street, code, city) => {
  console.log(`${street}\n${code}\n${city}`);
  // ou bien :
  console.log(street + "\n" + code + "\n" + city);
};
// Fin de votre code

showAddress("9 rue du Château d'Eau", "75010", "Paris"); // Doit afficher la rue, le code postal et la ville sur 3 lignes différentes dans le terminal
