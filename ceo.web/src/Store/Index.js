import { legacy_createStore as createStore } from "redux";
import reducer from "../Reducers/Index";

const store = createStore(reducer);
store.subscribe(() => console.log(store));

export default store;
