import React, { Component } from "react";
import styled from "styled-components";

import { EditableText } from "@blueprintjs/core";
import { ToastContainer, toast, Slide } from "react-toastify";

import Cancel from "../icons/Cancel";
import Check from "../icons/Check";

// Consider react moment

const MilestoneBox = styled.div`
  display: grid;

  width: 330px;
  background-color: ${props => props.theme.milestone};
  height: 101px;
  border-radius: 16px;

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 10px 1fr 50px 50px;
  margin-bottom: 20px;
`;

const CategoryColor = styled.div`
  height: 100%;
  width: 10px;
  background-color: #f8b849;
  grid-row: span 2;
  border-radius: 16px 0px 0px 16px;
`;

const GridItem = styled.div`
  font-family: Muli;
  font-size: 1.1em;
  grid-column: span 3;
  margin: 20px 0 0 20px;
`;

const IconPlaceholder = styled.button`
  height: 27px;
  width: 27px;
  background-color: orange;
  margin: auto;
  border-radius: 50%;
`;

const CancelStyle = {
  cursor: "pointer",
  justifySelf: "center",
  alignSelf: "center",
  paddingTop: "1px"
};

const CheckStyle = {
  cursor: "pointer",
  alignSelf: "center"
};

const toastList = new Set();

class Milestone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelHover: false,
      checkHover: false,
      inputText: ""
    };
  }

  cancelToggle = () => this.setState({ cancelHover: !this.state.cancelHover });
  checkToggle = () => this.setState({ checkHover: !this.state.checkHover });

  cancel = () => {
    if (toastList.size < 1) {
      const id = toast.warning("Milestone deleted", {
        onClose: () => toastList.delete(id)
      });
      toastList.add(id);
    }
    this.setState({ inputText: "" });
    this.props.flip();
  };

  updateText = () => {
    this.setState({ inputText: event.target.value });
  };

  validation = () => {
    if (this.state.inputText == "") {
      toast.error("Please enter a milestone");
      return;
    } else {
      this.props.celebrate();
      toast.success(this.state.inputText + " completed!");
      this.setState({ inputText: "" });
      this.props.flip();
    }
  };

  render() {
    return (
      <MilestoneBox>
        <CategoryColor />
        <GridItem>
          <EditableText
            maxLength={32}
            placeholder="Your Milestone Here"
            onChange={this.updateText}
            value={this.state.inputText}
          />
        </GridItem>
        <div />
        <div
          className="cancelbtn"
          onMouseEnter={this.cancelToggle}
          onMouseLeave={this.cancelToggle}
          style={CancelStyle}
          onClick={this.cancel}
        >
          <Cancel fill={this.state.cancelHover ? "#FF8D8D" : "#AEAEAE"} />
        </div>
        <div
          className="completebtn"
          onMouseEnter={this.checkToggle}
          onMouseLeave={this.checkToggle}
          onClick={this.validation}
          style={CheckStyle}
        >
          <Check fill={this.state.checkHover ? "#4CD500" : "#AEAEAE"} />
        </div>
      </MilestoneBox>
    );
  }
}

export default Milestone;
