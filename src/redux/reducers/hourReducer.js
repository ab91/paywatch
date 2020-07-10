export default function hourReducer(state, action) {
  if (typeof state === "undefined") {
    state = 0;
  }
  switch (action.type) {
    case "HOUR_ADD":
      return (state = action.payload);
    case "HOUR_RESET":
      return (state = 0);
    default:
      return state;
  }
}
