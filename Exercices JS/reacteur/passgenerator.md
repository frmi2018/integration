# Password Generator

Dans cet exercice, vous utiliserez le package generate-password.

Lisez attentivement les étapes qui suivent. Cet exercice est très simple, il vous apprendra comment initialiser un projet, installer et importer un package.

## Étape 1 (environnement de travail)

Créez un dossier nommé passwordGenerator.
Ouvrez ce dossier dans VSCode.
Créez, dans ce dossier, un fichier nommé index.js.

## Étape 2 (initialisation du projet)

Dans le terminal, vérifiez que vous êtes bien positionné dans le dossier passwordGenerator en tapant la commande pwd.

Tapez la commande npm init -y pour initialiser votre projet : vous pourrez ainsi installer un ou plusieurs packages npm.

Suite à cette commande, notez la création d'un fichier package.json.

## Étape 3 (installation et import du package)

Tapez la commande npm install generate-password afin d'installer le package.

Notez la création d'un dossier node_modules.

Consultez la documentation du package pour connaître la procédure à suivre pour l'importer.

```
// Dans le fichier index.js :

const generator = require("generate-password");
// nous pouvons remplacer var par const, var étant l'ancienne syntaxe pour déclarer des variables
```

## Étape 4 (génération d'un mot de passe)

Consultez la documentation pour connaître la syntaxe à utiliser.

```
const password = generator.generate({
    length: 10,
    numbers: true
});

// 'uEyMTw32v9'
console.log(password);
```

## ✨ Bonus

Pour réaliser ces bonus, vous devrez utiliser la documentation du package.

générer un mot de passe de 16 caractères dans lequel il peut y avoir des nombres, des lettres minuscules, des lettres majuscules et des symboles.
générer un tableau de 5 mots de passe de 16 caractères chacun. Il devra y avoir, dans chaque mot de passe, au moins un nombre, une lettre majuscule, une lettre minuscule et un symbole.
