// 214. Why Do We Need APIs?
// Application Programming Interface (API) - set of commands, functions, protocols and objects that programmers use to create software or interact with an external system.



// 215. API Endpoints, Paths and Parameters.
// Endpoint - url e.g. https://v2.jokeapi.dev/joke/

// Paths (/) - used to get a specific piece of data from an external server
// Paths are specified at the end of the url (after a /) (line 7)
// e.g. https://v2.jokeapi.dev/joke/Programming (the path being /programming)
// e.g https://v2.jokeapi.dev/joke/Dark (the path being /dark)

// Parameters (? and &)
// Parameters are specified at the end of the url (after a ?)
// e.g. https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political (the parameter being ?blacklistFlags=political)
// e.g. https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political&contains=debugging (2 or more parameters are chained with "&" ?blacklistFlags=racist & contains=debugging)
// e.g. https://v2.jokeapi.dev/joke/Programming?contains=debugging (key-value pair, key (search string) = contains, value (query) = debugging)



// 216. API Authentication and Postman
// Open Weather Map: https://openweathermap.org/current#builtin
// API Key: 6f4cff6f8eb8759c532ca0d4beae1cd4
// EndPoint: api.openweathermap.org/data/2.5/weather
// Parameters:
    // Api Key: appid={API key}
    // units: standard, metric, imperial

// https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=6f4cff6f8eb8759c532ca0d4beae1cd4



// 217. What is JSON?
// JSON - Javascript Object Notation

// Javascript Objects Example:
var wardobe = {
    doors: 2,
    drawers: 2,
    colour: "red"
}

// JSON Example:
"wardrobe": [
    "doors": 2,
    "drawers": 2,
    "colour": "red"
]



// 218. Making GET Requests with the Node HTTPS Module
// Example
const https = require("node:https"); //Internal (Native) Node HTTPS Module

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6f4cff6f8eb8759c532ca0d4beae1cd4&units=metric";
    
    https.get(url, function(response){
        console.log(response);
    })

    res.send("Server is up and running");
})



// 219. How to Parse JSON
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
res.statusCode - // Responds with the status code of the get/post/patch request.

res.on("data", function(data){ //res.on allows us to hold the actual message body that we get back from the external server (weather api).
    const weatherData = JSON.parse(data); //Using JSON.parse converts the JSON from a hexadecimal/binary/text into a javascript object.
    
    const temp = weatherData.main.temp; //Tap into our javascript object to get specific pieces of data, i.e temp

    const object = {
        name: "Ridwan",
        age: 28,
        favouriteFood: "philly cheesesteak",
    }

    console.log(JSON.stringify(object)); //JSON.stringify does the opposite to JSON.parse. It converts the js object into a string.
    //Output of above is.. {"name":"Ridwan","age":28,"favouriteFood":"Philly cheesesteak"}
})



// 220. Using Express to Render a Website with Live API Data
res.write // Can be used multiple times
res.write("<h1>Example</h1") //Syntax for applying html headings

response.on("data", function(data){

    const weatherData = JSON.parse(data);
    const icon = weatherData.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    res.write("<img src=" + imageURL + ">"); // Using res.write to render an image
    res.send(); // Can be used once as a response per request.

})



// 221. Using Body Parser to Parse POST Requests to the Server
app.use(express.urlencoded({extended: true}));

