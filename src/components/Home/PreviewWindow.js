import React, { useContext } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

const StyledEditor = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 50%;
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
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

const MarkdownContainer = styled.div`
  height: calc(100% - 120px);
  padding-left: 16px;
  overflow: auto;
`;

const MarkdownEditor = () => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument } = useContext(DocumentContext);

  return (
    <StyledEditor theme={theme} activeDocument={activeDocument}>
      <TitleContainer theme={theme}>PREVIEW</TitleContainer>
      <MarkdownContainer>
        <Markdown>{activeDocument.content}</Markdown>
      </MarkdownContainer>
    </StyledEditor>
  );
};

MarkdownEditor.displayName = "MarkdownEditor";
export default MarkdownEditor;
