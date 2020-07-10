import React from "react";

import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: 15px 0;
  height: 50px;
`;

const Highlight = styled.div(props => ({
  width: "6px",
  backgroundColor: "#FFFFFF",
  borderRadius: "0px 16px 16px 0px",
  visibility: props.active ? "visible" : "hidden"
}));

const ItemLabel = styled.p(props => ({
  fontFamily: "Muli",
  fontSize: "1.1em",
  color: props.active ? "#FFFFFF" : "#C1BEBE",
  paddingLeft: "25%",
  underline: "none",
  margin: "auto 0"
}));

const NavItem = props => {
  return (
    <Flexbox>
      <Highlight active={props.active} />
      <ItemLabel active={props.active}>{props.label}</ItemLabel>
    </Flexbox>
  );
};

export default NavItem;
