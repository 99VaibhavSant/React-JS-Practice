import "./App.css"
import React from "react";

// React Fragment is used to group multiple JSX elements without adding an extra node to the DOM.

export default function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </React.Fragment>
  );
}
