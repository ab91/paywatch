import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import moment from "moment";

const Size = {
  height: "200px",
  width: "750px",
  marginTop: "-55px"
};

class RecentBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { day: 1, earnings: 230 },
        { day: 2, earnings: 165 },
        { day: 3, earnings: 185 }
      ]
    };
  }

  calculate = (hours, sales) => {
    let total = hours * 12.5 + sales * 20.75;
    let tax = total * 0.12;
    let grandTotal = total - tax;
    return grandTotal;
  };

  updateValues = () => {
    let stateCopy = [...this.state.data];

    if (stateCopy.length == 4) {
      stateCopy.pop();

      let newObject = {
        day: 4,
        earnings: this.calculate(this.props.storehour, this.props.storesale)
      };

      stateCopy.push(newObject);

      this.setState({
        data: stateCopy
      });
    }

    if (stateCopy.length == 3) {
      let newObject = {
        day: 4,
        earnings: this.calculate(this.props.storehour, this.props.storesale)
      };

      this.setState({
        data: [...this.state.data, newObject]
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.storehour !== this.props.storehour ||
      prevProps.storesale !== this.props.storesale
    ) {
      this.updateValues();
    }
  }

  render() {
    const dayArray = [];
    var i;
    for (i = -3; i < 2; i++) {
      dayArray.push(
        moment()
          .add(i, "d")
          .format("dddd")
      );
    }

    return (
      <>
        <div style={Size}>
          <VictoryChart domainPadding={30} animate={{ duration: 500 }}>
            <VictoryAxis
              tickFormat={dayArray}
              style={{
                tickLabels: {
                  fontSize: 8,
                  fontFamily: "Muli",
                  fontWeight: "bold"
                },
                axis: { stroke: "#B0B0B0" }
              }}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={x => `$${x}`}
              style={{
                tickLabels: {
                  fontSize: 8,
                  fontFamily: "Muli",
                  fontWeight: "bold"
                },
                axis: { stroke: "none" },
                grid: { stroke: "#B0B0B0", strokeWidth: 0.5 }
              }}
            />
            <VictoryBar
              data={this.state.data}
              x="day"
              y="earnings"
              style={{ data: { fill: "#FF9121" } }}
              cornerRadius={3}
              barWidth={33}
            />
          </VictoryChart>
        </div>
      </>
    );
  }
}

function mapStatetoProps(state) {
  return { storehour: state.hour, storesale: state.sale };
}

export default connect(mapStatetoProps)(RecentBarChart);
