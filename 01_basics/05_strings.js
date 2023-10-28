const name = "Sonali"
const repoCount = 20

console.log(name + repoCount + "Value");
//console.log('Hello my name is ${name} and my rep count is ${repoCount}');

let gameName = new String("Sonali-hc")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("o"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Sonali    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ilanos.com/sonali%20singh"
console.log(url.replace('%20', "-"));
console.log(url.includes("sonali"));
