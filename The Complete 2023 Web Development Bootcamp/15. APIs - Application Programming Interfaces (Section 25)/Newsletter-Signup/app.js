const express = require("express");
const request = require("request");
const https = require("node:https");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); //Used to request for css files, images & other static files, provided the path is given. Path being "public/" in this case.
// The static files (images, custom css) will need to be refered to via a relative URL (relative to the public folder in this instance).
// For example: (signup.html)
// The custom css path (href) is given as "./css/styles.css" since the path is public/css/styles.css..
// For the mailing logo image, the path (src) is given as "./image/mailing-logo.png"

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    console.log(firstName, lastName, email);

    //JAVASCRIPT OBJECT
    const data = {
        //(Expand) https://mailchimp.com/developer/marketing/api/lists/batch-subscribe-or-unsubscribe/
        //NOTE: As per the documentation, members has to be given as an array of objects
        members: [
            {
                email_address: email, //email created from the post request
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/60af0876c7";
    // https://mailchimp.com/developer/marketing/docs/fundamentals/#the-basics
    // https://mailchimp.com/developer/marketing/api/lists/ Batch subscribe or unsubscribe [POST /lists/{list_id}]

    const options = {

        // https://nodejs.org/docs/latest-v18.x/api/https.html#httpsrequesturl-options-callback
        // https://nodejs.org/docs/latest-v18.x/api/http.html#httprequestoptions-callback

        // method <string> A string specifying the HTTP request method. Default: 'GET'.
        method: "POST",

        // Basic HTTP Authentication (https://mailchimp.com/developer/marketing/docs/fundamentals/#api-structure)
        // user 'anystring':TOKEN
        // auth <string> Basic authentication ('user:password') to compute an Authorization header.
        auth: "Ridwan:c767df18ab1fa7757ee7cd2f35c8581a-us21"
    }

    const request = https.request(url, options, function (response) {

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

    });

    request.write(jsonData);
    request.end();

    // Checking Subscriber list
    // https://us21.admin.mailchimp.com/lists/members?id=11549#p:1-s:25-sa:last_update_time-so:false
});

app.post("/failure", function (req, res) {
    res.redirect("/"); //Redirects the page to the home route
})

app.listen(process.env.PORT || 3000, function () { //process.env.PORT - A dynamic port that Heroku uses to deploy your app, using "||"" (or) to run it on port 3000 locally
    console.log("Server is running on port 3000.");
})


//API KEY - c767df18ab1fa7757ee7cd2f35c8581a-us21

//LIST ID (AUDIENCE ID) - 60af0876c7