// 175. What is jQuery?

const { css } = require("jquery")

//Simplifying the code (Line 6 = Line 7 = Line 8)
document.querySelector("h1")
jQuery("h1")
$("h1") 



// 176. How to Incorporate jQuery into Websites
Head to jQuery.com/download
Google CDN
Pick the latest version: e.g. <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

Hierarchy:
<head></head>: css links go in the head tags.
<body></body>: jQuery Script tags, followed by JavaScript Script tags.



// 178. Selecting Elements with jQuery
document.querySelector("h1") ----> $("h1") //Selects the h1 tag
document.querySelectorAll("button") ----> $("button") //Selects ALL the button



// 179. Manipulating Styles with jQuery
$("h1").css("cssProperty", "value");

$("h1").css("font-size"); //Single property within the brackets means you are GETTING the value of it
$("h1").css("font-size", "5rem"); //Two properties within the brackets means you are SETTING the new value to that first property.

NOTE:
// Keep JS code about behaviour
// Keep css style code about Appearance
// Keep HTML about content

//In CSS
.big-title {
    font-family: cursive;
    color: purple;
}

.margin-50{
    margin: 50px;
}

// To add CSS style classes, manipulate it in JS by adding classes within the quotation marks separated by a space.
$("h1").addClass("big-title margin-50"); 

// To remove a CSS class:
$("h1").removeClass("margin-50"); 

// Checking a class within an Element:
$("h1").hasClass("big-title"); //Returns a boolean (true/false)



// 180. Manipulating Text with jQuery
$("h1").text("Bye"); //Replaces the current h1 text to "bye"
$("h1").html("<em>Bye</em>"); //Replaces the content within the inner html tags. (Allowing you to add HTML tags, i.e. em, strong etc)



// 181. Manipulating Attributes (src, href etc..) with jQuery
$("img").attr("src"); //Gets the src attribute of the img
$("a").attr("href", "https://www.yahoo.com"); //Sets the href attribute of the a tag to the following https (yahoo.com...)

// A class can also be a HTML attribute.
$("h1").attr("class"); //Returns all the classes applied to h1.



// 182. Adding Event Listeners with jQuery
$("h1").on("click", function () {
    $("h1").css("color", "red");
});
//Adds a click event on a h1 tag.

// Vanilla JS of a for loop, listening to button clicks
for (var i=0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color="green";
    });
}

// jQuery of the above (Line 82-87)
$("button").on("click", function () {
    $("h1").css("color", "green");
});

// jQuery Keydown/Keypress event listeners
$("input").on("keydown", function(event) {
    console.log(event.key);
})



// 183. Adding and Removing Elements with jQuery
$("h1").before("<button>insertText</button>"); //Allows an element to be created before another element.
Output: <button>Button</button><h1>Hello</h1>

$("h1").after("<button>insertText</button>"); //Allows an element to be created after another element.
Output: <h1>Hello</h1><button>Button</button>

$("h1").prepend("<button>insertText</button>"); //Creates an element before the content of an element.
Output: <h1><button>Button</button>Hello</h1>

$("h1").append("<button>insertText</button>"); //Creates an element after the content of an element.
Output: <h1>Hello<button>Button</button></h1>

$("h1").remove(); // Removes all the h1 elements from the document.



// 184. Website Animations with jQuery
$("h1").hide(); // Hides h1 element (removes it from the flow of the HTML)
$("h1").show(); // Shows h1 element
$("h1").toggle(); // Shows and Hides h1 element
$("h1").fadeOut(); // Fades and Hides h1 element
$("h1").fadeIn(); // Fades and Shows h1 element
$("h1").fadeToggle(); // Fades&Hides and Fades&Shows h1 element
$("h1").slideUp(); // Collapses h1 element
$("h1").slideDown(); // Uncollapses h1 element
$("h1").slideToggle(); // Collapses and uncollapses h1 element

$("h1").animate({opacity: 0.5}); // Animates custom css, in this case opacity of the h1 value is set to 50$
// .animate only works when values on the right side i.e. 0.5 is of a NUMERIC value.
// Other Examples
$("h1").animate({margin: 20}); // 20px margin
$("h1").animate({margin: "20%"}); // 20% margin



