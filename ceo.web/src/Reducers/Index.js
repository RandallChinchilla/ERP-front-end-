import { combineReducers } from "redux";
import { crudReducer } from "./crudReducer";
import { notificationReducer } from "./notificationReducer";

const reducer = combineReducers({
  crud: crudReducer,
  alert: notificationReducer,
});

export default reducer;
