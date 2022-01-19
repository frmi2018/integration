const APIKEY = 'dc8c9152e8adaad0ec8bf635818c0d42';
let resultatAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      //   console.log(position);
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      AppelAPI(longitude, latitude);
    },
    () => {
      alert(
        "Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer !"
      );
    }
  );
}

async function AppelAPI(longitude, latitude) {
  //   console.log(longitude, latitude);
  await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&lang=fr&appid=${APIKEY}`
  )
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      //   console.log(data);
      resultatAPI = data;

      temps.innerText = resultatAPI.current.weather[0].description;
      temperature.innerText = `${Math.trunc(resultatAPI.current.temp)}°`;
      localisation.innerText = resultatAPI.timezone;

      // Afficher les heures par tranche de trois avec leur temperature.

      let heureActuelle = new Date().getHours();

      for (let i = 0; i < heure.length; i++) {
        let heureIncr = heureActuelle + i * 3;
        if (heureIncr > 24) {
          heure[i].innerText = `${heureIncr - 24} h`;
        } else if (heureIncr === 24) {
          heure[i].innerText = '00 h';
        } else {
          heure[i].innerText = `${heureIncr} h`;
        }
      }

      for (let j = 0; j < tempPourH.length; j++) {
        tempPourH[j].innerText = `${Math.trunc(
          resultatAPI.hourly[j * 3].temp
        )}°`;
      }
    });
}
