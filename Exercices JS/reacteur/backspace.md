# Backspace

Returns a string after remove all backspaces.

Each time there is an @ symbol, it will remove previous character like a backspace action. If there is two @@ symbol, it will remove 2 previous characters (not @).

```
console.log(backspace("Rer@ayu@@ctt@eupm@@r"));
// Must returns "Reacteur"

console.log(backspace("YOO@"));
// Must returns "YO"

console.log(backspace("@@@"));
// Must returns ""

console.log(backspace(""));
// Must returns ""
```
