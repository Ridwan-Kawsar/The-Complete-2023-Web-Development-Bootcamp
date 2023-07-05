//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//new Date(year, month, day, hours, minutes, seconds, milliseconds);
const date = new Date(2023, 5, 18, 19);
var time = date.getHours(); //Gets hours by tapping into the date method.
var message;
const timeStyle = {
  color: ""
};

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
if (time < 12) {
  message = "Morning";
  timeStyle.color = "red";
} else if (time < 18) {
  message = "Afternoon";
  timeStyle.color = "green";
} else {
  message = "Evening";
  timeStyle.color = "blue";
}

root.render(
  //Apply the "heading" style in the styles.css
  <h1 className="heading" style={timeStyle}>
    Good {message}!
  </h1>
);
