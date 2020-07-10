import React, { Component } from "react";
import { connect } from "react-redux";
import * as toggleAction from "../../redux/actions/toggleAction";

import styled from "styled-components";

import ReactTooltip from "react-tooltip";
import { ToastContainer, toast, Slide } from "react-toastify";

import UserItem from "../atoms/UserItem";

import RingBuoy from "../icons/RingBuoy";
import Bulb from "../icons/Bulb";
import Speaker from "../icons/Speaker";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 10%;
  width: 350px;
`;

const toastList = new Set();

class Admin extends Component {
  toggleState = () => {
    this.props.dispatch(toggleAction.toggleColors());
    if (toastList.size < 1 && this.props.storemode == false) {
      const id = toast.info("Feature In Progress", {
        onClose: () => toastList.delete(id)
      });
      toastList.add(id);
    }
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
      <div data-cy="admin">
        <ToastContainer
          autoClose={2500}
          newestOnTop={true}
          draggable={false}
          transition={Slide}
          position="top-center"
        />
        <Flexbox>
          <div onClick={this.notify}>
            <a data-tip data-for="question">
              <RingBuoy fill={this.props.storemode ? "#DBDBDB" : "#333539"} />
            </a>
            <ReactTooltip
              id="question"
              place="bottom"
              effect="solid"
              type="dark"
            >
              Support
            </ReactTooltip>
          </div>
          <div>
            <a data-tip data-for="colorToggle" data-cy="darktoggle">
              <Bulb
                onClick={this.toggleState}
                fill={this.props.storemode ? "#DBDBDB" : "#333539"}
              />
            </a>
            <ReactTooltip
              id="colorToggle"
              place="bottom"
              effect="solid"
              type="dark"
            >
              {this.props.storemode == false ? "Dark Mode" : "Light Mode"}
            </ReactTooltip>
          </div>
          <div onClick={this.notify}>
            <a data-tip data-for="notification">
              <Speaker fill={this.props.storemode ? "#DBDBDB" : "#333539"} />
            </a>
            <ReactTooltip
              id="notification"
              place="bottom"
              effect="solid"
              type="dark"
            >
              Notifications
            </ReactTooltip>
          </div>
          <UserItem name={this.props.storename} />
        </Flexbox>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { storemode: state.darkmode, storename: state.name };
}

export default connect(mapStatetoProps)(Admin);
