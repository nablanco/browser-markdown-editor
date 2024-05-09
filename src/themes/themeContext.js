import React, { useState, useEffect, createContext } from "react";
import themes from "./themes";
import PropTypes from "prop-types";

export const ThemeContext = createContext(themes.dark);

/* eslint-disable react/prop-types */

const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme-browser-markdown")) || themes.dark
  );

  useEffect(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem("theme-browser-markdown")
    );
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-browser-markdown", JSON.stringify(theme));
  }, [theme]);

  const handleThemeChange = () => {
    theme.name === themes.light.name
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextWrapper.protoTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextWrapper;
