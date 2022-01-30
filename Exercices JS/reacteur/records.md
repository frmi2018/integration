# Records

Un basketteur lycéen souhaitant passer pro décide de comptabiliser le nombre de fois où il bat ses records de maximum et minimum de points marqués dans un match.
Pour cela, il prend comme base le nombre de points qu'il a marqué lors du premier match de l'année.

Sachant que le nombre de point marqué à chaque match est reporté dans un tableau, créez une fonction breakingRecords, qui prendra en paramètre le tableau de score et qui retournera le nombre de fois où le joueur a battu ses records dans l'année.

Illustration :

let scores = [13, 14, 9, 17, 33, 11];

| Match         | Match 1 | Match 2 | Match 3 | Match 4 | Match 5 | Match 6 |
| :------------ | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| Score         |   13    |   14    |    9    |   17    |   33    |   11    |
| Highest Score |   13    |   14    |   14    |   17    |   33    |   33    |
| Lowest Score  |   13    |   13    |    9    |    9    |    9    |    9    |

Dans l'exemple ci-dessus, le joueur a battu 3x son record du plus grand nombre de points marqués, et 1x son record du plus petit nombre de points marqués... Ainsi :

```
console.log(breakingRecords([13, 14, 9, 17, 33, 11])); // devra afficher [3, 1]
```

A vous de jouer !

```
console.log(breakingRecords([4, 7, 21, 36, 12, 28, 35, 4, 24, 42])); // devra afficher [4, 0]
```
