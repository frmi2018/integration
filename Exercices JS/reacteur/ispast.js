// Créez une fonction isPast qui permettra de définir si une date donnée est antérieure ou non à la date actuelle.

const isPast = (today, date) => {
  const secToday = Date.now(today);
  const newDate = new Date(date);
  const secDate = newDate.getTime();

  const difference = secToday - secDate;

  if (difference >= 0) {
    return 'Date is past';
  } else {
    return 'Date is not past';
  }
};

console.log(isPast(new Date(), 'July, 14, 2019'));
console.log(isPast(new Date(), 'July, 14, 2021'));
