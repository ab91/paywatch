import React from "react";

import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  height: 35px;
  background-color: ${props => props.theme.buttonbg};
  border-radius: 9px;
  color: ${props => props.theme.smalltext};
  text-align: center;

  font-size: 0.95em;
  padding-top: 9px;

  font-family: Muli;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }
`;

const CreateButton = () => {
  return <Button>Create +</Button>;
};

export default CreateButton;
