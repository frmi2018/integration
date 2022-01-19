const APIKEY = 'dc8c9152e8adaad0ec8bf635818c0d42';
let resultatAPI;
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
  console.log(longitude, latitude);
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&lang=fr&appid=${APIKEY}`
  )
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      console.log(data);
    });
}
