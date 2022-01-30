# Object Cleaner 🧽

Returns an array of clean objects.

Objectives :

- Remove all useless spaces
- Add an uppercase for all first letters
- Change type of height value to number
- Remove all undefined keys
- Switch isActive value (if true change to false, if false change to true)
  INPUT :

```
[
  {
    alias: "   deadpool  ",
    firstname: "    Wade",
    lastname: "wilson  ",
    height: "188",
    city: undefined,
    isActive: true,
  },
  {
    alias: " wolverine ",
    firstname: "james   ",
    lastname: "howlett",
    height: "      160",
    country: "canada",
    isActive: false,
  },
];
```

OUTPUT :

```
[
  {
    alias: "Deadpool",
    firstname: "Wade",
    lastname: "Wilson",
    height: 188,
    isActive: false,
  },
  {
    alias: "Wolverine",
    firstname: "James",
    lastname: "Howlett",
    height: 160,
    country: "Canada",
    isActive: true,
  },
];
```

Code

```
const heroes = [
  {
    alias: "   deadpool  ",
    firstname: "    Wade",
    lastname: "wilson  ",
    height: "188",
    country: undefined,
    isActive: true
  },
  {
    alias: " wolverine ",
    firstname: "james   ",
    lastname: "howlett",
    height: "      160",
    country: "canada",
    isActive: false
  }
];

console.log(cleanObject(heroes));
```
