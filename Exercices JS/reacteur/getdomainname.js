const getDomainName = (url) => {
  if (!url) return 'Please return an URL.';

  let mutatedUrl = url;

  if (mutatedUrl.includes('http://')) mutatedUrl = mutatedUrl.substring(7);
  if (mutatedUrl.includes('https://')) mutatedUrl = mutatedUrl.substring(8);
  if (mutatedUrl.includes('www.')) mutatedUrl = mutatedUrl.substring(4);

  mutatedUrl = mutatedUrl.split('.');

  return mutatedUrl[0];
};

console.log(getDomainName('https://www.lereacteur.io'));
console.log(getDomainName('https://www.twitch.tv/stevenpersia'));
console.log(getDomainName('http://www.oldwebsite.org/'));
console.log(getDomainName('www.google.com'));
console.log(getDomainName());
