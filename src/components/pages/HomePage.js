import React from "react";

import styled from "styled-components";

import LeftPane from "../templates/Home/LeftPane";
import CenterPane from "../templates/Home/CenterPane";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
`;

const HomePage = props => {
  return (
    <>
      <Flexbox>
        <LeftPane auth={props.auth} />
        <CenterPane />
      </Flexbox>
    </>
  );
};

export default HomePage;
