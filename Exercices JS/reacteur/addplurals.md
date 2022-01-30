# addPlurals

Returns an array with same elements but in plural.

Conditions :  
CHEVAL => CHEVAUX  
SPORT => SPORTS

```
INPUT : ["cheval", "sport", "animal", "formateur", "journal"];
OUPUT : ["chevaux", "sports", "animaux", "formateurs", "journaux"];
```

N.B.: Doesn't work with all words.

```
const words = ["cheval", "sport", "animal", "formateur", "journal"];

console.log(addPlurals(words));
```

## Help

You can use JavaScript slice() function with negative numbers :  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
