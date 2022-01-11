const NOM = "toto";
let age = 30;
let homme = true;
console.log("Nom :" + NOM);
// autre écriture : console.log("Nom : %s ", NOM);
console.log("Age : " + age);
// autre écriture : console.log("Age : %d ", age);
if (homme) {
    console.log("Sexe : homme");
} else {
    console.log("Sexe : femme");
}
console.log("%s a %d ans", NOM, age);