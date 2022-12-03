import React from "react";
import styled from "styled-components";

import ThemeSelection from "./ThemeSelection";

const StyledSidebar = styled.div``;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ThemeSelection />
    </StyledSidebar>
  );
};

export default Sidebar;
