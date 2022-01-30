const readline = require('readline'); // pour avoir accès au module `readline`
const rl = readline.createInterface(process.stdin, process.stdout); // précise l'interface d'entrée et l'interface de sortie. stdin et stdout représentent le terminal qui exécute le programme.

const num = Math.floor(Math.random() * 100) + 1;

const moreOrLess = () => {
  // console.log(num);

  const onAnswer = (answer) => {
    if (Number(answer) === num) {
      console.log('Bravo, vous avez trouvé le nombre mystère !');
      rl.close();
    } else if (Number(answer) > num) {
      console.log("C'est moins !");
      rl.question('Quel est le nombre mystère ? ', onAnswer);
    } else {
      console.log("C'est plus !");
      rl.question('Quel est le nombre mystère ? ', onAnswer);
    }
  };
  rl.question('Quel est le nombre mystère ? ', onAnswer); // permet d'écouter les entrées de l'utilisateur
};

moreOrLess();
