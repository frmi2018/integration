function abracadabra() {
	let prenom = prompt('Votre prénom ?');
	let nom = prompt('Votre nom ?');
	let age = Number(prompt('Votre âge ?'));
	let phrase = 'Sapristi ! On ne m\'avait pas prévenu que c\'était vous, '
    + prenom
    + ' ! Euh... Je veux dire... Monsieur le grand magicien '
    + nom
    + ' ! Cela fait déjà; '
    + age
    + ' ans que vous faites rayonner notre contrée !';
	return phrase;
}

alert(abracadabra());