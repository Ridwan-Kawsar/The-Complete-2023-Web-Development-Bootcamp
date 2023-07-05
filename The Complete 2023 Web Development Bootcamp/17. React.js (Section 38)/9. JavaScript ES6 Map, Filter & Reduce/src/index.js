import emojipedia from "./emojipedia";

// Numbers Variable
var numbers = [3, 56, 2, 48, 5];

// ForEach vs Map
var doubleNum = [];

numbers.forEach(function (x) {
  doubleNum.push(x * 2);
});

console.log("doubleNum: " + doubleNum); //Output: [6, 112, 4, 96, 10]

//Map - Create a new array by doing something with each item in an array.
const mapDoubleNumbers = numbers.map(function (y) {
  return y * 2;
});

console.log("mapDoubleNumbers: " + mapDoubleNumbers); //Output: [6, 112, 4, 96, 10]

// ForEach vs Filter
var lessThanTen = [];

numbers.forEach(function (num) {
  if (num < 10) {
    lessThanTen.push(num);
  }
});

console.log("lessThanTen: " + lessThanTen); //Output: [3, 2, 5]

//Filter - Create a new array by keeping the items that return true.
const filteredNum = numbers.filter(function (num) {
  return num < 10;
});

console.log("filteredNum: " + filteredNum); //Output: [3, 2, 5]

// ForEach vs Reduce
var numTotal = 0;

numbers.forEach(function (currentNum) {
  numTotal += currentNum;
});

console.log("numTotal: " + numTotal); //Output: 114

//Reduce - Accumulate a value by doing something to each item in an array.
var reduceTotalNum = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

console.log("reduceTotalNum: " + reduceTotalNum); //Output: 114

//Find - find the first item that matches from an array.
const findNumber = numbers.find(function (num) {
  return num > 10;
});

console.log("findNumber: " + findNumber); //Output: 56

//FindIndex - find the index of the first item that matches.
const findIndexNum = numbers.findIndex(function (num) {
  return num > 10;
});

console.log("findIndexNum: " + findIndexNum); //Output: 1

// Challenge
// Using the emojipedia objects array, extract the emoji meaning
// Add a character limit to the meaning to 100 characters

var emojiMeaning = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(emojiMeaning);
