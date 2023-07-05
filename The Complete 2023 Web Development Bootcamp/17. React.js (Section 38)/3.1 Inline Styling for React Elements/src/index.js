import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const customStyle = {
  color: "red",
  fontWeight: "900",
  fontSize: "70px"
};

root.render(<h1 style={customStyle}>Hello World!</h1>);
