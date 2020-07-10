import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import ReactLoading from "react-loading";

import ActionPanelLeft from "../molecules/ActionPanelLeft";
import ActionPanelRight from "../molecules/ActionPanelRight";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;

  width: 780px;
  height: 203px;
  background-color: rgba(102, 139, 251, 0.13);
  margin: 10px 0 15px 0;
  overflow: hidden;
`;

const LoadingStyle = {
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  gridColumn: "1 / -1"
};

class ActionsBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  // Conditional rendering needed here

  falseLoad = () => {
    this.setState({ loading: !this.state.loading });
    setTimeout(() => {
      this.setState({ loading: !this.state.loading });
    }, 300);
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Grid>
            <div style={LoadingStyle}>
              <ReactLoading type="spin" color="#5564A0" width={60} />
            </div>
          </Grid>
        ) : (
          <Grid>
            <ActionPanelLeft load={this.falseLoad} />
            <ActionPanelRight />
          </Grid>
        )}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    storepage: state.page,
    storejourney: state.journey,
    storehour: state.hour,
    storesale: state.sale
  };
}

export default connect(mapStatetoProps)(ActionsBox);
