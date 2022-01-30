const timeConvert = (num) => {
  let hours = Math.floor(num / 60 / 60);
  let minutes = Math.floor(num / 60) - hours * 60;
  let seconds = num - (Math.floor(minutes * 60) + Math.floor(hours * 60 * 60));

  if (hours.toString().length === 1) {
    hours = '0' + hours;
  }
  if (minutes.toString().length === 1) {
    minutes = '0' + minutes;
  }
  if (seconds.toString().length === 1) {
    seconds = '0' + seconds;
  }

  return hours + ':' + minutes + ':' + seconds;
};

console.log(timeConvert(7540));
