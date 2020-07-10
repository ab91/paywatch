import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Panel1 = styled.div`
  align-self: center;
  text-align: center;
`;

const Panel2 = styled.div`
  justify-self: center;
`;

const CTA = styled.p`
  font-family: Muli;
  font-size: 1.2em;
  font-weight: bold;
  color: ${props => props.theme.actionbox};
`;

class Log2 extends Component {
  render() {
    return (
      <Grid>
        <Panel1>
          <CTA>Select your commission plan</CTA>
          <div className="bp3-select">
            <select disabled>
              <option>Demo Plan</option>
            </select>
          </div>
        </Panel1>
        <Panel2>
          <table className="bp3-html-table bp3-html-table-bordered bp3-html-table-condensed">
            <thead>
              <tr>
                <th>Hourly Pay</th>
                <th>Commission per sale</th>
                <th>Tax Bracket</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$12.50</td>
                <td>$20.75</td>
                <td>$9,701 – $39,475</td>
              </tr>
            </tbody>
          </table>
        </Panel2>
      </Grid>
    );
  }
}

function mapStatetoProps(state) {
  return {};
}

export default connect(mapStatetoProps)(Log2);
