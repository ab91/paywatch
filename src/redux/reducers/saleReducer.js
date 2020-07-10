export default function saleReducer(state, action) {
  if (typeof state === "undefined") {
    state = 0;
  }
  switch (action.type) {
    case "SALE_ADD":
      return (state = action.payload);
    case "SALE_RESET":
      return (state = 0);
    default:
      return state;
  }
}
