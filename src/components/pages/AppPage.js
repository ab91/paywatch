import React, { Component } from "react";
import { connect } from "react-redux";

import styled, { ThemeProvider } from "styled-components";

import LeftPane from "../templates/App/LeftPane";
import CenterPane from "../templates/App/CenterPane";
import RightPane from "../templates/App/RightPane";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  background-color: ${props => props.theme.centerpanebg};
`;

const dark = {
  maintext: "#DBDBDB",
  rightpanebg: "#060B10",
  centerpanebg: "#03111F",
  leftpanebg: "#00021B",
  text: "#BDBDBD",
  inspbox: "#FFFFFF",
  actionboxinfo: "#BDBDBD",
  milestone: "#F8F8F8",
  actionbox: "#FFFFFF"
};

const light = {
  maintext: "#333539",
  rightpanebg: "#EFEFEF",
  centerpanebg: "#FFFFFF",
  leftpanebg: "#121432",
  text: "#333539",
  inspbox: "#333539",
  actionboxinfo: "#959595",
  milestone: "#FFFFFF",
  actionbox: "#545454"
};

class AppPage extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.storemode ? dark : light}>
        <Flexbox>
          <LeftPane />
          <CenterPane />
          <RightPane />
        </Flexbox>
      </ThemeProvider>
    );
  }
}

function mapStatetoProps(state) {
  return { storename: state.name, storemode: state.darkmode };
}

export default connect(mapStatetoProps)(AppPage);
