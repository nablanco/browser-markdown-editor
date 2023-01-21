import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";

import MarkdownEditorWindow from "./MarkdownEditorWindow";
import PreviewWindow from "./PreviewWindow";

const StyledHome = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  position: fixed;
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? "250px" : "0px")}
  );
  transition: 0.3s;
`;

const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.divider};
`;

const Home = ({ inputRef, showSidebar }) => {
  const { theme } = useContext(ThemeContext);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = () => {
    showPreview ? setShowPreview(false) : setShowPreview(true);
  };

  return (
    <StyledHome showSidebar={showSidebar} theme={theme}>
      <MarkdownEditorWindow ref={inputRef} showPreview={showPreview} />
      <Divider theme={theme} />
      <PreviewWindow showPreview={showPreview} handlePreview={handlePreview} />
    </StyledHome>
  );
};

Home.displayName = "Home";
export default Home;
