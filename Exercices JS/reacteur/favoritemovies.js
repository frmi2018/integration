const axios = require('axios');

const movies = ['interstellar', '2001', 'star wars', 'star trek', 'mad max'];

for (let i = 0; i < movies.length; i++) {
  axios
    .get(`http://www.omdbapi.com/?t=${movies[i]}&apikey=c7678f53`)
    .then((response) => {
      console.log(`Name : ${response.data.Title}`);
      console.log(`Year : ${response.data.Year}`);
      console.log(`Genre : ${response.data.Genre}`);
      console.log(`Actors : ${response.data.Actors}`);
      console.log(`----------`);
    });
}
