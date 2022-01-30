# getDomainName

Returns domain name of url.

https://www.lereacteur.io --> "lereacteur"  
https://www.twitch.tv/stevenpersia --> "twitch"  
http://www.oldwebsite.org/ --> "oldwebsite"  
"www.google.com" -> "google"

## Bonus

If there is no url passed, then return "Please return an URL.".

## Help

https://www.w3schools.com/jsref/jsref_includes.asp

```
console.log(getDomainName("https://www.lereacteur.io"));
console.log(getDomainName("https://www.twitch.tv/stevenpersia"));
console.log(getDomainName("http://www.oldwebsite.org/"));
console.log(getDomainName("www.google.com"));
console.log(getDomainName());
```
