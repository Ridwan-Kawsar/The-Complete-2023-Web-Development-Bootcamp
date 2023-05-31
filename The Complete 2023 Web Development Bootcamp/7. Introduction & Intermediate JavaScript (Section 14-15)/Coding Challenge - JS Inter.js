// Random Number Generation in Javascript: Building a Love Calculator (125)

// PROBLEM:
// Create two prompts that asks for the user's name and their crush and then have an alert return them with a love score.

// SOLUTION:
prompt("What is your name?");
prompt("What is your lover's name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your Love score is " + loveScore + "%")



// Control Statements: Using If-Else Conditionals & Logic (126)

// PROBLEM:
// Add a conditional to the Lovescore calculator.

//SOLUTION:
prompt("What is your name?");
prompt("What is your lover's name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your Love score is " + loveScore + "% which indicates your love is strong!");
} else {
  alert("Your Love score is " + loveScore + "%");
}



// Combining Comparators (128)

// PROBLEM: 
// Add a comparator to the Lovescore calculator.

// SOLUTION:
prompt("What is your name?");
prompt("What is your lover's name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your Love score is " + loveScore + "% which indicates your love is strong!");
}
if (loveScore >= 30 && loveScore <= 70) {
  alert("Your Love score is " + loveScore + "% which indicates your love is normal");
}
if (loveScore < 30) {
  alert("Your Love score is " + loveScore + "% which means you go together like oil and water");
}



// Coding Exercise 5: BMI Calculator Advanced (IF/ELSE) (126-128)

// PROBLEM: 
// Write a function that outputs(returns) a different message depending on the BMI.

// BMI < 18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
// BMI 18.5 - 24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
// BMI > 24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// The message MUST be returned as an output from your function. 
// You should NOT NEED to use alert, prompt or console.log in this challenge.

// SOLUTION:
function bmiCalculator (weight, height) {
    
  var bmi = Number((weight / Math.pow(height, 2)).toFixed(1)); //Rounds answer to 1 decimal place

  if (bmi < 18.5) {
      interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi <= 24.9) {
      interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
      interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}

bmiCalculator(101, 1.9);



// Coding Exercise 6: Leap Year Challenge Exercise (129)

// PROBLEM:
// Write a program that works out whether if a given year is a leap year. 
// A normal year has 365 days, leap years have 366, with an extra day in February. 
// The reason why we have leap years is really fascinating, this video goes into more detail.
// https://www.youtube.com/watch?v=xX96xng7sAE

// This is how to work out whether if a particular year is a leap year:
// A year is a leap year if it is evenly divisible by 4 ;
// except if that year is also evenly divisible by 100;
// unless that year is also evenly divisible by 400.
// Known Leap Years Website; https://www.mathsisfun.com/leap-years.html

// e.g. Is the year 2000 a leap year?:
// 2000 ÷ 4 = 500 (Leap)
// 2000 ÷ 100 = 20 (Not Leap)
// 2000 ÷ 400 = 5 (Leap!)
// So the year 2000 is a leap year.

// But the year 2100 is not a leap year because:
// 2100 ÷ 4 = 525 (Leap)
// 2100 ÷ 100 = 21 (Not Leap)
// 2100 ÷ 400 = 5.25 (Not Leap)

// SOLUTION: 
function isLeap(year) {

  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("Leap year.");
} else {
    console.log("Not leap year.");
}

}

isLeap(1948);


// ANGELAS SOLUTION:
function isLeap(year) {
        
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              console.log("Leap year.")
          } else {
              console.log("Not leap year.");
          }
      } else {
          console.log("Leap year.");
      }
  } else {
      console.log("Not leap year.");
  }

}

isLeap(1950);



// Collections: Working with Javascript Arrays (131)

// PROBLEM: 
// Ask a guest for their name via a prompt and check it against a guest list contained in an array, 
// have different alerts show up based on whether or not the name is found in the array.

// SOLUTION:
var guestName = prompt("What is your name?");

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

if (guestList.includes(guestName)) {
    alert("Welcome");
} else {
    alert("Sorry you're not on the guest list, maybe next time.");
}



// OPTIONAL (FIZZ BUZZ AS A FUNCTION)
function fizzBuzz(number) {

  if (number % 3 === 0 && number % 5 === 0) {
      console.log("FIZZBUZZ");
  } else if (number % 3 === 0) {
      console.log("FIZZ"); 
  } else if (number % 5 === 0) {
      console.log("BUZZ");
  } else {
      console.log(number);
  }
  
}

fizzBuzz(105);



// Adding Elements and Intermediate Array Techniques (132)

// PROBLEM: 
// Create a function that adds the next number in the sequence into an array when the function is called.

// SOLUTION:
var output = [];
var x=1;

function fizzBuzz() {

    output.push(x)
    x++;
    console.log(output);

}

fizzBuzz();


// PROBLEM: 
// Create a fizz buzz function; When calling the function, push the number into the array
// IF the number is divisible by 3, push "Fizz".
// IF the number is divisible by 5, push "Buzz".
// IF the number is divisible by 3 and 5, push "FizzBuzz".
// IF the number is neither divisible by 3 or 5, push the number.

// SOLUTION:
var output = [];
var x=1;

function fizzBuzz() {

    if (x % 3 === 0 && x % 5 === 0) {
      output.push("FizzBuzz");
    } else if (x % 3 === 0) {
        output.push("Fizz");
    } else if (x % 5 === 0) {
        output.push("Buzz") ;
    } else {
        output.push(x);
    }

    x++;
    console.log(output);
}

fizzBuzz();



// Coding Exercise 7: Who's Buying Lunch? Code Challenge (132-133)

// PROBLEM: 
// You are going to write a function which will select a random name from a list of names. 
// The person selected will have to pay for everybody's food bill.
// Important: The output should be returned from the function (NO alert, prompt or console.log needed)

// Example Input
["Angela", "Ben", "Jenny", "Michael", "Chloe"]

// Example Output
Michael is going to buy lunch today!

// SOLUTION:
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
    randomizer = Math.floor(Math.random() * names.length);
    selectedName = names[randomizer];
    return selectedName + " is going to buy lunch today!";
}

whosPaying(names);



// 99 Bottles Challenge (134-135)

// PROBLEM: 
// Create a function and call it inside the console to have it return the 99 Bottles of Beer lyrics.

// SOLUTION:
var numberOfBottles = 99;
function beer(numberOfBottles) {

    while (numberOfBottles > 2) {
        console.log(numberOfBottles + " bottles of beer on the wall, " 
            + numberOfBottles + " bottles of beer. Take one down and pass it around, " + (numberOfBottles-1) + " bottles of beer on the wall.");
        numberOfBottles--;
    }
    while (numberOfBottles > 1) {
        console.log(numberOfBottles + " bottles of beer on the wall, " 
            + numberOfBottles + " bottles of beer. Take one down and pass it around, " + (numberOfBottles-1) + " bottle of beer on the wall.");
        numberOfBottles--;
    }
    while (numberOfBottles > 0) {
        console.log(numberOfBottles + " bottle of beer on the wall, " 
            + numberOfBottles + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        numberOfBottles--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

// ALTERNATIVE SOLUTION:
var numberOfBottles = 99;
function beer(numberOfBottles) {

    while (numberOfBottles > 1) {
        
        var bottleWord = "bottles"; 
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord
                    + " of beer. Take one down and pass it around, " + (numberOfBottles-1) + " " + bottleWord + " of beer on the wall.");
        numberOfBottles--;

        if (numberOfBottles === 2) {
            var singularBottleWord = "bottle";
            console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord 
                        + " of beer. Take one down and pass it around, " + (numberOfBottles-1) + " " + singularBottleWord + " of beer on the wall.");
            numberOfBottles--;
        }
        
        if (numberOfBottles === 1) {
            var noBottle = "no more bottles";
            console.log(numberOfBottles + " " + singularBottleWord + " of beer on the wall, " + numberOfBottles + " " + singularBottleWord 
                        + " of beer. Take one down and pass it around, " + noBottle + " of beer on the wall.");
            numberOfBottles--;
        }
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

beer(numberOfBottles);



// Coding Exercise 8: The Fibonacci Exercise (137-138)

// PROBLEM: 
// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// Where every number is the sum of the two previous ones.

// e.g. 0, 1, 1, 2, 3, 5 comes from;
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5

// Create a function where you can call it by writing the code: fibonacciGenerator (n)
// Where n is the number of items in the sequence.
// i.e. fibonacciGenerator(3) returns [0,1,1] as the output.

// The result should be returned from the function as an output.
// The first two numbers in the sequence must be 0 and 1.

// MY SOLUTION: 
function fibonacciGenerator(n) {

    var output = [];

    if (n === 1) {
        output = [0];
    }
        
    else if (n === 2) {
        output = [0, 1];
    }
        
    else {
        output = [0, 1];
        
        for (var i=2; i<n; i++) {
        num1 = output[output.length-1];
        num2 = output[output.length-2];
        output.push(num1 + num2);
        }
    }

    return output;
        
}

fibonacciGenerator(15);
