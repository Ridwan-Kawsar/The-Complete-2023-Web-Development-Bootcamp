// SILLYNAMES
// var generateName = require("sillyname");
import generateName from "sillyName";  
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

// SUPERHEROES
import superheroes from "superheroes";
var mySuperHeroName = superheroes.random();
console.log(`I am ${mySuperHeroName}!`);