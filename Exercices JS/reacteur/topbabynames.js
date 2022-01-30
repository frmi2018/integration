const axios = require('axios');
// import de la fonction sortBy
const sortBy = require('lodash/sortBy');

axios
  .get(
    'https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&rows=10000&sort=nombre&refine.annee=2018'
  )
  .then((response) => {
    // array with all first names (already sorted in descending order of the number of first names)
    const tab = response.data.records;

    // array with only the 10 most given first names
    const slicedTab = tab.slice(0, 10);

    // array sorted in alphabetical order of first names
    const sortedTab = sortBy(slicedTab, [
      function (element) {
        return element.fields.prenoms;
      },
    ]);

    // loop on sortedTab to display each first name and its quantity
    for (let i = 0; i < sortedTab.length; i++) {
      console.log(
        `${sortedTab[i].fields.prenoms} (${sortedTab[i].fields.nombre})`
      );
    }
  });
