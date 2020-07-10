export default function nameReducer(state, action) {
  if (typeof state === "undefined") {
    state = "User";
  }
  switch (action.type) {
    case "SAVE_NAME":
      return state;
    default:
      return state;
  }
}
