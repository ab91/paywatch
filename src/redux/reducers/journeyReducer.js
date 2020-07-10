export default function journeyReducer(state, action) {
  if (typeof state === "undefined") {
    state = "DEFAULT";
    //state = "LOG";
  }
  switch (action.type) {
    case "JOURNEY_LOG":
      return (state = "LOG");
    case "JOURNEY_GLANCE":
      return (state = "GLANCE");
    case "JOURNEY_MANAGE":
      return (state = "MANAGE");
    case "JOURNEY_DEFAULT":
      return (state = "DEFAULT");
    default:
      return state;
  }
}
