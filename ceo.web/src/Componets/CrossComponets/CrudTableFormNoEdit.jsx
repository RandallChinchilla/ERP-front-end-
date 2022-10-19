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

export const CrudTableFormNoEdit = (props) => {
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

  return (
    <div>
      <MaterialTable
        title={props.title}
        columns={props.columns}
        data={db}
        options={tableStyle}
        actions={[
          {
            icon: "visibility",
            tooltip: "Ver Maestro",
            onClick: (event, rowData) => updateRow(rowData, false),
          },
        ]}
      />
    </div>
  );
};
