import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS object =>HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS engine) - PARCEL - BABEL
const jsxHeading = <h1 className="head">Namaste React Using JSX 🚀</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
