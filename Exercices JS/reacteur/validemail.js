const email = 'nono@lereacteur.io';
let valid = false;

// début de votre code

let i = 0;

while (i < email.length) {
  if (email[i] === '@') {
    valid = true;
  }
  i++;
}

// fin de votre code

console.log(valid);
