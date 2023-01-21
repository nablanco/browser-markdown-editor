import React, { useContext } from "react";
import styled from "styled-components";
import iconDelete from "../../assets/icon-delete.svg";
import { DocumentContext } from "../../documents/documentContext";

const StyledDeleteButton = styled.button`
  height: 20px;
  width: 18px;
  margin-right: 24px;
  padding: 0%;
  background-color: #2b2d31;
  cursor: pointer;
  border: none;

  &:hover {
    color: #e46643;
  }
`;
const DeleteIcon = styled.img`
  &:hover {
    filter: invert(55%) sepia(52%) saturate(4781%) hue-rotate(339deg)
      brightness(99%) contrast(80%);
  }
`;

const DeleteButton = () => {
  const { deleteDocument } = useContext(DocumentContext);

  return (
    <StyledDeleteButton onClick={deleteDocument}>
      <DeleteIcon src={iconDelete} />
    </StyledDeleteButton>
  );
};

export default DeleteButton;
