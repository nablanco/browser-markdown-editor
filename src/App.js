import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navigation from "./components/Navigation/Navigation";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px
  }
`;

const StyledComponent = styled``;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledComponent>
        <Navigation></Navigation>
      </StyledComponent>
    </>
  );
};

export default App;
