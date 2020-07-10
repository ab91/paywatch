import React from "react";

import styled from "styled-components";

import { DatePicker } from "@blueprintjs/datetime";

const Box = styled.div``;

const Calendar = props => {
  return <DatePicker highlightCurrentDay={true} canClearSelection={false} />;
};

export default Calendar;
