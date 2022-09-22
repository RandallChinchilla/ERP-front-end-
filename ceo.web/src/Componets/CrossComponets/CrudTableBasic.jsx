import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAction,
  delAction,
  noAction,
  readAllAction,
  updateAction,
  updateAlert,
} from "../../Actions/Index";
import { deleteAction } from "../../Helpers/deleteHelper";
import { helpHttp } from "../../Helpers/HelpHttp";
import { postAction } from "../../Helpers/postHelper";
import { putAction } from "../../Helpers/putHelper";
import { tableStyle } from "../Cartera Pasiva/Interfaces/interfacesPasOrigenAportante";

const baseUrl = process.env.REACT_APP_BASE_URL;
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const CrudTableBasic = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;
  const { alert } = state.alert;
  const [error, seterror] = useState(null);

  /**
   * Realizamos la peticion GET al Api y ejecutamos el action
   * readAllAction el cual crea el estado inicial que contiene la lista
   * de datos retornados por la Api.
   */

  let url = `${baseUrl}${props.apiRoutes.get}`;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch(readAllAction(res));
        } else {
          dispatch(noAction());
          seterror(res);
        }
      });
  }, [url, useDispatch]);

  /**
   * Esta funcion realiza la conexion con el Api, agrega un registro y actualiza
   * el estado inicial por medio del dispatch y la acción createAction
   * @param {rowAdd} Parametro que contiene los datos que vamos a agregar
   */
  const addRow = (rowAdd) => {
    // console.log(rowAdd);
    postAction(props.apiRoutes.add, rowAdd, userLoggedToken).then((res) => {
      console.log(res);
      let message = "";
      if (res.IsSuccess) {
        console.log(res);
        dispatch(createAction(res.Result));
        dispatch(
          updateAlert({
            ...alert,
            open: true,
            severity: "success",
            message: res.Message,
          })
        );
      } else {
        dispatch(
          updateAlert({
            ...alert,
            open: true,
            severity: "error",
            message: res.Message,
          })
        );
      }
    });
  };

  /**
   * Esta funcion realiza la conexion con el Api, actualiza un registro y actualiza
   * el estado inicial por medio del dispatch y la acción updateAction
   * @param {*} rowUpdate item de la lista a actualizar
   */
  const updateRow = (rowUpdate) => {
    //console.log(rowUpdate);
    putAction(props.apiRoutes.update, rowUpdate, userLoggedToken).then(
      (res) => {
        if (res.isSuccess) {
          dispatch(updateAction(rowUpdate, props.field));
          dispatch(
            updateAlert({
              ...alert,
              open: true,
              severity: "success",
              message: res.message,
            })
          );
        } else {
          dispatch(noAction());
          dispatch(
            updateAlert({
              ...alert,
              open: true,
              severity: "success",
              message: res.message,
            })
          );
        }
      }
    );
  };

  /**
   * Esta funcion realiza la conexion con el Api, elimina un registro y actualiza
   * el estado inicial por medio del dispatch y la acción delAction
   * @param {*} rowDelete
   */
  const deleteRow = (rowDelete) => {
    console.log(rowDelete);
    deleteAction(props.apiRoutes.delete, rowDelete, userLoggedToken).then(
      (res) => {
        if (res.isSuccess) {
          dispatch(delAction(rowDelete[props.field], props.field));
          dispatch(
            updateAlert({
              ...alert,
              open: true,
              severity: "success",
              message: res.message,
            })
          );
        } else {
          dispatch(noAction());
          dispatch(
            updateAlert({
              ...alert,
              open: true,
              severity: "error",
              message: res.message,
            })
          );
        }
      }
    );
  };

  return (
    <div>
      <MaterialTable
        title={props.title}
        columns={props.columns}
        data={db}
        options={tableStyle}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                addRow(newData);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...db];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                resolve();
                updateRow(dataUpdate[index]);
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...db];
                const index = oldData.tableData.id;
                deleteRow(dataDelete[index]);
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
};
