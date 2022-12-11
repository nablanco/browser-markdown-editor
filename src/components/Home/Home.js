import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";

const StyledHome = styled.input`
  height: 100%;
  width: 100%;
  position: fixed;
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
`;

const Home = forwardRef((props, inputRef) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledHome
      type="text"
      defaultValue={theme.name}
      {...props}
      ref={inputRef}
      theme={theme}
    >
      {/* {theme.name} */}
    </StyledHome>
  );
});

Home.displayName = "Home";
export default Home;
