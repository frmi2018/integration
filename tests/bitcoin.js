const URL = 'https://blockchain.info/ticker';

function maFonction() {
	// créer une requête AJAX
	let requete = new XMLHttpRequest(); // créer un objet
	requete.open('GET', URL);
	// premier paramètre GET / POST
	// deuxième paramètre url
	requete.responseType = 'json'; // nous voulons du JSON
	requete.send(); // nous envoyons notre requête

	// dès qu'on reçoit une réponse
	requete.onload = function() {
		// Requete terminé ?
		if (requete.readyState === XMLHttpRequest.DONE) {
			// Est-ce que tout est ok ? (erreur 200)
			if (requete.status === 200) {
				let response = requete.response; // on stock la réponse (fichier JSON)
				let euroLastPrice = response.EUR.last; // récupérer la propriété last de l'objet EUR
				document.querySelector('#price_label').textContent = euroLastPrice;
				let date = new Date();
				let dateLocate = date.toLocaleString(navigator.language, {
					// weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
					// year: 'numeric', // numeric (xxxx), 2-digit (xx)
					// month: 'long', // short, narrow, long, numeric
					// day: 'numeric', // numeric, 2-digit
					hour: 'numeric', // ...
					minute: 'numeric',
					second: 'numeric'
				});
				document.querySelector('#date').textContent = dateLocate;
			} else {
				alert('Un problème est intervenu, merci de revenir plus tard.');
			}
		}
	};
	console.log('prix actualisé');
}

setInterval(maFonction, 5000);