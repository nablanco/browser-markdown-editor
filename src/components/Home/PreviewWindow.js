import React, { useContext } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import iconShowPreivew from "../../assets/icon-show-preview.svg";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

const StyledPreview = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: ${({ showPreview }) => (showPreview ? "100%" : "50%")};
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
  justify-content: space-between;
  color: ${({ theme }) => theme.color.sectionheader};
  background-color: ${({ theme }) => theme.background.sectionheader};
`;

const PreviewButton = styled.button`
  height: 20px;
  width: 18px;
  margin-right: 24px;
  padding: 0%;
  background-color: ${({ theme }) => theme.background.sectionheader};
  cursor: pointer;
  border: none;

  &:hover {
    color: #e46643;
  }
`;
const PreviewIcon = styled.img`
  &:hover {
    filter: invert(55%) sepia(52%) saturate(4781%) hue-rotate(339deg)
      brightness(99%) contrast(80%);
  }
`;

const MarkdownContainer = styled.div`
  height: calc(100% - 120px);
  padding-left: 16px;
  overflow: auto;
`;

const PreviewWindow = ({ showPreview, handlePreview }) => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument } = useContext(DocumentContext);

  return (
    <StyledPreview theme={theme} showPreview={showPreview}>
      <TitleContainer theme={theme}>
        PREVIEW
        <PreviewButton theme={theme} onClick={() => handlePreview()}>
          <PreviewIcon src={iconShowPreivew} />
        </PreviewButton>
      </TitleContainer>
      <MarkdownContainer>
        <Markdown>{activeDocument ? activeDocument.content : "asdf"}</Markdown>
      </MarkdownContainer>
    </StyledPreview>
  );
};

PreviewWindow.displayName = "MarkdownEditor";
export default PreviewWindow;
