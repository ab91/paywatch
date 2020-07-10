import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import Default from "../atoms/right/Default";
import Log1 from "../atoms/right/Log1";
import Log2 from "../atoms/right/Log2";
import Log3 from "../atoms/right/Log3";
import At1 from "../atoms/right/At1";
import Com1 from "../atoms/right/Com1";

class ActionPanelRight extends Component {
  render() {
    var journey = this.props.storejourney;
    var page = this.props.storepage;

    if (journey == "DEFAULT") {
      return <Default load={this.load} />;
    } else if (journey == "LOG") {
      if (page == 1) {
        return <Log1 load={this.load} />;
      } else if (page == 2) {
        return <Log2 load={this.load} />;
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

export default connect(mapStatetoProps)(ActionPanelRight);
