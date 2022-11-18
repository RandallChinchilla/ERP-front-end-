import { UPDATE_ALERT } from "../Types/Index";

export const initialState = {
  alert: {
    open: false,
    severity: "info",
    message: "",
    posV: "bottom",
    posH: "center",
    variant: "filled",
    autoHideDuration: 4000,
  },
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALERT: {
      return { ...state, alert: action.payload };
    }
    default:
      return state;
  }
}
