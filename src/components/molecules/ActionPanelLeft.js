import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import Default from "../atoms/left/Default";
import Log1 from "../atoms/left/Log1";
import Log3 from "../atoms/left/Log3";
import At1 from "../atoms/left/At1";
import Com1 from "../atoms/left/Com1";

import * as pageIncAction from "../../redux/actions/pageIncAction";

import GenericButton from "../buttons/GenericButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class ActionPanelLeft extends Component {
  load = () => {
    this.props.load();
  };

  render() {
    var journey = this.props.storejourney;
    var page = this.props.storepage;

    if (journey == "DEFAULT") {
      return <Default load={this.load} />;
    } else if (journey == "LOG") {
      if (page == 1 || page == 2) {
        return <Log1 load={this.load} />;
      } else if (page == 3) {
        return <Log3 load={this.load} />;
      }
    } else if (journey == "GLANCE") {
      return <At1 load={this.load} />;
    } else if (journey == "MANAGE") {
      return <Com1 load={this.load} />;
    }
  }
}

function mapStatetoProps(state) {
  return { storepage: state.page, storejourney: state.journey };
}

export default connect(mapStatetoProps)(ActionPanelLeft);
