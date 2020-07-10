export default function toggleReducer(state, action) {
  if (typeof state === "undefined") {
    state = false;
  }
  switch (action.type) {
    case "TOGGLE_COLOR":
      return !state;
    case "RESET_COLOR":
      return (state = false);
    default:
      return state;
  }
}
