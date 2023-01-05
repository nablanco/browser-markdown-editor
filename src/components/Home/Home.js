import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

const StyledHome = styled.textarea`
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

const Home = forwardRef((props, inputRef) => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument, onDocumentContentChange } =
    useContext(DocumentContext);

  return (
    <StyledHome
      type="text"
      value={
        activeDocument.content
          ? activeDocument.content
          : "You delete all your work! Please create a new document in the sidebar :)"
      }
      onChange={onDocumentContentChange}
      showSidebar={props.showSidebar}
      ref={inputRef}
      theme={theme}
      {...props}
      spellcheck="false"
    ></StyledHome>
  );
});

Home.displayName = "Home";
export default Home;
