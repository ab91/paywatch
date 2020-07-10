import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import * as pageIncAction from "../../../redux/actions/pageIncAction";

import * as manageSetAction from "../../../redux/actions/manageSetAction";
import * as glanceSetAction from "../../../redux/actions/glanceSetAction";
import * as logSetAction from "../../../redux/actions/logSetAction";

import GenericButton from "../../buttons/GenericButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Default extends Component {
  log = () => {
    this.props.dispatch(logSetAction.logJourneySet());
    this.advance();
  };

  glance = () => {
    this.props.dispatch(glanceSetAction.glanceJourneySet());
    this.advance();
  };

  manage = () => {
    this.props.dispatch(manageSetAction.manageJourneySet());
    this.advance();
  };

  advance = () => {
    this.props.dispatch(pageIncAction.incPage());
    this.props.load();
  };

  render() {
    return (
      <Flexbox>
        <div onClick={this.log} data-cy="defaultlog">
          <GenericButton label="Log Income" color="#6672FB" />
        </div>
        <div onClick={this.glance}>
          <GenericButton label="At a Glance" color="#1B79D2" />
        </div>
        <div onClick={this.manage}>
          <GenericButton label="Manage Plans" color="#F8B849" />
        </div>
      </Flexbox>
    );
  }
}

function mapStatetoProps(state) {
  return {};
}

export default connect(mapStatetoProps)(Default);
