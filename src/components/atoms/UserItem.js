import React from "react";

import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserImg = styled.div`
  height: 40px;
  width: 40px;
  background-image: url("https://res.cloudinary.com/ab91/image/upload/v1584229438/Payment%20App/pay_boy.png");
  margin-left: 12px;
`;

const UserName = styled.p`
  font-family: Muli;
  font-size: 1.3em;
  color: ${props => props.theme.text};
  padding-left: 11px;
  padding-right: 25px;
  margin: auto;
`;

const UserItem = props => {
  return (
    <Flexbox>
      <UserName>{props.name}</UserName>
    </Flexbox>
  );
};

export default UserItem;
