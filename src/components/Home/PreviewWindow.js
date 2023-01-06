import React, { useContext } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

const StyledEditor = styled.div`
  height: 100%;
  width: 50%;
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
`;

const MarkdownEditor = () => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument, onDocumentContentChange } =
    useContext(DocumentContext);

  return (
    <StyledEditor
      theme={theme}
      activeDocument={activeDocument}
      onChange={onDocumentContentChange}
    >
      <Markdown>{activeDocument.content}</Markdown>
    </StyledEditor>
  );
};

MarkdownEditor.displayName = "MarkdownEditor";
export default MarkdownEditor;
