import React, { useContext } from "react";
import styled from "styled-components";
import iconSave from "../../assets/icon-save.svg";

import { DocumentContext } from "../../documents/documentContext";

const StyledSaveButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 152px;
  height: 40px;
  padding: 0px 17px;
  margin: 0px;
  margin-right: 16px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: #e46643;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    background-color: #f39765;
  }
`;
const SaveIcon = styled.img`
  height: 16px;
  width: 16px;
`;

const SaveButton = () => {
  const { saveDocument } = useContext(DocumentContext);

  return (
    <StyledSaveButton onClick={() => saveDocument()}>
      <SaveIcon src={iconSave} />
      Save Changes
    </StyledSaveButton>
  );
};

export default SaveButton;
