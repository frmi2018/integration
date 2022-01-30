# Fonctions

## Appeler une fonction

```
const func = () => {
  console.log("La fonction a été appelée");
};

func();
```

Résultat affiché dans le terminal

```
La fonction a été appelée
```

## Appeler plusieurs fois une fonction

```
const func = () => {
  console.log("La fonction a été appelée");
};

func();
func();
```

Résultat affiché dans le terminal

```
La fonction a été appelée
La fonction a été appelée
```

## Appeler une fonction avec 2 paramètres

```
const displayFullName = (firstName, lastName) => {
  console.log(firstName + " " + lastName);
};

displayFullName("Victor", "Hugo");
```

Résultat affiché dans le terminal

```
Victor Hugo
```

## Déclarer une fonction qui reçoit un ou plusieurs paramètres.

```
const displayCity = (city) => {
  console.log(city);
};

const displayCityAndCountry = (city, country) => {
  console.log(city);
  console.log(country);
};

displayCity("Paris");
displayCityAndCountry("Tokyo", "Japon");
```

Résultat affiché dans le terminal

```
Paris
Tokyo
Japon
```
