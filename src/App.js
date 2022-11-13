import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px
  }
`;

const StyledComponent = styled``;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledComponent></StyledComponent>
    </>
  );
}

export default App;
