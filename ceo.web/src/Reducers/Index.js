import { combineReducers } from "redux";
import { crudReducer } from "./crudReducer";
import { notificationReducer } from "./notificationReducer";
import { userReducer } from "./userReducer";

const reducer = combineReducers({
  crud: crudReducer,
  alert: notificationReducer,
  user: userReducer,
});

export default reducer;
