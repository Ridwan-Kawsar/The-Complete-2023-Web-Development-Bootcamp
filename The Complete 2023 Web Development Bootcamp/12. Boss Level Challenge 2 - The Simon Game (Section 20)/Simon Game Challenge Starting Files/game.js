var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//Step 7.1
var started = false;

//Step 7.2
var level = 0;

function nextSequence() {

    //Step 2
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; //Outputs the colour from the buttonColours array
    gamePattern.push(randomChosenColour);

    //Step 3.1 & 3.2
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //Step 5.4
    playSound(randomChosenColour)

    //Step 7.4
    level++;

    //Step 7.5
    $("#level-title").text("Level " + level);

    //Step 8.6
    userClickedPattern = [];

}

//Step 4.1
//Note: jQuery Handlers are Anonymous Functions
$(".btn").on("click", function () {

    //Step 4.2 & 4.4
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    //Step 5.4
    playSound(userChosenColour);

    //Step 6.4
    animatePress(userChosenColour);

    //Step 8.2
    checkAnswer(userClickedPattern.length - 1);

})

//Step 5.2
function playSound(name) {

    //Step 5.3 & 5.4
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

//Step 6.1
function animatePress(currentColour) {

    //Step 6.3
    $("#" + currentColour).addClass("pressed");

    //Step 6.4
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}

//Step 7.1
$(document).keypress(function () {

    //Step 7.3
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

});

//Step 8.1
function checkAnswer(currentLevel) {

    //Step 8.3
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        //Step 8.4
        if (gamePattern.length === userClickedPattern.length) {

            //Step 8.5
            setTimeout(function () {
                nextSequence()
            }, 1000);

        }

    } else {

        console.log("wrong");

        //Step 9.1
        var wrong = new Audio("/sounds/wrong.mp3");
        wrong.play();

        //Step 9.2
        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        //Step 9.3
        $("#level-title").text("Game Over, Press Any Key to Restart");

        //Step 10.2
        startOver();
    }

}

//Step 10.1
function startOver() {

    //Step 10.3
    level = 0;
    gamePattern = [];
    started = false;

}

//Step 1 - Add Javascript and jQuery

//1. Create a new file called game.js
//2. Link to this new external JS file from your index.html
//3. Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.
//4. Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")
// If successful, you should get something like this printed: w.fn.init ....



//Step 2 - Create a New Pattern

//1. Inside game.js create a new function called nextSequence()
//2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
//4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
//5. At the top of the game.js file, create a new empty array called gamePattern.
//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

//Hint 1. Remember this is how you create and call functions in JavaScript:
//Creating a function: function getMilk() {     }
//Calling a function: getMilk();

//Hint 2A. Remember this is how you generate random numbers between 0 and 0.9999...
//var n = Math.random(); (0 - 0.9999999999999)

//Hint 2B. Remember this is how you round down a number.
//n = Math.floor(n);

//Hint 3. Remember this is how arrays are created in JavaScript:
//var example = [a, b, c, x, y, z]

//Hint 4. Remember this is how you select items inside arrays:
//var myExample = example[2]... outputs "c"

//Hint 5. Remember this is how you add new items to arrays:
//example.push(d); ....example = [a, b, c, x, y, z, d]



//Step 3 - Show the Sequence to the User with Animations and Sounds
//1. Use jQuery to select the button with the same id as the randomChosenColour
//2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

//Hint 1. Remember that to select ids with jQuery you need the "#" symbol.



//Step 4 - Check Which Button is Pressed
//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
//2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//--> So if the Green button was clicked, userChosenColour will equal its id which is "green".
//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
//4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.

//Hint 1A. Remember that all the buttons share the same class (btn).

//Hint 1B. Remember that jQuery has a .click() function: https://api.jquery.com/click/

//Hint 1C. jQuery handlers are anonymous functions: https://api.jquery.com/click/#click-handler

//Hint 2A. Inside the handler, you can use the keyword this to refer to the button object that triggered the click.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// Hint 2B. You can use the attr() function in jQuery to find out the value of any of the attributes of an object. 
//https://api.jquery.com/attr



//Step 5 - Add Sounds to Button Clicks
//1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.
//2. Create a new function called playSound() that takes a single input parameter called name.
//3. Take the code we used to play sound in the nextSequence() function and move it to playSound().
//4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.



//Step 6 - Add Animations to User Clicks
//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
//2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.
//3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

//Hint 3. https://api.jquery.com/addclass/



//Step 7 - Start the Game
//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
//2. Create a new variable called level and start at level 0.
//3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
//4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
//5. Inside nextSequence(), update the h1 with this change in the value of level.

//Hint 1. You'll need a variable called started to toggle to true once the game starts and if it's true, then further key presses should not trigger nextSequence().

//Hint 3. The h1 has a unique id of level-title which you can target with jQuery.

//Hint 5.  You'll need to use jQuery again to change the h1 by targeting the id: level-title.



//Step 8 - Check the User's Answer Against the Game Sequence
//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
//2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.
//3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.
//4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//5. Call nextSequence() after a 1000 millisecond delay.
//6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.



//Step 9 - Game Over
//1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
//2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
//3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.



//Step 10 - Answer
//1. Create a new function called startOver().
//2. Call startOver() if the user gets the sequence wrong.
//3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.