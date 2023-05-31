// 162. Adding Event Listeners to a Button

EventTarget.addEventListener() // Sets up a function that can be called whenever the specified event is delivered to the target. Targets being Elements/Documents/Window/Objects.

Syntax:
target.addEventListener(type, listener[, options/useCapture]);

Examples:
function javaScriptFunction () {
    //Do Something
}

document.querySelector("button").addEventListener("click", javaScriptFunction) 
// First input "click", specifies what event the EventListener should be listening too, in this case a click.
// Second input "javaScriptFunction", specifies what it should do once that event gets detected, in this case a function.

Anonymous-Functions:
// Typically in JS, developers call functions without a name (anonymous)
// Lines 9-13 will be written like this..

document.querySelector("button").addEventListener("click", function() {
    //What to do when click detected
});



// 163. Higher Order Functions and Passing Functions as Arguments

Example:

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(4, 5, multiply) 
// Calling the calculator function, which passes the multiply function as the argument (operator)

// Opening up the debugger tool
debugger; // Hold shift + press Enter, call the function that you want to debug and press enter
// A debugger window will pop up in chrome developer tools beginning with VM
// Click on a downward arrow icon (Step into next function call)



// 165. How to Play Sounds on a Website

Syntax:
mySound = new Audio("[URLString]"); // new Audio() - creates an <audio> element [URLString] = filePath/audioFile.extension
audio.play();

this:
this //console.log(this) shows us the identity of what is clicked provided there are event listeners attached.
this.style.color = "white"; //Can be used to change the styling of a text after clicking on it.



// 166. A Deeper Understanding of Javascript Objects

// Creating a Javascript Object

// Example:
var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", English]
}

// You can tap into the object by calling the var and adding the dot notation followed by the properties.
alert("Hello, my name is " + bellBoy1.name + " and I am " + bellBoy1.age + " years old.")


// Constructor Function

// Example:
function BellBoy (name, age, hasWorkPermit, languages) { // Note: Constructor functions are different to normal functions, as such the function name needs to be capitalised.
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// Initialise Object

// Example
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var bellBoy2 = new BellBoy("Jimmy", 21, false, ["English", "German"]);
// Using a constructor function, and adding new objects by initialisation saves us time from having to keep adding new objects shown in lines 70-75.



// 167. How to Use Switch Statements in Javascript

// Skeleton Syntax of a Switch Statement:
switch (key) {
    case value1:
        //Action
        break;

    case value2:
        //Action
        break;

    case value3:
        //Action
        break;

    default: // default case is like the else statement at the end of an IF statement, it covers all other unspecified scenarios
        break;
}



// 168. Objects, their Methods and the Dot Notation

// Methods Example
function moveSuitcase() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
}

var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", English],
    moveSuitcase: function() {                  
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
    // Adding an associated function to our bellBoy1 object by: 
    // Adding the function name (moveSuitcase) as a parameter followed by a colon.
    // Then adding in an anonymous function (function()) 
    // Followed by whatever is in the curly {} braces.
}

// Calling Method
bellBoy1.moveSuitcase(); 

// Using Properties
bellBoy1.name;
// Note: When calling the method or using the properties, dot notation is used. 

// Adding the function to our Constructor Function:
function BellBoy (name, age, hasWorkPermit, languages) { // Note: Constructor functions are different to normal functions, as such the function name needs to be capitalised.
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase =  function() {                  
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}


// Simlarities in the Housekeeper function and the Audio function from the previous lessons:

// House Keeper Initialising Objects & calling methods
var houseKeeper1 = new HouseKeeper("Anna", 27, 7, ["Laundry", "Hoovering", "Pet Minding"])
houseKeeper1.clean();

// House Keeper Constructor Function
function HouseKeeper (name, age, yearsOfExperience, houseKeepingSkills) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.houseKeepingSkills = houseKeepingSkills;
    this.clean = function() {
        alert("Cleaning in progress!");
    }
}

// Drum Kit Audio - Initialising Objects & calling methods
var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();

// Suppose the Audio Constructor Function looked like this..
function Audio (fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        //Tap into audio hardware
        //Check the file at fileLocation exists
        //Check the file at fileLocation is a sound file
        //Play the file at fileLocation
    }
}



// 170. Using Keyboard Event Listeners to Check for Key Presses

Keyboard Events:
keydown //Fired when ANY key is pressed

Syntax: 
document.addEventListener("keydown", function() {
    alert("Key was pressed!"); //Alerts the user when a key is pressed
});

document.addEventListener("keydown", function(event) {
    console.log(event); //Console logs the key that was pressed
});



// 171. Understanding Callbacks and How to Respond to Events

document.addEventListener("keydown", respondToKey(event));

function respondToKey(event) {
    console.log("Key pressed.")
}

// Higher Order Function - Functions that are able to take inputs as functions. 
// addEventListener takes respondToKey function as an input, so its a higher order function.

// Callback Function - Functions that get passed in as an input.
// respondToKey is a callback function because it's waiting for something to finish happening 
// and then the callback function gets called back and then gets executed.

function addEventListener(typeOfEvent, callback) { //Created a function that specifies the typeOfEvent and callback as inputs.

    //Detect Event Code...

    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    //Creates an object which captures the events that happened when the p key is pressed.

    if (eventThatHappened.eventType === typeOfEvent) { 
        //if this if statement is fulfilled, then you can callback the eventThatHappened.
        callback(eventThatHappened);
    }

}

document.addEventListener("keypress", function (event) {
    console.log(event)
    //Console logging the event that triggered the callback
    //Event objected thats logged: (eventType: "keypress", key: "p", durationOfKeyPress: 2)
});



// 172. Adding Animation to Websites

Syntax:
setTimeout(function, milliseconds, param1, param2, ...)