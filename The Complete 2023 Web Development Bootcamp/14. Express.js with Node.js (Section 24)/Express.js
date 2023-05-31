// 202. Creating our first server with Express

// 1. Create directory (mkdir)
// 2. Change into that directory (cd)
// 3. Initialise the application (npm init) - creates package.json file
// 4. Ensure the entry point is the same name as the main file.
// 5. Install express (npm install express), adds express as "dependencies" inside the package.json

// Building a server (server.js file)
const express = require("express"); //Creates a constant "express" which equates to requiring express modules.
const app = express(); //Function representing the Express module which is binded to the constant "app".

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
//Listens to a specific port (port=channel) (3000) for any HTTP requests that get sent to the server.
//Using the annonymous function to callback using a console.log.

// Heading to the port location (In web browser)
localhost:3000



// 203. Handling Requests and Responses: the GET Request
app.get("/", function(request, response){ 
    response.send("Hi there!");
});
//First parameter: app.get("/") - defines what should happen when someone makes a get request to the home route.
//Second parameter: function(request, response) - callback function that tells server what to do when the request happens.
//The response parameter shows the response the server can make when the request gets triggered at the home location.

//The above (line 25-26) can be shortened as such..
app.get("/", function(req, res){ 
    res.send("Hi there!");
});



// 205. Understanding and Working with Routes
app.get("/contact", function(req, res){
    res.send("Contact me at ridwan_kawsar@hotmail.co.uk");
});

app.get("/about", function(req, res){
    res.send("Owner of this page: Ridwan Kawsar");
})
//Changing the first parameter from "/"" to the "/contact" route allows you to send a response when a user requests to see localhost:3000/contact.

//Nodemon
www.nodemon.io/
// Install nodemon; npm install -g nodemon
// Swap node for nodemon to automatically restart server when the code changes. i.e. nodemon server.js (make sure you're in the right directory)



// 209. Responding to requests with HTML files
www.expressjs.com/en/4x/api.html (response -> res.sendFile)
// Current Directory file path: (__dirname).. which can be confirmed by console.log(__dirname)

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})



// 210. Processing Post Requests with Body Parser
app.use(express.urlencoded({extended: true})); //urlencoded allows data inputted through the html form to be parsed into a string/text format. 