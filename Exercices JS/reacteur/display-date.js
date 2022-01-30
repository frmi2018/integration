// Créer une fonction displayDate qui affichera une phrase du type "Nous sommes lundi 13 avril 2020".
// La date affichée sera la date actuelle.
// Il faudra utiliser l'instruction switch (voir onglet "🚀 Pour aller plus loin").

const displayDate = (date) => {
  // jours de la semaine
  let day = '';
  switch (date.getDay()) {
    case 0:
      day = 'dimanche';
      break;
    case 1:
      day = 'lundi';
      break;
    case 2:
      day = 'mardi';
      break;
    case 3:
      day = 'mercredi';
      break;
    case 4:
      day = 'jeudi';
      break;
    case 5:
      day = 'vendredi';
    default:
      day = 'samedi';
  }
  // mois
  const monthArray = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];
  const month = monthArray[date.getMonth()];
  // retourner la phrase
  return `Nous sommes ${day} ${date.getDate()} ${month} ${date.getFullYear()}.`;
};

const today = new Date();

console.log(displayDate(today)); // Nous sommes lundi 13 avril 2020
