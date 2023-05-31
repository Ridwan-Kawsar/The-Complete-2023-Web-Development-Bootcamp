// Coding Challenge 1 (104)

// PROBLEM: Use the alert function to see the data assigned to the variable "myName"
var myName = "Ridwan";

// SOLUTION:
alert(myName);



// Coding Exercise 2: Javascript Variables Exercise (105/106)

// PROBLEM: Given the existing code below, can you write some code so that their values are switched around?
var a = "3";
var b = "8";

// So that the variable a holds the value "8". And the variable b holds the value "3".
// When the code is run, it should output: a is 8, b is 3

// 1. Do NOT change any of the existing code.
// 2. You are NOT allowed to type any numbers.
// 3. You should NOT redeclare the variables a and b.

// SOLUTION:
var c = a;
a = b;
b = c;



// Mini Challenge (108)

// PROBLEM: Create a Greeting Alert message using the following variables
var message = "Hello";
var name = "Ridwan";

// SOLUTION:
alert(message + " there," + " " + name)



// Mini Challenge (109)

// PROBLEM: 
// Create a prompt to allow user to create a tweet
// Create an alert 
//     1. Informing them how many characters are written 
//     2. How many characters are left out of 140 characters.

// SOLUTION:
var message = prompt("Compose your tweet:");

charCount = message.length;
charRemaining = 140 - charCount;
alert("You have written " + charCount + " characters, you have " + charRemaining + " characters left.")



// Mini Challenge (110)

// PROBLEM: Add an alert to notify the user that the tweet is cut down to 140 characters

// SOLUTION:
var message = prompt("Compose your tweet:");
var message140Char = message.slice(0, 140);
alert(message140Char);



// Mini Challenge (111/112)

// PROBLEM: Create a prompt to ask the user for their name and return an alert with a message with the first letter of their name capitalised.

// SOLUTION:
var name = prompt("What is your name?");
var firstLetter = name.slice(0,1);
var firstLetterCap = firstLetter.toUpperCase();
var restOfName = name.slice(1, name.length);
alert("Hello, " + firstLetterCap + restOfName);

// BONUS PROBLEM: Return an alert with a message with the first character of their name capitalised and the rest in lower case.

// SOLUTION:
var name = prompt("What is your name?");
var firstLetter = name.slice(0,1);
var firstLetterCap = firstLetter.toUpperCase();
var restOfName = name.slice(1, name.length);
var restOfNameLowerCase = restOfName.toLowerCase();
alert("Hello, " + firstLetterCap + restOfNameLowerCase);



// Mini Challenge (113)

// PROBLEM: Ask the user for the age of their dog, return the dog age in human age as an alert.
// Dog Age to Human Age Formula:   humanAge = (dogAge - 2) * 4 + 21

// SOLUTION:
var dogAge = prompt("How old is your dog?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your Dog in Human age is " + humanAge + " years old!");



// Functions Part 1 Challenge - The Karel Robot (116/117) //http://stanford.edu/~cpiech/karel/ide.html

// PROBLEM 1: Move Karel across 5x5 (starting bottom left - ending top right)

// SOLUTION 1:
function main() {
  diagMove ();
  diagMove ();
  diagMove ();
  diagMove ();
}

function diagMove () {
  move();
  turnLeft();
  move();
  turnRight();
}

// PROBLEM 2: Move Karel across 5x5 (starting bottom left - ending top right) and place a beeper diagonally.

// SOLUTION 2:
function main(){
  diagMoveBeeper ();
  diagMoveBeeper ();
  diagMoveBeeper ();
  diagMoveBeeper ();
  putBeeper();
}

function diagMoveBeeper () {
  putBeeper();
  move();
  turnLeft();
  move();
  turnRight();
}

// PROBLEM 3: Move Karel to create a chess board pattern.

// SOLUTION 3:
function main(){
  moveRightBeeper ();
  moveLeftBeeper ();
  moveRightBeeper ();
  moveLeftBeeper ();
  moveRightBeeper ();
}

function moveRightBeeper () {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function moveLeftBeeper () {
  turnLeft();
  move();
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}



// Functions Part 2: Parameters and Arguments (119)

// PROBLEM: Make a money input and use it to calculate how many bottles of milk you can buy with $5.

// SOLUTION:
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = Math.floor(money / 1.5); 
  console.log("You can buy " + numberOfBottles + " bottles of milk with $" + money);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);



// Coding Exercise 3: Life in Weeks Coding Exercise (120)

// PROBLEM:
// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in this format:
// You have x days, y weeks, and z months left. Where x, y and z are replaced with the actual calculated numbers.
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

// SOLUTION:
function lifeInWeeks(age) {
  var timeLeft = 90 - age;
  var x = timeLeft * 365;
  var y = timeLeft * 52;
  var z = timeLeft * 12;
  console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left." )
}

lifeInWeeks(56);



// Functions Part 3: Outputs & Return Values (121)

// SOLUTION (NO PROBLEM)
function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("You can buy " + calcBottles(money, costPerBottle) + " bottles of milk with $" + money);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money, costPerBottle); //return statements are the outputs of a function!
}

function calcBottles (startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle); 
    return numberOfBottles;
}

function calcChange (startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle; 
    return change;
}

console.log("Hello master, here is your change of $" + getMilk(5, 1.5));



// Coding Exercise 4: BMI Calculator Challenge (122/123)

// PROBLEM:
// Create a BMI calculator using JavaScript functions. 

// The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
// You can calculate it using the BMI formula where weight is divided by height squared.

// Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
// The first parameter should be the weight and the second should be the height.

// NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.

// SOLUTION: 
function bmiCalculator(weight, height) {
    
  var bmiCalc = weight/(height*height);
  var bmiIndexRounded = Math.round(bmiCalc);

  return bmiIndexRounded;
}

var bmiCalc =  bmiCalculator(65, 1.7)
console.log(bmiCalc)