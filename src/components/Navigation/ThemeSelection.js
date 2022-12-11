import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";

const StyledThemeSelection = styled.div``;

const TestThemeButton = styled.button`
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
`;

const ThemeSelection = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <StyledThemeSelection theme={theme}>
      <TestThemeButton theme={theme} onClick={() => handleThemeChange()}>
        {theme.name}
      </TestThemeButton>
    </StyledThemeSelection>
  );
};

export default ThemeSelection;
