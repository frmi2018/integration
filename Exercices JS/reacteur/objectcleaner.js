const cleanObject = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const hero = arr[i];
    const newHero = {};
    const heroKeys = Object.keys(hero);
    const heroValues = Object.values(hero);

    for (let j = 0; j < heroKeys.length; j++) {
      const heroKey = heroKeys[j];
      const heroValue = heroValues[j];

      if (typeof heroValue === 'string') {
        const trimmed = heroValue.trim();
        const firstLetter = trimmed.charAt(0).toUpperCase();
        newHero[heroKey] = firstLetter + trimmed.slice(1);
      }

      if (heroKey === 'height') {
        newHero[heroKey] = Number(heroValue);
      }

      if (typeof heroValue === 'boolean') {
        newHero[heroKey] = !heroValue;
      }
    }

    newArr.push(newHero);
  }

  return newArr;
};

const heroes = [
  {
    alias: '   deadpool  ',
    firstname: '    Wade',
    lastname: 'wilson  ',
    height: '188',
    country: undefined,
    isActive: true,
  },
  {
    alias: ' wolverine ',
    firstname: 'james   ',
    lastname: 'howlett',
    height: '      160',
    country: 'canada',
    isActive: false,
  },
];

console.log(cleanObject(heroes));
