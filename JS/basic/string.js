const name = "asmita";
const repoCount = 50;

// Using template literals enclosed with backticks
console.log(`Hello world ${name}`);
console.log(`${repoCount}`);

const gameName = new String("binda-ab")

// console.log(gameName);
// console.log(gameName[0]);//key value access 
// console.log(gameName.__proto__);//access prototype
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,-5)
console.log(anotherString);

const sliceString = gameName.slice(-4, 6)
console.log(sliceString);

const newString1 = "   asmita    "
console.log(newString1);
console.log(newString1.trim());//remove space 

const url = "https://local.com/local%20sites"
console.log(url.replace('%20', '-')); 
console.log(url.includes('ocean'));//find out given value is present or not 
console.log(url.includes('sites'));

console.log(gameName.split('-'));