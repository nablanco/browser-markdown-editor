import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

const StyledEditor = styled.textarea`
  height: 100%;
  width: 50%;
  outline: none;
  border: none;
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
`;

const MarkdownEditorWindow = forwardRef((props, inputRef) => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument, onDocumentContentChange } =
    useContext(DocumentContext);

  return (
    <StyledEditor
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
    ></StyledEditor>
  );
});

MarkdownEditorWindow.displayName = "MarkdownEditor";
export default MarkdownEditorWindow;
