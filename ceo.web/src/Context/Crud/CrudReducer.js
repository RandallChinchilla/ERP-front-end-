import { GET_ITEM, GET_LIST, SET_ITEM } from "./Types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_LIST:
      return {
        ...state,
        listData: payload,
      };
    case GET_ITEM:
      return {
        ...state,
        selectItem: payload,
      };

    default:
      return state;
  }
};
