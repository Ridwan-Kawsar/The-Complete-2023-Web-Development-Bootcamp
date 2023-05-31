// 151. Dicee Challenge Step 1 - Create an External Javascript File
// Create a new Javascript file called index.js and link to it from the index.html file.

// 152. Dicee Challenge Step 2 - Add Dice Images
// In the Dicee project, there is a folder called images, add the images of dice6.png as the source to both of the <img> elements.

// 153. Dicee Challenge Step 3 - Create a Random Number
// Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.

// 154. Dicee Challenge Step 4 - Change the <img> to a Random Dice
// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.
// Hint: You will need to use what you've learnt about the DOM and the method setAttribute() to achieve this.

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imagesPlayer1 = "/images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", imagesPlayer1);

// 155. Dicee Challenge Step 5 - Change both <img> Elements
// Do the same for the right hand side image element.

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imagesPlayer2 = "/images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", imagesPlayer2);

// 156. Dicee Challenge Step 6 - Change the Title to Display a Winner
// Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
// Hint: You'll need to use an if statement, querySelector() and the innerHTML property to change the text in the h1.

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}

