import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../Actions/Index";
import { postAction } from "../Helpers/postHelper";

export const useCrud = () => {
  const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  /**
   * Esta funcion realiza la conexion con el Api, agrega un registro y actualiza
   * el estado inicial por medio del dispatch y la acción createAction
   * @param {rowAdd} Parametro que contiene los datos que vamos a agregar
   */
  const addRow = (rowAdd, controller) => {
    // console.log(rowAdd);
    postAction(
      "PasOrigenAportante/PostPasOrigenAportante",
      rowAdd,
      userLoggedToken
    ).then((res) => {
      console.log(res);
      if (res.IsSuccess) {
        console.log(res);
        dispatch(createAction(res.Result));
        return alert(res.Message);
      } else {
        return alert(res.Message);
      }
    });
  };

  return addRow;
};
