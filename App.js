import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 className="head">Namaste React Using JSX 🚀</h1>;

// Class Based Components - OLD
// Functional Components - NEW

// React Functional Component
const HeadingComponent1 = () => {
  return <h1 className="heading">Namaste React Functional Component 🚀</h1>;
};

const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent1 />);
