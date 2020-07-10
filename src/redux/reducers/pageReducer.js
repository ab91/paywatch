export default function pageReducer(state, action) {
  if (typeof state === "undefined") {
    state = 0;
    //state = 3;
  }
  switch (action.type) {
    case "INC_PAGE":
      return state + 1;
    case "DEC_PAGE":
      return state - 1;
    case "RESET_PAGE":
      return (state = 0);
    default:
      return state;
  }
}
