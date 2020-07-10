export default function calendarReducer(state, action) {
  if (typeof state === "undefined") {
    state = false;
  }
  switch (action.type) {
    case "CALENDAR_TOGGLE":
      return !state;
    default:
      return state;
  }
}
