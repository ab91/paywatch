import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Box = styled.div`
  margin: auto 0;
`;

const CTA = styled.p`
  font-family: Muli;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.actionboxinfo};
`;

const Instruction = styled.p`
  font-family: Muli;
  font-size: 1em;
  margin-top: 15px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.actionboxinfo};
`;

class Default extends Component {
  render() {
    return (
      <Box>
        <CTA>Select an action to begin</CTA>
        <Instruction>
          Click “Log Income” to add an income data point.
          <br />
          Click “At a Glance” to review recent data.
          <br />
          Click “Manage Plans” to view your commission plans.
        </Instruction>
      </Box>
    );
  }
}

function mapStatetoProps(state) {
  return {};
}

export default connect(mapStatetoProps)(Default);
