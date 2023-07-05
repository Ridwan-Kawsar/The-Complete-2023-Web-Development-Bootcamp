//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const name = "Ridwan";
const date = new Date();
let currentYear = date.getFullYear();

root.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright {currentYear}.</p>
  </div>
);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
