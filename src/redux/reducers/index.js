import { combineReducers } from "redux";
import darkmode from "./toggleReducer";
import name from "./nameReducer";
import page from "./pageReducer";
import journey from "./journeyReducer";
import calendar from "./calendarReducer";
import hour from "./hourReducer";
import sale from "./saleReducer";

const rootReducer = combineReducers({
  darkmode,
  name,
  page,
  journey,
  calendar,
  hour,
  sale
});

export default rootReducer;
