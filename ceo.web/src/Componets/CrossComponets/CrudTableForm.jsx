import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  delAction,
  noAction,
  readAllAction,
  updateAlert,
} from "../../Actions/Index";
import { deleteAction } from "../../Helpers/deleteHelper";
import { helpHttp } from "../../Helpers/HelpHttp";
import { useGetData } from "../../Hooks/useGetData";
import { tableStyle } from "../Cartera Pasiva/Interfaces/interfacesPasOrigenAportante";

//const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const CrudTableForm = ({ columns, apiRoutes, field, title }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const userLoggedToken = localStorage.getItem("mytoken");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;
  //const { usertoken } = state.user;
  const { alert } = state.alert;
  // const [data, setData] = useState([]);
  //const [error, seterror] = useState(null);
  let usehistory = useHistory();

  /**
   * Realizamos la peticion GET al Api y ejecutamos el action
   * readAllAction el cual crea el estado inicial que contiene la lista
   * de datos retornados por la Api.
   */

  let url = `${baseUrl}${apiRoutes.get}`;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.err) return null;
        console.log(res);
        dispatch(readAllAction(res));
      });
  }, [url, useDispatch]);

  // const { Data, Error } = useGetData(apiRoutes.get);
  // if (Error) return null;
  // if (!Data) return null;

  // console.log(Data);

  /**
   * Esta funcion agrega o actualiza una fila a la tabla
   * @param rowUpdate objeto que contiene la informacón de la fila que se actualizara
   * @param isNew parametro que define si el componente al que se redirecciona se dispone a realizar
   * una acción de actulización o creación.
   */

  const updateRow = (rowUpdate, isNew) => {
    if (isNew) {
      usehistory.push(apiRoutes.navigation);
    } else {
      usehistory.push({ pathname: apiRoutes.navigation, rowUpdate });
    }
  };

  /**
   * Esta funcion realiza la conexion con el Api, elimina un registro y actualiza
   * el estado inicial por medio del dispatch y la acción delAction
   * @param {*} rowDelete
   */
  const deleteRow = (rowDelete) => {
    const rowdelete = {
      Id: rowDelete[field],
      CodigoEmpresa: rowDelete.CodigoEmpresa,
    };

    deleteAction(apiRoutes.delete, rowdelete, userLoggedToken).then((res) => {
      if (res.IsSuccess) {
        dispatch(delAction(rowDelete[field], field));
        dispatch(
          updateAlert({
            ...alert,
            open: true,
            severity: "success",
            message: res.Message,
          })
        );
      } else {
        dispatch(noAction());
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

  return (
    <div key={title}>
      <MaterialTable
        title={title}
        columns={columns}
        data={db}
        // options={tableStyle}
        actions={[
          {
            icon: "edit",
            tooltip: "Editar",
            onClick: (event, rowData) => updateRow(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar",
            onClick: (event, rowData) => deleteRow(rowData),
          },
          {
            icon: "add",
            tooltip: "Nuevo",
            isFreeAction: true,
            onClick: (event, rowData) => updateRow(rowData, true),
          },
        ]}
      />
    </div>
  );
};
