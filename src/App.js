import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark } from "./themes/themes.styled";

// import Navigation from "./components/Navigation/Navigation";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color}
  }
`;

const TestThemeButton = styled.button``;

const StyledComponent = styled.div``;

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <StyledComponent>
        Poop Palace
        <TestThemeButton>Theme Test</TestThemeButton>
        {/* <Navigation /> */}
      </StyledComponent>
    </ThemeProvider>
  );
};

export default App;
