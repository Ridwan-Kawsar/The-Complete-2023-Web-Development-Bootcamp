// 141. Introduction to the Document Object Model (DOM)

// PROBLEM: Using DOM, change the text in the third li in the DOM Challenge Starting Files to your name.

// MY SOLUTION: 
var thirdLi = document.querySelectorAll("ul, li")[2]; // querySelectorAll returns the 3 list iems in an array. [2] - denotes the array position that needs changing.
thirdLi.innerHTML = "Ridwan";

// ANGELA'S SOLUTION:
document.querySelector("ul").lastElementChild.innerHTML = "Ridwan";



// 143. Selecting HTML Elements with Javascript

// PROBLEM: Select the anchor tag nested in the list tag and change the text colour to red. (DOM Challenge Starting Files)

// SOLUTION: 
document.querySelector("li a").style.color = "red";



// 144. Manipulating and Changing Styles of HTML Elements with Javascript

// PROBLEM: Change the background colour of the "click me" button to yellow. (DOM Challenge Starting Files)

// SOLUTION: 
document.querySelector("button").style.backgroundColor = "yellow";



// 145. The Separation of Concerns: Structure vs Style vs Behaviour

// PROBLEM: In the css file, create a class called "huge", change font-size to 10rem, apply the change to the H1 (DOM Challenge Starting Files)

// SOLUTION: 
document.querySelector("h1").classList.add("huge");
document.querySelector("h1").classList.toggle("huge");
