import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fname = "Ridwan";
const lname = "Kawsar";
const num = 1;

root.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>Your lucky number is {num}</p>
  </div>
);