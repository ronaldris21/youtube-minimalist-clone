import React from "react";
import ReactDOM from "react-dom/client"; // Ensure correct import path for React 18+


import App from "./App";
import "./index.css"

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<App />);
}
