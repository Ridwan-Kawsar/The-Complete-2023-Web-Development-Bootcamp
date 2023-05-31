const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/contact", function(req, res){
    res.send("Contact me at ridwan_kawsar@hotmail.co.uk");
});

app.get("/about", function(req, res){
    res.send("Page Owner: Ridwan Kawsar");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});