import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Headline = styled.p`
  font-family: Muli;
  font-size: 35px;
  font-weight: bold;
  margin: 15px 0px;
  text-align: center;
  line-height: 1.6;
  padding: 0px 8%;
`;

const Description = styled.p`
  font-family: Muli;
  font-size: 17px;
  padding: 0px 8%;
  line-height: 1.5;
`;

const ButtonBox = styled.button`
  width: 180px;
  height: 45px;
  background-color: #6672fb;
  border: none;
  :hover {
    background-color: #5757d9;
  }
  border-radius: 8px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: Muli;
  line-height: 40px;
  cursor: pointer;
  display: block;
  margin: 40px auto;
`;

const ParentStyle = {
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  width: "100%"
};

const CenterStyle = {
  display: "flex",
  flexDirection: "column",
  minWidth: "980px",
  marginTop: "20px"
};

const CenterPane = () => {
  return (
    <div style={ParentStyle}>
      <div style={CenterStyle}>
        <Headline>
          Track sales commission.{<br />}Take control of your income.
        </Headline>
        <Description>
          Paywatch helps you track your sales commission so you know how much
          you make every day.{<br />}Monitor weekly and monthly income, identify
          trends, set and exceed your goals, all in Paywatch.
        </Description>
        <Link to="/app" style={{ textDecoration: "none" }}>
          <ButtonBox data-cy="demobtn">View Demo</ButtonBox>
        </Link>
      </div>
    </div>
  );
};

export default CenterPane;
