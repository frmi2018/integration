# Leet Generator - 1337 G3N3R4T0R

Returns a leet string.

INPUT : "Le Reacteur is the best bootcamp ever"  
OUTPUT : "13_R34CT3UR_lS_T#3_B3ST_B00TC4MP_3V3R"

Conditions :
If there is no string passed, then return

```
"WUUT?! ¯\_(ツ)_/¯"
```

For ASCII emote you need to add antislash twice like this :

```
"¯\\_(ツ)_/¯"
```

Helper :

```
  const codex = {
    A: "4",
    E: "3",
    F: "ph",
    H: "#",
    I: "l",
    L: "1",
    O: "0",
    " ": "_"
  };
```

Code

```
console.log(generateLeet("I will love JavaScript forever"));
// Must returns "l_Wl11_10V3_J4V4SCRlPT_ph0R3V3R"

console.log(generateLeet("Le Reacteur is the best bootcamp ever"));
// Must returns "13_R34CT3UR_lS_T#3_B3ST_B00TC4MP_3V3R"

console.log(generateLeet());
// Must returns "WUUT?! ¯\_(ツ)_/¯"
```
