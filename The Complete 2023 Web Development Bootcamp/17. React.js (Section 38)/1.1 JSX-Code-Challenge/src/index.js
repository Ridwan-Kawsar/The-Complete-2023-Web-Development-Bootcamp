//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// It should display a h1 heading.
// It should display an unordered list (bullet points).
// It should contain 3 list elements.
root.render(
  <div>
    <h1>Heading</h1>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </div>
);