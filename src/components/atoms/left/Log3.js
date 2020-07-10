import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { ToastContainer, toast, Slide } from "react-toastify";

import * as pageDecAction from "../../../redux/actions/pageDecAction";
import * as pageResetAction from "../../../redux/actions/pageResetAction";
import * as resetSetAction from "../../../redux/actions/resetSetAction";

import * as resetHourAction from "../../../redux/actions/resetHourAction";
import * as resetSaleAction from "../../../redux/actions/resetSaleAction";

import GenericButton from "../../buttons/GenericButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const toastList = new Set();

class Log3 extends Component {
  submit = () => {
    let patt = /^[0-9]{1,3}$/g;
    if (
      this.props.storehour == 0 ||
      this.props.storesale == 0 ||
      this.props.storesale == null ||
      this.props.storesale == NaN
    ) {
      const id = toast.warning("Missing value(s)", {
        onClose: () => toastList.delete(id)
      });
      toastList.add(id);
    } else if (!patt.test(this.props.storesale)) {
      const id = toast.warning("Invalid value entered", {
        onClose: () => toastList.delete(id)
      });
      toastList.add(id);
    } else {
      const id = toast.success("Income Logged", {
        onClose: () => toastList.delete(id)
      });
      toastList.add(id);

      this.props.dispatch(pageResetAction.resetPage());
      this.props.dispatch(resetSetAction.resetJourneySet());
      this.props.load();
    }
  };

  retreat = () => {
    this.props.dispatch(pageDecAction.decPage());

    this.props.dispatch(resetHourAction.resetHours());
    this.props.dispatch(resetSaleAction.resetSales());

    this.props.load();
  };

  render() {
    return (
      <>
        <Flexbox>
          <ToastContainer
            autoClose={2500}
            newestOnTop={true}
            draggable={false}
            transition={Slide}
            position="top-center"
          />
          <div onClick={this.submit}>
            <GenericButton label="Log" color="#1B79D2" data-cy="log3btn" />
          </div>
          <div onClick={this.retreat}>
            <GenericButton label="Back" color="#949494" />
          </div>
        </Flexbox>
      </>
    );
  }
}

function mapStatetoProps(state) {
  return { storehour: state.hour, storesale: state.sale };
}

export default connect(mapStatetoProps)(Log3);
