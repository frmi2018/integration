let counter = 0;

console.log("A");

const interval = setInterval(() => {
  console.log(counter);
  counter++;

  if (counter === 3) {
    console.log("Fin !");
    clearInterval(interval);
  }
}, 2000);

console.log("B");
