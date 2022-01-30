console.log("hello" * 2); // NaN

if (NaN === NaN) {
  console.log("identique");
} else {
  console.log("différent"); // le terminal affiche "différent"
}

console.log(isNaN(5)); // false

console.log(isNaN("hello")); // true

console.log(isNaN(NaN)); // true
