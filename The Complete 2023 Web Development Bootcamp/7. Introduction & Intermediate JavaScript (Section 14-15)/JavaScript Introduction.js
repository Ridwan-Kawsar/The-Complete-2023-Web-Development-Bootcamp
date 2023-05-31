//102 Javascript Alerts - Adding Behaviour to Websites
alert(); //Displays an alert function as a pop-up on the browser. 



//103. Data Types
typeof(); //Returns the data type of the input.



//104. Javascript Variables
prompt(""); //Prompts the user to input some data
var myName = "Ridwan"; //var-Keyword, myName-Name, "Ridwan"-Value



//107. Naming and Naming Conventions for Javascript Variables
// Variable Names - Naming Convention
// Cannot be keywords i.e. var, but can include keywords i.e. myVar
// Cannot be numbers i.e 123, but can include numbers i.e. my123
// Cannot contain spaces i.e. my name
// Can only contain the following characters: a-z, 0-9, $ and _. 
// Needs to be in Camel Casing; i.e myName



//109. String Lengths and Retrieving the Number of Characters
var name = "Ridwan";
.length - counts the characters assigned to a variable e.g. name.length = "6"



//110. Slicing and Extracting Parts of a String
var name = "Ridwan";
.slice(x,y) - slices the data and extracts from position x to y (but not including y)
i.e. name.slice(0,1) - Outputs "R", name.slice(5,6) - Outputs "n", name.slice(2,5) - Outputs "dwa"
NOTE: the first character is the 0th position.



//111. Challenge: Changing Casing in Text
.toUpperCase() //converts characters into upper case.
.toLowerCase() //converts characters into lower case.



//113. Basic Arithmetic and the Modulo Operator in Javascript
var e = 9 % 6; //Modulus(%), Answer is 3 since it is the remainder when 9 is divided by 6.  



//114. Increment and Decrement Expressions
var x = 5;
var y = 3;

// Increment: 
x = x++ = x + 1; 
x += 2 = x + 2;
x += y;

// Decrement: 
x = x-- = x - 1;
x -= 2 = x - 2;
x -= y;
//Works the same with * (multiply) and / (divide)



//115. Functions Part 1: Creating and Calling Functions

Creating the function:      function functionName () {}

Calling the function:       functionName(); //Calls a function named functionName



//119. Functions Part 2: Parameters and Arguments

Creating the function:      function functionName (inputs) {}

Calling the function:       functionName(inputs); //Calls a function named functionName with an input named inputs



//121. Functions Part 3: Outputs & Return Values

Creating the function:      

function functionName (inputs) {
  return inputs; // returns an output
}

Calling the function:       
var outputs = functionName (inputs) // The return output (line 90) becomes equal to the RHS (functionName (inputs))
