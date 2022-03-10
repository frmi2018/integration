const video = document.querySelector(".video");
const btnPausePlay = document.getElementById("play-pause");
const img = document.querySelector("#play-pause img");
const barreOrange = document.querySelector(".barre-orange");
const juice = document.querySelector(".juice");
const btnMute = document.getElementById("mute");
const fullScreen = document.getElementById("fullscreen");
const volumeslider = document.getElementById("volume-slider");

btnPausePlay.addEventListener("click", togglePlayPause);
video.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (video.paused) {
    img.src = "ressources/pause.svg";
    video.play();
  } else {
    img.src = "ressources/play.svg";
    video.pause();
  }
}

// la barre orange

video.addEventListener("timeupdate", () => {
  let juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%";
  if (video.ended) {
    img.src = "ressources/play.svg";
  }
});

// volume

volumeslider.addEventListener("change", () => {
  video.volume = volumeslider.value / 100;
});

// mute

btnMute.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    btnMute.innerText = "Mute";
  } else {
    video.muted = true;
    btnMute.innerText = "Unmute";
  }
});

// lecture à l'endroit où l'on clique sur la barre orange

// espace entre bord droit de la fenêtre et video-container
let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener("click", (e) => {
  // position X du clic sur barre orange
  let x = e.clientX - rect.left;
  let widthPercent = (x * 100) / largeur;
  let durationVideo = video.duration;
  // position en seconde par rapport au pourcentage
  video.currentTime = durationVideo * (widthPercent / 100);
});

window.addEventListener("resize", () => {
  let rect = barreOrange.getBoundingClientRect();
  let largeur = rect.width;
});

video.addEventListener("dblclick", () => {
  video.requestFullscreen();
});

fullScreen.addEventListener("click", () => {
  video.requestFullscreen();
});
