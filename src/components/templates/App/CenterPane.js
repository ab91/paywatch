import React from "react";

import styled from "styled-components";
import posed from "react-pose";
import ReactTooltip from "react-tooltip";
import ReactLoading from "react-loading";

import DateLabel from "../../titles/DateLabel";
import InspirationBox from "../../organisms/InspirationBox";
import SectionTitle from "../../titles/SectionTitle";
import ActionsBox from "../../organisms/ActionsBox";
import RecentBarChart from "../../charts/RecentBarChart";

const Box = styled.div`
  height: 100%;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimatedDiv = posed.div({
  enter: {
    y: 0,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 30 }
    }
  },
  exit: {
    y: 800,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 30 }
    }
  }
});

const Width = {
  width: "780px"
};

const VizStyle = {
  position: "fixed"
};

const LoadingStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

const FlexChild = {
  flex: "1"
};

class CenterPane extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: !this.state.loading });
    }, 1500);
  }

  render() {
    return (
      <div style={FlexChild}>
        {this.state.loading ? (
          <Box>
            <div style={Width}>
              <DateLabel />
            </div>
            <InspirationBox />
            <div style={Width}>
              <SectionTitle title="Actions" />
            </div>
            <ActionsBox />
            <div style={Width}>
              <SectionTitle title="Live View" />
            </div>
            <RecentBarChart />
          </Box>
        ) : (
          <div style={LoadingStyle}>
            <ReactLoading type="spin" color="#5564A0" width={50} />
          </div>
        )}
      </div>
    );
  }
}

export default CenterPane;
