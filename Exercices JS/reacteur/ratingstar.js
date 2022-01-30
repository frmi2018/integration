const ratingStar = (num) => {
  if (typeof num === 'string' || (!num && num !== 0)) {
    return 'Please provide a number.';
  }

  let rating = '';
  const isDecimal = !Number.isInteger(num);
  const flooredNum = Math.floor(num);

  for (let i = 1; i <= 5; i++) {
    if (num >= i) {
      rating += '★';
    }

    if (num < i && rating.length < 5) {
      rating += '☆';
    }

    if (flooredNum === i && isDecimal) {
      rating += '✪';
    }
  }

  return rating;
};

console.log(ratingStar(5));
// Must returns "★★★★★"

console.log(ratingStar(3));
// Must returns "★★★☆☆"

console.log(ratingStar(2.5));
// Must returns "★★✪☆☆"

console.log(ratingStar(4.5));
// Must returns "★★★★✪"

console.log(ratingStar(0));
// Must returns "☆☆☆☆☆"

console.log(ratingStar());
// Must returns "Please provide a number."

console.log(ratingStar('3'));
// Must returns "Please provide a number."
