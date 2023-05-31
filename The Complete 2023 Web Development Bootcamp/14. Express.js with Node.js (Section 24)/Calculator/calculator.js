//Set up a new NPM package: (npm init)
//Using NPM install the express module (npm install express)

//Require express in your calculator.js
const express = require("express");

//Setup express
const app = express();

app.use(express.urlencoded({extended: true})); //urlencoded allows data inputted through the html form to be parsed into a string/text format. 

//Create a root route get method with app.get()
app.get("/", function(req, res) {
    // console.log(__dirname) outputs current directory file path shown below:
    //C:/Users/ridwa/Desktop/Web Development Course/The Complete 2023 Web Development Bootcamp/14. Express.js with Node.js (Section 24)/Calculator
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1); 
    var num2 = Number(req.body.num2);
    //req.body.num1 - Uses the name attribute (num1 from the form in the html file) to grab the value of the input.
    //parses that information (converts to string/text) through (express.urlencoded) by requesting for the body data.

    var result = num1 + num2;
    res.send("The result of that calculation is " + result);
})

// Add the get and post methods for the /bmicalculator route into the same server.js file we've been using
app.get("/bmiCalculator", function(req, res){
    //Use sendFile() to send the bmiCalculator.html page as a response inside the get method.
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
    //Inside server.js , create 2 variables, one for weight and one for height. 
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = (weight/(height*height))*10000;
    var bmiRounded = bmi.toFixed(2);
    res.send("Your BMI is " + bmiRounded);
})

//Spin up our server on port 3000 with app.listen (localhost:3000)
app.listen(3000, function(req, res) {
    console.log("Server is running on port 3000");
})

//Run server with nodemon (nodemon calculator.js)