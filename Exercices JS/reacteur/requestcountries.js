const axios = require('axios');

const onResponse = (response) => {
  let result = '';

  for (let i = 0; i < response.data.length; i++) {
    let name;

    if (response.data[i].translations.fr !== null) {
      name = response.data[i].translations.fr;
    } else {
      name = response.data[i].name;
    }

    if (i === response.data.length - 2) {
      result = result + name + ' et ';
    } else if (i === response.data.length - 1) {
      result = result + name + '.';
    } else {
      result = result + name + ', ';
    }
  }

  console.log(result);
};

axios.get('https://restcountries.eu/rest/v1/all').then(onResponse);
