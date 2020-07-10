import React from "react";

import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Left = styled.div`
  background-color: yellow;
  flex-grow: 1;
`;

const Right = styled.div`
  background-color: blue;
  flex-grow: 1;
`;

const Background = () => {
  return (
    <Flex>
      <Left />
      <Right />
    </Flex>
  );
};

export default Background;
