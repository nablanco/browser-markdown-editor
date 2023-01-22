import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

const StyledEditorContainer = styled.div`
  display: ${({ showPreview }) => (showPreview ? "none" : "flex")};
  flex-flow: column nowrap;
  height: 100%;
  width: 50%;
  outline: none;
  border: none;
`;
const TitleContainer = styled.div`
  height: 42px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.sectionheader};
  background-color: ${({ theme }) => theme.background.sectionheader};
`;
const Editor = styled.textarea`
  height: calc(100% - 120px);
  padding-left: 16px;
  outline: none;
  border: none;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.markdownbody};
  background-color: ${({ theme }) => theme.background.main};
`;

const MarkdownEditorWindow = forwardRef((props, inputRef) => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument, onDocumentContentChange } =
    useContext(DocumentContext);

  console.log({ activeDocument });
  return (
    <StyledEditorContainer showPreview={props.showPreview}>
      <TitleContainer theme={theme}>MARKDOWN</TitleContainer>
      <Editor
        type="text"
        value={activeDocument.content}
        onChange={onDocumentContentChange}
        ref={inputRef}
        theme={theme}
        {...props}
      />
    </StyledEditorContainer>
  );
});

MarkdownEditorWindow.displayName = "MarkdownEditor";
export default MarkdownEditorWindow;
