import React from "react";
import ReactDOM from "react-dom/client";
import pi, { doublePi, triplePi } from "./math";
//import * as pi from "./math";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
    {/* <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li> */}
  </ul>
);