import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

const StyledNavigation = styled.div``;

const Navigation = ({ handleEnter }) => {
  return (
    <StyledNavigation>
      {/* <Sidebar /> */}
      <Navbar handleEnter={handleEnter} />
    </StyledNavigation>
  );
};

export default Navigation;
