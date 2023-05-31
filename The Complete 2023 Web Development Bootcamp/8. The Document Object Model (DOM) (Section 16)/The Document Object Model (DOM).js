// 140. Adding Javascript to Websites

// Inline Javascript - same as inline CSS.

// Internal Javascript - (Script tags within the body)
{/* 
<script type="text/javascript">
    alert("Hello"); 
</script> 
*/}

// External Javascript (linked to index.js file)
// Note: For external Javascript, script tag is placed just before the closing body tag.
<body>
    Content
    <script src="index.js"></script>
</body>  



// 141. Introduction to the Document Object Model (DOM)
document; //Shows the entire tree model of the HTML file
document.firstElementChild; //Returns the model starting from the HTML tag
document.firstElementChild.firstElementChild; //Returns the head part of the website.
document.firstElementChild.lastElementChild; //Returns the body part of the website.

document.firstElementChild.lastElementChild.firstElementChild; //Suppose this object returns a H1 element containing the word "Hello".
var heading = document.firstElementChild.lastElementChild.firstElementChild; //Saving the object header as a variable.
heading.innerHTML = "Goodbye" //The object can be manipulated to change the text within the h1 tags to "Goodbye", (innerHTML is the part between the HTML H1 tags in this instance.)

querySelector("input").click(); //Ticks the unticked input box. Query Selector lets you manipulate elements, classes, IDs.

GET PROPERTY
car.colour; //Gets the 'colour' property of the 'car' object

SET PROPERTY
car.numberOfDoors = 0; //Sets the property 'numberOfDoors' to '0'

CALLING METHODS
car.drive(); //Calls the method 'drive' of the object 'car', methods have () at the end.
car.park();
//Note: A method has to be associated with an object.



// 143. Selecting HTML Elements with Javascript
document.

getElementsByTagName("input"); //Selects elements by tags; div, span, ul, li etc. (Array format)
getElementsByTagName("input")[x]; //Selects elements by tags by the index of the array, []. e.g. x = 0, 1, 2, 3, 4 etc
getElementsByTagName("input").length //Returns the length of the array.

getElementsByClassName("input"); //Selects the elements by class name (Array format)

getElementById("input"); //Selects ELEMENT by ID. (Returned as a single item and not an Array)

querySelector("parentElement childElement") //Hierarchical Elements (Child under a Parent)
querySelector("elementName.className") //Class within an Element
querySelectorAll("input") //Selects all the specified selectors in an array.
querySelectorAll("input")[x] //Selects the specified index in the array.



// 144. Manipulating and Changing Styles of HTML Elements with Javascript
HTML DOM STYLE - https://www.w3schools.com/jsref/dom_obj_style.asp

// Naming conventions between HTML DOM vs CSS: 
// In HTML DOM, the wording is similar to css except that the dash is removed and camel casing is used.
// Values are also displayed as strings.

fontSize = "5%"; --> font-size = 5%;
paddingBottom = "20px"; --> padding-bottom = 20px;
lineHeight = "2rem" --> line-height = 2rem;



// 145. The Separation of Concerns: Structure vs Style vs Behaviour
document.querySelector.classList // Taps into the class list property showing all the classes assigned to an element.
.add("className") // Adds "className" class into the class list
.remove("className") // Removes "className" class from the class list
.toggle("className") // Toggles between applying and removing a class. (On/Off)



// 146. Text Manipulation and the Text Content Property
document.querySelector("h1").innerHTML = "<em>Hello</em>"; // Selects everything within the h1 tags.
document.querySelector("h1").textContent; // Selects only the text within the h1 tags, i.e. "Hello"



// 147. Manipulating HTML Element Attributes
// Attributes in HTML are class, href, src

document.querySelector("a").attributes; // Lists all the attributes attached to the anchor element. (href within <a> from DOM Starting Files)
document.querySelector("a").getAttribute("href"); // Returns the link associated to the Href.
document.querySelector("a").setAttribute("href", "newWebsiteLink"); // Sets a new link to the href attribute.
