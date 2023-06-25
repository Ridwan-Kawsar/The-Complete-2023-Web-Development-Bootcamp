import React from "react";
import ReactDOM from "react-dom/client";
import { add, multiply, subtract, divide } from "./calculator";
//import * as calc from "./calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

root.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
    {/* <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li> */}
  </ul>
);
