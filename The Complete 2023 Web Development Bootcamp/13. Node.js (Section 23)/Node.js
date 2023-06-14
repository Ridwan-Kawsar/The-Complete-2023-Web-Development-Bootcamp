// 196. Using Node.js

// Running a .js file from our computer;
// Bash terminal, inside the directory of the file you want to run, type the following;
node FileName.js

// Read Evaluation Print Loops (REPL)
// Lets you run bit-sized chunks of code like the chrome developer tools console in chrome.
node // Type node in the terminal and hit enter, then write in the bits of code that you want to test.

// To Exit REPL
.exit // Type in terminal or press ctrl c (twice)
clear // clears terminal



// 197. How to use Native Node Modules
// Native Modules can be found here below
www.nodejs.org/api

// To use a native (Internal) node module, you have to first require it. (Line 23)
// Example: For a file system node module (copy file sync) type inside the js file (Line 23-25)
const fs = require("fs");

fs.copyFileSync("file1.txt", "file2.txt");



// 198. NPM Package Manager & Installing External Node Modules

// Setting up a new web development project:

// Inside Bash Terminal:
npm init // Initialises a package file called package.json
// json is a file format that's used to organise data. (Similar to js objects)

// Set Package Name
// Set Version
// Set Description
// Entry Point: (Main js file)
// Test Command
// Git Repository
// Keywords
// Author
// License

// Installing NPM External Modules
// NPM External Modules can be found here below
www.npmjs.com

// Superhero Name Example
www.npmjs.com/package/superheroes

// Install the NPM module (type in terminal, make sure you're in the right directory)
npm install superheroes

// If you head over to the package.json file, the project will now depend on dependencies.
// superheroes wil now be added under dependencies.

// Inside the js file
const superheroes = require('superheroes'); // We have now included the superhero package into our project 

// Using the package to generate variables relating to the superhero package.
var superheroLibrary = superheroes.all;
console.log(superheroLibrary);
var mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);

// Inside Bash terminal:
node index.js;
// Output will now appear in the terminal.

// Summary of 198:
// Initialise package file (package.json) using npm init
// Install external package -> gets added as a dependency to our project
// Use the package functions/methods inside js file
// run the js file using (node) inside the terminal

// Node Version 12+ uses CJS (Common JavaScript) and ESM (EcmaScript Modules)
CJS - "require" keyword
ESM - "import" keyword

// To use ECMAScript with Node:
1. "type": "module", // Inside package.json
2. import method/Object/function from "package/Module" // Inside the index.js file