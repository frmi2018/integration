let counter = 12;

const limit = 0;

while (counter >= limit) {
  if (counter === 8) {
    console.log('Ignition sequence start');
  } else if (counter !== 7) {
    console.log(counter);
  }

  counter = counter - 1;
}

console.log('All engines running\nLiftoff! 🚀');
