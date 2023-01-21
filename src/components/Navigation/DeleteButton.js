import React from "react";
import styled from "styled-components";
import iconDelete from "../../assets/icon-delete.svg";

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

const DeleteButton = ({ setModalOpen }) => {
  return (
    <StyledDeleteButton
      onClick={() => {
        setModalOpen(true);
      }}
    >
      <DeleteIcon src={iconDelete} />
    </StyledDeleteButton>
  );
};

export default DeleteButton;
