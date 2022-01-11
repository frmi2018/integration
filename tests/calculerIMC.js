function calculerIMC(poids, taille) {
	let tailleEnMetres = taille / 100;
	let imc = poids / (tailleEnMetres ** 2);
	return imc;
}

let poids = Number(prompt('Votre poids en kg ?'));
let taille = Number(prompt('Votre taille en cm ?'));

let resultat = calculerIMC(poids, taille);
alert('Votre IMC est : ' + resultat);