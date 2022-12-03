import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextWrapper from "./themes/themeContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>
);
