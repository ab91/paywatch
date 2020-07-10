import React, { Component } from "react";
import { connect } from "react-redux";

import posed from "react-pose";
import styled from "styled-components";

import Admin from "../../menus/Admin";
import MilestoneParent from "../../organisms/MilestoneParent";
import Calendar from "../../organisms/Calendar";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.rightpanebg};
  padding-top: 1%;
  width: 350px;
  overflow: hidden;
`;

const PlaceholderStyle = {
  height: "50%"
};

const CalendarStyle = {
  width: "238px",
  margin: "0 auto"
};

const AnimatedDiv = posed.div({
  enter: {
    y: -190,
    transition: {
      y: { type: "spring", stiffness: 100, damping: 30 }
    }
  },
  exit: {
    y: 0,
    transition: {
      y: { type: "spring", stiffness: 100, damping: 30 }
    }
  }
});

class RightPane extends Component {
  render() {
    return (
      <Flexbox>
        <Admin />
        <MilestoneParent />
        <div style={PlaceholderStyle} />
        <AnimatedDiv pose={this.props.storecalendar ? "enter" : "exit"}>
          <div style={CalendarStyle}>
            <Calendar />
          </div>
        </AnimatedDiv>
      </Flexbox>
    );
  }
}

function mapStatetoProps(state) {
  return { storemode: state.darkmode, storecalendar: state.calendar };
}

export default connect(mapStatetoProps)(RightPane);
