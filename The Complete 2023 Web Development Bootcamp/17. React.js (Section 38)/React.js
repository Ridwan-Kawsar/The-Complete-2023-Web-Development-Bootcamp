//365. What is React?

// 1. React is a JavaScript library for building user interfaces. (Front-End framework)
// 2. The core concept of React is creating reusable and composable components.
// 3. Components can be thought of as building blocks that make up a React application.
// 4. React uses a virtual DOM to improve performance by minimizing unnecessary updates to the actual DOM.
// 5. React components can have state, which allows for dynamic rendering and interactivity.
// 6. State changes in a React component trigger a re-rendering of the component.
// 7. Props are used to pass data and functions between components.
// 8. React supports both class components and functional components.
// 9. The useState hook is commonly used in functional components to manage state.
// 10. React Router is a popular library for managing navigation in a React application.
// 11. React provides lifecycle methods that allow us to perform certain actions at specific times during a component's lifespan.
// 12. React supports conditional rendering using the ternary operator or logical && operator.
// 13. React supports list rendering with the map function.
// 14. React provides the useEffect hook to perform side effects, such as fetching data from an API.
// 15. React does not provide built-in functionality for handling forms, but popular libraries such as Formik and React Hook Form can be used for this purpose.
// 16. Context can be used to pass data to multiple components without the need for prop drilling.
// 17. React provides a testing library called React Testing Library for testing React components.
// 18. React can be used with other libraries and frameworks such as Redux, GraphQL, and Next.js.
// 19. React Native is a framework for building mobile applications using React.
// 20. React has a large and active community, with many resources available for learning and development.



// 368. Introduction to JSX and Babel

// 3. It is a syntax extension that allows us to write XML-like syntax for our React components.
// 4. JSX may look like HTML, but it is not exactly the same. It is a way to define elements in React.
// 6. JSX is not a requirement for writing React apps, but it makes the process of creating user interfaces much more comfortable.
// 7. JSX can be used inside of a string or inside of JSX brackets. This is known as an element.
// 8. Elements in JSX are represented by tags. For example, <h1>Hello World!</h1> is an element.
// 11. The attributes in JSX are the same as HTML, but they must be passed as an object, not as a string.
// 12. JSX can be used with conditional rendering, which allows components to return different elements based on a condition.
// 13. JSX can be used with loops and arrays to create dynamic elements.
// 14. JSX allows you to create components that are reusable and composable by breaking your UI into smaller pieces.
// 16. JSX allows you to use inline CSS styles.
// 17. The use of JSX with React is one of the reasons why React is so popular and productive in creating UIs.
// 18. JSX has a syntax that can be learned quickly, especially if you are familiar with HTML.
// 19. React developers prefer to use JSX because it helps to reduce the number of lines of code required to create user interfaces.
// 20. JSX is one of the key features of React and makes it easy for developers to create rich user interfaces with minimal effort.

// 1. JSX is a syntax extension for JavaScript, allowing developers to write HTML-like code in their JavaScript files, which makes writing UI components more intuitive.
// 2. Babel is a JavaScript compiler that allows developers to write modern JavaScript code, and then compiles it into code that is compatible with older browsers.
// 3. JSX code gets compiled into JavaScript, which is why it's important to use a tool like Babel to ensure compatibility with older browsers.
// 4. JSX code can include regular JavaScript expressions, which are enclosed in curly braces { }.
// 5. In JSX, HTML tags are written in lowercase, and custom components are written in uppercase.
// 6. The className attribute is used in JSX instead of the class attribute to apply CSS classes to HTML elements.
// 7. JSX code can be rendered using ReactDOM.render() method, which takes two arguments: the JSX code and the DOM element where it should be rendered.
// 8. React components are typically defined using JSX syntax.
// 9. Babel allows developers to use features of modern JavaScript, such as arrow functions and the const keyword, that may not be supported by older browsers.
// 10. Babel can also be configured to transform JSX into alternative syntaxes, such as the createElement() method.
// 11. Babel can be used on the command line or integrated into a build system like Webpack or Gulp.
// 12. The babel-preset-react package is required to transpile JSX code with Babel.
// 13. The babel-plugin-transform-react-jsx plugin is used to transform JSX code into JavaScript.
// 14. Babel also supports JSX syntax for Flow type checking and TypeScript.
// 15. Babel can be configured to optimize and compress code for production builds.
// 16. JSX helps to make React code more readable and easier to write.
// 17. Babel allows developers to use the latest JavaScript features without worrying about browser compatibility.
// 18. JSX can be used with other front-end frameworks like Vue.js and Angular.
// 19. Babel can be used with other front-end frameworks and libraries, as well as server-side JavaScript applications.
// 20. Understanding and using JSX and Babel is essential for working with React.js effectively.

<div id="root"></div> //Root of your React Application, everything created using react will be inserted inside this div.
// Install the dependencies 'React' and 'React DOM' and import the two modules inside the js files.

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// createRoot() - defines the HTML element where a React component should be displayed. i.e. "root" div inside the index.html file.

root.render(<h1>Hello World!</h1>);
// defines the React component that should be rendered.

// to render multiple html elements, wrap it inside a single "div" element, e.g.
root.render(
    <div>
        <h1>Hello World!</h1>
        <p>This is a paragraph.</p>
    </div>
);



// 370. Javascript Expressions in JSX & ES6 Template Literals

const fname = "Ridwan";
const lname = "Kawsar";

root.render(<h1>Hello {fname + " " + lname}</h1>); //Ouputs Hello Ridwan Kawsar
root.render(<h1>Hello {fname} {lname}</h1>); //Ouputs Hello Ridwan Kawsar
root.render(<h1>Hello {`${fname}`} {`${lname}`}</h1>); //Ouputs Hello Ridwan Kawsar
// Essentially we are writing HTML code (H1 tags) inside a JS file, and inside the HTML tags, writing JS codes.. i.e. const name

const date = new Date(); //Captures the current-date object. 
let currentYear = date.getFullYear(); //Tapping into the getFullYear() method gives us the year of the current date.



// 372. JSX Attributes & Styling React Elements

// Adding styles via classes in HTML files ...
root.render(
    <h1 class="heading">Heading</h1>
)

// Adding styles via classes in JSX files ...
root.render(
    <h1 className="heading">Heading</h1>
)

    // HTML Global Attributes; https://www.w3schools.com/tags/ref_standardattributes.asp
    // HTML Global Attributes in HTML are written in lowercase e.g. contenteditable ="false"

    // HTML Global Attributes in JSX
    // HTML Global Attributes in JSX files are written in camelCasing. e.g. contentEditable="true"



    // 374. Inline Styling for React Elements
    < h1 style = "color: red" > Heading</h1 >; // Inline CSS styling inside HTML

// For Inline styling in JS, the value needs to be given as a JS object and not a string ("color:red").
// JS Object: { key : "value" } pair.. 
{ color: "red" };

<h1 style={*** JS - Object **}>Heading</h1>; // To inject JS into a HTML element in JSX, first it needs to be wrapped inside a set of curly braces{}
<h1 style={{ color: "red" }}>Heading</h1>; // Inline styling for a HTML element in JSX using JS.

https://www.w3schools.com/cssref/index.php
// CSS properties written in kebab-case, lowercase -(hyphen) lowercase i.e. font-size
// When attempting to use these CSS properties inside a JS object, needs to be converted to camelCasing. i.e. font-size = fontSize

const customStyle = {
    color: "red",
    fontSize: "10px",
    fontWeight: "900"
}

    < h1 style = { customStyle } > Heading</h1>; // Can also assign a JS object to a const and implement the inline css style.



// 375. React Components
// 1. React components are the building blocks of React applications.
// 2. Components can be either functional or class components.
// 3. Functional components are simpler and easier to write, while class components offer more functionality and flexibility.
// 4. Components can receive data through props (short for properties) and have their own state.
// 5. Props are immutable and can only be updated by the parent component.
// 6. State is mutable and can only be updated using the setState() method.
// 7. Components can be composed of other components, forming a tree-like structure.
// 8. React uses a virtual DOM (Document Object Model) to efficiently update only the changed parts of the UI.
// 9. Components can have lifecycle methods that get called at different stages of their lifecycle, allowing to perform actions such as initialization, updates, and cleanups.
// 10. Components can also have methods that handle events, such as clicking a button or submitting a form.
// 11. The render() method is required for all components and returns the JSX (JavaScript XML) that represents the component's UI.
// 12. JSX is a syntax extension that allows writing HTML-like code inside JavaScript.
// 13. Components can have default props and prop types to define and validate their expected behavior.
// 14. React supports server-side rendering, which can improve performance and SEO (Search Engine Optimization).
// 15. React provides a set of built-in components and hooks that can be used to handle common scenarios such as forms, routing, or state management.
// 16. React components can use conditional rendering to display different content based on certain conditions.
// 17. React components can use the map() method to iterate over arrays and generate multiple elements based on them.
// 18. React components can use CSS (Cascading Style Sheets) to style their UI, either using inline styles or external CSS files.
// 19. React components can use third-party packages and libraries through npm (Node Package Manager) to add additional functionality.
// 20. React components can be tested using various tools such as Jest, Enzyme, or React Testing Library to ensure they behave as expected.

// The naming convention used for React Components are PascalCase. i.e. ReactComponent
// React Components are essentially functions built in jsx files.

//Inside "Heading.jsx" file..
import React from "react";
// This needs to be imported since the "react" module allows us to write JSX code (HTML elements mingling with JS code) and convert it into real javascript.

function Heading() {
    return (
        <h1>Title</h1>
    );
}

export default Heading; // Exporting statement, allowing the component to be exported to whichever file needs it.


// Inside "index.js" file..
import Heading from "./Heading"
// import the component as such

// And put the function "Heading" into the root.render() as HTML tag(s).. i.e
root.render(
    // <Heading></Heading>
    <Heading /> //Best Practice
)

// Most React Apps have a custom component called "App" inside their index.js, the App.jsx houses all the React Components. 

// Inside index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// Inside App.jsx
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;



// 377. Javascript ES6 - Import, Export and Modules

// To export mulitple functions within a file e.g.
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; // Default export
export { doublePi, triplePi }; // Non-default exports written inside {}.


// To import multiple functions..

import React from "react";
import ReactDOM from "react-dom/client";
import pi, { doublePi, triplePi } from "./math"; // import default then a comma followed by the non default exports.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li> // Since doublePi and triplePi are functions, using ()'s, returns a value.
    <li>{triplePi()}</li>
  </ul>
);

// You can import everything from a file..

import * as pi from "./math"; // Imports everything from the entire module (./math)

root.render(
    // Since * is imported from pi, you will need to begin with "pi."" to tap into the methods and functions.
    <ul>
      <li>{pi.default}</li>
      <li>{pi.doublePi()}</li> 
      <li>{pi.triplePi()}</li>
    </ul>
);
console.log(pi); 
// Outputs: {default: 3.1415962, doublePi: ƒ doublePi(), triplePi: ƒ triplePi()}
// default: 3.1415962
// doublePi: ƒ doublePi() {}
// triplePi: ƒ triplePi() {}



//379. [Windows]​ Local Environment Setup for React Development

// Steps to start creating React Apps
//1. Check Node is up-to date; 
node --version       
// Updating node: 
npm install -g npm@latest


//2. Create React App: https://create-react-app.dev/docs/getting-started
// https://react.dev/learn/start-a-new-react-project
npx create-react-app my-app //Installs react, react-dom and react-scripts.. react-script lets you run react apps locally.


//3. Run the app
cd my-app
BROWSER=chrome npm start //Opens the app on Google Chrome


//4. Delete unneccesary files from app
public folder // Keep index.html, 
scr folder // Keep index.js, .gitignore, package.json and package-lock.json files.


//5. Delete excess content within index.html and index.js

//index.html boilerplate:
<!DOCTYPE html>
<html lang="en">

<head>
  <title>React App</title>
</head>

<body>
  <script src="../src/index.js" type="text/jsx"></script>
  <div id="root"></div>
</body>

</html>

//index.js boilerplate:
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


//6. Removing Errors in Terminal: 
// babel-preset-react-app is part of the create-react-app project, which is not maintianed anymore. It is thus unlikely that this bug willever be fixed. 
// Add "@babel/plugin-proposal-private-property-in-object" to your devDependencies to work around this error. This will make this message go away.
npm install --save-dev @babel/plugin-proposal-private-property-in-object


//7. Newer Versions of Node Troubleshooting
// In some case, some of the packages included in the starting files might be incompatible with your version of Node.
// To fix this, use a package called npm-check-updates to update the listed dependencies' versions inside the starting files.
npm install -g npm-check-updates
ncu -u
npm install
npm start


// React Support Page if you get stuck
https://react.dev/community

