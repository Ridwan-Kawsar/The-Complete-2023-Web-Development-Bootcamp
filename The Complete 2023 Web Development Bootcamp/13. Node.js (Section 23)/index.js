const superheroes = require('superheroes');
const supervillains = require('supervillains');

//SuperHeroes
var superheroLibrary = superheroes.all;
console.log(superheroLibrary);

var mySuperheroName = superheroes.random();
console.log(mySuperheroName);

//SuperVillains
var supervillainLibrary = supervillains.all;
console.log(supervillainLibrary);

var mySupervillainName = supervillains.random();
console.log(mySupervillainName);