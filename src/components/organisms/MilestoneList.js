import React, { Component } from "react";

import styled from "styled-components";
import posed from "react-pose";
import Confetti from "react-dom-confetti";

import Milestone from "../atoms/Milestone";

const Instruction = styled.p`
  font-family: Muli;
  font-size: 1.05em;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.info};
  margin: 30px 0;
`;

const AnimatedDiv = posed.div({
  enter: {
    x: 9,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 30 }
    }
  },
  exit: {
    x: 500,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 30 }
    }
  }
});

const config = {
  angle: 65,
  spread: 45,
  startVelocity: 35,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#6672FB", "#F8B849", "#6672FB", "#FFFFFF", "#68DED9"]
};

class MilestoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  celebrate = () => {
    this.setState({ completed: !this.state.completed });
    setTimeout(() => {
      this.setState({ completed: !this.state.completed });
    }, 1000);
  };

  render() {
    return (
      <>
        <Confetti active={this.state.completed} config={config} />
        <AnimatedDiv pose={this.props.show ? "enter" : "exit"}>
          <Milestone celebrate={this.celebrate} flip={this.props.flip} />
        </AnimatedDiv>
      </>
    );
  }
}

export default MilestoneList;
