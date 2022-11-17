import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 100vw;
  height: 72px;
  border-bottom: 1px solid grey;
`;

const TestThemeButton = styled.button``;

const Navbar = () => {
  return (
    <StyledNavbar>
      Poop Palace
      <TestThemeButton>Theme Test</TestThemeButton>
    </StyledNavbar>
  );
};

export default Navbar;
