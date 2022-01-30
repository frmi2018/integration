// Créez une fonction nommée isWeekend qui retournera "weekend" si, d'après la date passée à la fonction, le jour est samedi ou dimanche.
// Si le jour n'est ni samedi, ni dimanche, la fonction retournera "not weekend"

const isWeekend = (str) => {
  const newTab = str.split(' ');
  // console.log(newTab);
  const today = new Date();
  // set date
  today.setDate(newTab[1]);
  // set month
  const monthArray = [
    'Jan',
    'Fev',
    'Mar',
    'Avr',
    'Mai',
    'Jun',
    'Jui',
    'Aou',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let month = monthArray.indexOf(newTab[0]);
  today.setMonth(month);
  // set year
  today.setFullYear(newTab[2]);
  // test si weekend
  if (today.getDay() > 0 && today.getDay() < 6) {
    return 'not weekend';
  } else {
    return 'weekend';
  }
};

console.log(isWeekend('Nov 11 2019')); // "not weekend"
console.log(isWeekend('Dec 7 2019')); // "weekend"
