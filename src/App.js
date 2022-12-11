import React, { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
  }
`;

const StyledApp = styled.div``;

const App = () => {
  const inputRef = useRef(null);

  const handleEnter = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navigation handleEnter={handleEnter} />
        <Home ref={inputRef} inputRef={inputRef} handleEnter={handleEnter} />
      </StyledApp>
    </>
  );
};

export default App;
