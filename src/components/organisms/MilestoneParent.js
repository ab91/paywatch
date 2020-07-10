import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import MilestoneList from "./MilestoneList";
import CreateButton from "../buttons/CreateButton";
import SectionTitle from "../titles/SectionTitle";

import { ToastContainer, toast, Slide } from "react-toastify";

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  padding: 50px 0 20px 0;
`;

const Text = styled.p`
  display: inline;
  font-family: Muli;
  font-size: 17px;
  font-weight: 575;
  color: ${props => props.theme.maintext};
`;

const dark = {
  maintext: "#DBDBDB",
  smalltext: "#DBDBDB",
  buttonbg: "#1C3752",
  info: "#DBDBDB"
};

const light = {
  maintext: "#333539",
  smalltext: "#4D4D4D",
  buttonbg: "#D4D4D4",
  info: "#A0A0A0"
};

const toastList = new Set();

class MilestoneParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  createMile = () => {
    if (this.state.show == false) {
      this.setState({ show: !this.state.show });
    } else {
      toast.warning("Maximum Milestones reached");
    }
  };

  flipVisibility = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <ThemeProvider theme={this.props.storemode ? dark : light}>
        <HeaderBar>
          <Text>Upcoming Milestones</Text>
          <div onClick={this.createMile} data-cy="createbtn">
            <CreateButton />
          </div>
        </HeaderBar>
        <MilestoneList flip={this.flipVisibility} show={this.state.show} />
        <ToastContainer
          autoClose={2500}
          newestOnTop={true}
          draggable={false}
          transition={Slide}
          position="top-center"
        />
      </ThemeProvider>
    );
  }
}

function mapStatetoProps(state) {
  return { storename: state.name, storemode: state.darkmode };
}

export default connect(mapStatetoProps)(MilestoneParent);
