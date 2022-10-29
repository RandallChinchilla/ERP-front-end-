import { GET_TOKEN, GET_USER } from "../Types/Index";

export const initialUserData = {};

export function userReducer(state = initialUserData, action) {
  switch (action.type) {
    case GET_USER: {
      return { ...state, userdata: action.payload };
    }
    case GET_TOKEN: {
      return { ...state, usertoken: action.payload };
    }
    default:
      return state;
  }
}
