const name = "shubham"
const repocount = 50
console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String ('call-of-duty')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("g"));

const newString = gameName.substring(1,5)
console.log(newString);

const anotherstring = gameName.slice(-8,8)
console.log(anotherstring)

const url =("https//shubham.com/shubham%022chauhan")
console.log(url.replace('%02', '-'));
console.log(url.includes("abhi"));
console.log(gameName.split("-"));



