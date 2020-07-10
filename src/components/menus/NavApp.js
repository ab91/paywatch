import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";

import * as resetToggleAction from "../../redux/actions/resetToggleAction";
import * as pageResetAction from "../../redux/actions/pageResetAction";
import * as resetSetAction from "../../redux/actions/resetSetAction";
import * as resetHourAction from "../../redux/actions/resetHourAction";
import * as resetSaleAction from "../../redux/actions/resetSaleAction";

import Logo from "../atoms/Logo";
import NavItem from "../atoms/NavItem";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.leftpanebg};
  width: 215px;
  height: 100vh;
`;

class NavApp extends Component {
  clean = () => {
    this.props.dispatch(resetToggleAction.resetToggleColors());
    this.props.dispatch(pageResetAction.resetPage());
    this.props.dispatch(resetSetAction.resetJourneySet());
    this.props.dispatch(resetHourAction.resetHours());
    this.props.dispatch(resetSaleAction.resetSales());
  };

  render() {
    return (
      <Flexbox>
        <Logo />
        <NavItem active={true} label="Home" onClick={this.clean} />
        <Link to="/" onClick={this.clean}>
          <NavItem onClick={this.clean} active={false} label="Log Out" />
        </Link>
      </Flexbox>
    );
  }
}

function mapStatetoProps(state) {
  return {};
}

export default connect(mapStatetoProps)(NavApp);
