import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { ToastContainer, toast, Slide } from "react-toastify";

import * as pageResetAction from "../../../redux/actions/pageResetAction";
import * as resetSetAction from "../../../redux/actions/resetSetAction";

import GenericButton from "../../buttons/GenericButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const toastList = new Set();

class At1 extends Component {
  reset = () => {
    this.props.dispatch(pageResetAction.resetPage());
    this.props.dispatch(resetSetAction.resetJourneySet());
    this.props.load();
  };

  notify = () => {
    if (toastList.size < 1) {
      const id = toast.info("Feature Currently Unavailable", {
        onClose: () => toastList.delete(id)
      });
      toastList.add(id);
    }
  };

  render() {
    return (
      <Flexbox>
        <div onClick={this.notify}>
          <GenericButton label="Weekly" color="#1B79D2" />
        </div>
        <div onClick={this.notify}>
          <GenericButton label="Monthly" color="#1B79D2" />
        </div>
        <div onClick={this.reset}>
          <GenericButton label="Back" color="#949494" />
        </div>
      </Flexbox>
    );
  }
}

function mapStatetoProps(state) {
  return {};
}

export default connect(mapStatetoProps)(At1);
