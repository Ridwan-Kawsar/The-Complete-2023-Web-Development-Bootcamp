// 162. Adding Event Listeners to a Button

// PROBLEM: 
// Add an Event Listener to every single button (Drum Kit Starting Files)

// SOLUTION:
var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        alert("I got clicked");

    });

}



// 163. Higher Order Functions and Passing Functions as Arguments

// PROBLEM: 
// Add a Subtract and Divide function to your already existing Calculator Function.

// SOLUTION:
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(4, 5, divide)



// 165. How to Play Sounds on a Website

// PROBLEM: 
// Replace the alert when clicking on the drum with the audio sound (tom-1.mp3)

// SOLUTION:
var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var audio = new Audio("/sounds/tom-1.mp3");
        audio.play();

    });

}


// PROBLEM: 
// Assign a background image to all the drum buttons

// SOLUTION:
// On CSS
.w {
    background-image: url("/images/tom1.png");
}


// PROBLEM: 
// Change the text colour of the button that got clicked to white.

// SOLUTION:
var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
        this.style.color = "white";

    });

}



// 166. A Deeper Understanding of Javascript Objects

// PROBLEM: 
// Create a Javascript object for a house keeper

// SOLUTION: 
var houseKeeper1 = {
    name: "Anna",
    age: 27,
    yearsOfExperience: 7,
    houseKeepingSkills: ["Laundry", "Hoovering", "Pet Minding"]
}

alert("Hello my name is " + houseKeeper1.name + " and I am " + houseKeeper1.age + " years old. My preferred cleaning tasks are " + houseKeeper1.houseKeepingSkills)


// PROBLEM:
// Create a Constructor Function for any House-Keeper object and then to create the object (above) houseKeeper1 using the cosntructor function (Initialising objects)

// SOLUTION:
function HouseKeeper (name, age, yearsOfExperience, houseKeepingSkills) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.houseKeepingSkills = houseKeepingSkills;
}

var houseKeeper1 = new HouseKeeper("Anna", 27, 7, ["Laundry", "Hoovering", "Pet Minding"])
var houseKeeper2 = new HouseKeeper("Beverely", 24, 5, ["Cooking", "Laundry", "Child Minding"])
var houseKeeper3 = new HouseKeeper("Chloe", 30, 9, ["Hoovering", "Cleaning", "Pet Minding"])



// 168. Objects, their Methods and the Dot Notation

// PROBLEM:
// Add a method called 'clean' (with an alert inside it saying "Cleaning is in progress") to the House Keeper constructor function.
// Create a New HouseKeeper from the constructor function
// Then finally, call the cleaning method associated with that new object.

// SOLUTION:

//Adding the method to the constructor function
function HouseKeeper (name, age, yearsOfExperience, houseKeepingSkills) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.houseKeepingSkills = houseKeepingSkills;
    this.clean = function() {
        alert("Cleaning in progress!");
    }
}

var houseKeeper1 = new HouseKeeper("Anna", 27, 7, ["Laundry", "Hoovering", "Pet Minding"])
var houseKeeper2 = new HouseKeeper("Beverely", 24, 5, ["Cooking", "Laundry", "Child Minding"])
var houseKeeper3 = new HouseKeeper("Chloe", 30, 9, ["Hoovering", "Cleaning", "Pet Minding"])

//Creating a new HouseKeeper
var houseKeeper4 = new HouseKeeper("Sandy", 21, 1, ["Cleaning", "Pet Minding"]);

//Calling the clean method
houseKeeper4.clean(); //I get alerted saying "Cleaning is in progress"



// 170. Using Keyboard Event Listeners to Check for Key Presses

// PROBLEM:
// Create a function that takes a character and check it against the switch-case statement to play the correct sound.
// Then call it inside the event listener for the key press using key down.

// MY SOLUTION:
document.addEventListener("keydown", function (KeyboardEvent) {
    
    var keyBoardButton = KeyboardEvent.key;
    
    switch (keyBoardButton) {
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(event)
            break;
    }

});


// ANGELA'S SOLUTION:
//Detecting Button Press

var n = document.querySelectorAll(".drum").length; //Number of Drum Buttons (7)

for (var i = 0; i < n; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    
});

function makeSound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
    
}



// 172. Adding Animation to Websites

// PROBLEM:
// Add the .pressed class found in the css stylesheet to the activeButton.

// SOLUTION: 
function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);
    //currentkey: gives us "w", "a", "s".. we are after ".w", ".a", ".s" etc.

    activeButton.classList.add("pressed");
    //Adds the class "pressed"

}