const express = require("express");
const https = require("node:https"); //Internal (Native) Node Module

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "6f4cff6f8eb8759c532ca0d4beae1cd4";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>" + query + " is currently experiencing a " + weatherDesc + ".</h1>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees celsius.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    })
})


app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})