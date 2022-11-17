import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const StyledNavigation = styled.div``;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Sidebar />
      <Navbar />
    </StyledNavigation>
  );
};

export default Navigation;
