import React from "react";

import styled from "styled-components";

const Text = styled.p`
  font-family: Muli;
  font-weight: 575;
  color: ${props => props.theme.maintext};
  font-size: 17px;
  margin: 20px 0 0 31px;
`;

// I used react-moment for all other date-related components
// Just wanted to try it out in vanilla JS

function PrintDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const d = new Date();
  return monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

const DateLabel = () => {
  return <Text>{PrintDate()}</Text>;
};

export default DateLabel;
