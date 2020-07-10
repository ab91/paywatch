import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import * as pageIncAction from "../../../redux/actions/pageIncAction";
import * as pageDecAction from "../../../redux/actions/pageDecAction";
import * as pageResetAction from "../../../redux/actions/pageResetAction";
import * as resetSetAction from "../../../redux/actions/resetSetAction";

import GenericButton from "../../buttons/GenericButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Log1 extends Component {
  advance = () => {
    this.props.dispatch(pageIncAction.incPage());
    this.props.load();
  };

  retreat = () => {
    var page = this.props.storepage;
    if (page == 1) {
      this.props.dispatch(pageResetAction.resetPage());
      this.props.dispatch(resetSetAction.resetJourneySet());
    } else if (page == 2) {
      this.props.dispatch(pageDecAction.decPage());
    }
    this.props.load();
  };

  render() {
    return (
      <Flexbox>
        <div onClick={this.advance} data-cy="log1btn">
          <GenericButton label="Next" color="#1B79D2" />
        </div>
        <div onClick={this.retreat}>
          <GenericButton label="Back" color="#949494" />
        </div>
      </Flexbox>
    );
  }
}

function mapStatetoProps(state) {
  return { storepage: state.page };
}

export default connect(mapStatetoProps)(Log1);
