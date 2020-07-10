import React from "react";

import styled from "styled-components";

const ButtonBox = styled.button`
  width: 160px;
  height: 40px;
  background-color: ${props => props.color};
  cursor: pointer;
  opacity: 1;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 1em;
  text-align: center;
  font-family: Muli;
  line-height: 40px;
  margin: 5px 0;
  :hover {
    filter: brightness(85%);
  }
`;

const GenericButton = props => {
  return (
    <>
      <ButtonBox color={props.color}>{props.label}</ButtonBox>
    </>
  );
};

export default GenericButton;
