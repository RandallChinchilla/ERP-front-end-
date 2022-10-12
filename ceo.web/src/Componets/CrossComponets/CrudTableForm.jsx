import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

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

export const CrudTableForm = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;
  const { alert } = state.alert;
  const [error, seterror] = useState(null);
  let usehistory = useHistory();

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
   * Esta funcion agrega o actualiza una fila a la tabla
   * @param rowUpdate objeto que contiene la informacón de la fila que se actualizara
   * @param isNew parametro que define si el componente al que se redirecciona se dispone a realizar
   * una acción de actulización o creación.
   */

  const updateRow = (rowUpdate, isNew) => {
    if (isNew) {
      usehistory.push(props.apiRoutes.navigation);
    } else {
      usehistory.push({ pathname: props.apiRoutes.navigation, rowUpdate });
    }
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

  console.log(db);

  return (
    <div>
      <MaterialTable
        title={props.title}
        columns={props.columns}
        data={db}
        options={tableStyle}
        actions={[
          {
            icon: "edit",
            tooltip: "Editar Instrumentos",
            onClick: (event, rowData) => updateRow(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Instrumentos",
            onClick: (event, rowData) => deleteRow(rowData),
          },
          {
            icon: "add",
            tooltip: "Nuevo Instrumento",
            isFreeAction: true,
            onClick: (event, rowData) => updateRow(rowData, true),
          },
        ]}
      />
    </div>
  );
};
