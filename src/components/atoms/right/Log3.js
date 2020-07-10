import React, { Component } from "react";
import { connect } from "react-redux";

import * as hourAddAction from "../../../redux/actions/hourAddAction";
import * as saleAddAction from "../../../redux/actions/saleAddAction";

import * as resetHourAction from "../../../redux/actions/resetHourAction";
import * as resetSaleAction from "../../../redux/actions/resetSaleAction";

import { EditableText } from "@blueprintjs/core";

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  font-family: Muli;
  font-size: 1.1em;
`;

const CTA = styled.p`
  font-family: Muli;
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  color: ${props => props.theme.actionbox};
  padding-bottom: 7px;
`;

const Table = styled.div`
  justify-self: center;
  grid-column: 1 / -1;
`;

const Centering = {
  alignSelf: "center",
  justifySelf: "center"
};

class Log3 extends Component {
  updateHours = event => {
    let hours = parseInt(event.currentTarget.value);
    this.props.dispatch(hourAddAction.addHour(hours));
  };

  updateSales = value => {
    let input = event.target.value.replace(/[\W|\D]/g, "");
    if (input == "") {
      input = 0;
    }
    this.props.dispatch(saleAddAction.addSale(input));
  };

  componentDidMount() {
    this.props.dispatch(resetHourAction.resetHours());
    this.props.dispatch(resetSaleAction.resetSales());
  }

  render() {
    let hours = this.props.storehour;
    let sales = this.props.storesale;
    let base, com, tax;

    this.calcBase = hours => {
      return (base = parseInt((hours * 12.5).toFixed(2)));
    };

    this.calcCom = sales => {
      return (com = parseInt((sales * 20.75).toFixed(2)));
    };

    this.calcTax = () => {
      return parseInt((tax = (base + com) * 0.12));
    };

    this.calcTotal = () => {
      return parseInt(base + com - tax);
    };

    return (
      <Grid>
        <div style={Centering} data-cy="hours">
          <CTA>Hours worked:</CTA>
          {/* Using the HTML version as the React version from this library was overkill */}
          <div className="bp3-select bp3-minimal bp3-fill">
            <select onChange={this.updateHours}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div style={Centering} data-cy="sales">
          <CTA>Number of sales:</CTA>
          <EditableText
            maxLength={3}
            onChange={this.updateSales}
            value={this.props.statesale}
          />
        </div>
        <Table>
          <table className="bp3-html-table bp3-html-table-bordered bp3-html-table-condensed">
            <thead>
              <tr>
                <th>Base Pay</th>
                <th>Commissions</th>
                <th>Taxes</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${this.calcBase(hours)}</td>
                <td>${this.calcCom(sales)}</td>
                <td>${this.calcTax()}</td>
                <td>${this.calcTotal()}</td>
              </tr>
            </tbody>
          </table>
        </Table>
      </Grid>
    );
  }
}

function mapStatetoProps(state) {
  return { storehour: state.hour, storesale: state.sale };
}

export default connect(mapStatetoProps)(Log3);
