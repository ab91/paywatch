import React, { Component } from "react";
import { connect } from "react-redux";

import * as calendarAction from "../../../redux/actions/calendarAction";

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
  color: ${props => props.theme.actionbox};
`;

const Caption = styled.p`
  font-family: Muli;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.actionbox};
`;

class Log1 extends Component {
  componentDidMount() {
    this.props.dispatch(calendarAction.calendarVisible());
  }

  componentWillUnmount() {
    this.props.dispatch(calendarAction.calendarVisible());
  }

  render() {
    return (
      <Box>
        <CTA>Select the date of income</CTA>
        <Caption>DEMO: Hardcoded to current day</Caption>
      </Box>
    );
  }
}

function mapStatetoProps(state) {
  return {};
}

export default connect(mapStatetoProps)(Log1);
