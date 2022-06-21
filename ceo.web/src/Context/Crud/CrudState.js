import React, { useReducer } from "react";
import { helpHttp } from "../../Helpers/HelpHttp";
import CrudContext from "./CrudContext";
import CrudReducer from "./CrudReducer";
import { GET_ITEM, GET_LIST, SET_ITEM } from "./Types";

const CrudState = (props) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const initialState = {
    listData: [],
    selectItem: null,
  };

  const [state, dispatch] = useReducer(CrudReducer, initialState);

  const getData = async (controller) => {
    try {
      let url = `${baseUrl}${controller}`;
      helpHttp()
        .get(url)
        .then((res) => {
          if (!res.err) {
            dispatch({ type: GET_LIST, payload: res });
          }
        });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const getDataItem = async (controller, model) => {
    try {
      let url = new URL(`${baseUrl}${controller}`);
      url.search = new URLSearchParams(model);
      let options = {
        headers: {
          //Autorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      };
      helpHttp()
        .get(url, options)
        .then((res) => {
          if (!res.err) {
            dispatch({ type: GET_ITEM, payload: res });
          }
        });
    } catch (error) {}
  };

  return (
    <CrudContext.Provider
      value={{
        listData: state.listData,
        selectItem: state.selectItem,
        getData,
        //getDataItem,
        getDataItem,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};
export default CrudState;
