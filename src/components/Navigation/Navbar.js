import React, { useState } from "react";
import styled from "styled-components";
import iconMenu from "../../assets/icon-menu.svg";
import iconDelete from "../../assets/icon-delete.svg";
import iconDocument from "../../assets/icon-document.svg";

import ThemeSelection from "./ThemeSelection";

const StyledNavbar = styled.div`
  width: 100vw;
  height: 72px;
  color: #ffffff;
  background-color: #2b2d31;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const MenuButton = styled.div`
  height: 72px;
  width: 72px;
  background-color: #35393f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuIcon = styled.img``;
const Title = styled.div`
  height: 100%;
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Commissioner", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 5px;
`;
const Divider = styled.div`
  height: 40px;
  margin-right: 24px;
  border-left: 1px solid #5a6069;
  align-self: center;
`;
const DocumentContainer = styled.div`
  height: 36px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-self: center;
`;
const DocumentIcon = styled.img`
  height: 16px;
  align-self: center;
`;
const DocumentNameContainer = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #c1c4cb;
  margin-left: 16px;
  display: flex;
  flex-flow: column nowrap;
`;
const DocumentNameEditor = styled.input`
  width: 400px;
  color: #ffffff;
  background-color: #2b2d31;
  border: none;
  margin-bottom: 3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 0px;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #ffffff;
  }
`;
const RightContainer = styled.div``;
const DeleteButton = styled.div``;
const DeleteIcon = styled.img``;

const Navbar = ({ handleEnter }) => {
  const [documentName, setDocumentName] = useState("welcome.md");

  const handleChange = (event) => {
    setDocumentName(event.target.value);

    console.log("document name: ", event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
      handleEnter();
    }
  };

  return (
    <StyledNavbar>
      <LeftContainer>
        <MenuButton>
          <MenuIcon src={iconMenu} />
        </MenuButton>
        <Title>MARKDOWN</Title>
        <Divider />
        <DocumentContainer>
          <DocumentIcon src={iconDocument} />
          <DocumentNameContainer>
            Document Name
            <DocumentNameEditor
              value={documentName}
              type="text"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </DocumentNameContainer>
        </DocumentContainer>
        <button onClick={() => handleEnter()}>Focus on input</button>
      </LeftContainer>
      <ThemeSelection />
      <RightContainer>
        <DeleteButton>
          <DeleteIcon src={iconDelete}></DeleteIcon>
        </DeleteButton>
      </RightContainer>
    </StyledNavbar>
  );
};

export default Navbar;
