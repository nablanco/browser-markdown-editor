import React, { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`;

const StyledApp = styled.div``;

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const inputRef = useRef(null);

  const handleSidebar = () => {
    setShowSidebar(showSidebar ? false : true);
  };

  const handleEnter = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navigation
          showSidebar={showSidebar}
          handleSidebar={handleSidebar}
          handleEnter={handleEnter}
        />
        <Home ref={inputRef} inputRef={inputRef} showSidebar={showSidebar} />
      </StyledApp>
    </>
  );
};

export default App;
