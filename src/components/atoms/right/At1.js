import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.actionbox};
`;

const Note = styled.p`
  font-size: 1.1em;
  margin-top: 20px;
`;

class At1 extends Component {
  render() {
    var hours = this.props.storehour;
    var sales = this.props.storesale;
    var base, com, tax;

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
      <Flexbox>
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
        <Note>
          Demo Commission Plan currently selected.
          <br />
          Base Pay calculated based on
          {this.props.storehour == 8 ? <span> an </span> : <span> a </span>}
          {this.props.storehour} hour workday.
        </Note>
      </Flexbox>
    );
  }
}

function mapStatetoProps(state) {
  return { storehour: state.hour, storesale: state.sale };
}

export default connect(mapStatetoProps)(At1);
