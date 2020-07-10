import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Text = styled.p`
  display: inline;
  font-family: Muli;
  font-size: 17px;
  font-weight: 575;
  margin-left: 31px;
  color: ${props => props.theme.maintext};
`;

const SectionTitle = props => {
  return <Text>{props.title}</Text>;
};

function mapStatetoProps(state) {
  return { storemode: state.darkmode };
}

export default connect(mapStatetoProps)(SectionTitle);
