import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navigation from "./components/Navigation/Navigation";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }
`;

const StyledApp = styled.div``;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navigation />
      </StyledApp>
    </>
  );
};

export default App;
