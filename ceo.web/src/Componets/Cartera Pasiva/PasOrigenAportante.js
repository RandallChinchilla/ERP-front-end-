import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { putAction } from "../../Helpers/putHelper";
import { postAction } from "../../Helpers/postHelper";
import { useDispatch } from "react-redux";
import { helpHttp } from "../../Helpers/HelpHttp";
import { useSelector } from "react-redux";
import {
  createAction,
  delAction,
  noAction,
  readAllAction,
  updateAction,
} from "../../Actions/Index";
import { deleteAction } from "../../Helpers/deleteHelper";

const baseUrl = process.env.REACT_APP_BASE_URL;
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Este componente realiza el CRUD sobre OrigenAportante su estado inicial es modificado
 * mediante Redux
 * @returns
 */

const ParOrigenAportante = () => {
  const { useState } = React;
  // const styles = useStyles();
  const [error, seterror] = useState(null);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  /**
   * Creamos las columnas que va a tener la tabla y asignamos
   * a la propiedad field el campo correspondiente a la respuesta
   * que nos da la Api.
   */
  const [columns, setColumns] = useState([
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
      initialEditValue: userData.codigoEmpresa,
      editable: "never",
    },
    {
      title: "Nombre",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
      initialEditValue: userData.nombreEmpresa,
      editable: "never",
    },
    {
      title: "Código Origen Aportante",
      field: "CodigoOrigenAportante",
      initialEditValue: 0,
      editable: "never",
    },
    { title: "Descripción", field: "Descripcion" },
  ]);

  /**
   * Realizamos la peticion GET al Api y ejecutamos el action
   * readAllAction el cual crea el estado inicial que contiene la lista
   * de datos retornados por la Api.
   */

  let url = `${baseUrl}PasOrigenAportante/GetPasOrigenAportantes`;
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
  const addFondos = (rowAdd) => {
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
  /**
   * Esta funcion realiza la conexion con el Api, actualiza un registro y actualiza
   * el estado inicial por medio del dispatch y la acción updateAction
   * @param {*} rowUpdate item de la lista a actualizar
   */
  const updateState = (rowUpdate) => {
    //console.log(rowUpdate);
    putAction(
      "PasOrigenAportante/PutPasOrigenAportante",
      rowUpdate,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(updateAction(rowUpdate, "CodigoOrigenAportante"));
        return alert(res.message);
      } else {
        dispatch(noAction());
        return alert(res.message);
      }
    });
  };

  /**
   * Esta funcion realiza la conexion con el Api, elimina un registro y actualiza
   * el estado inicial por medio del dispatch y la acción delAction
   * @param {*} rowDelete
   */
  const deleteState = (rowDelete) => {
    console.log(rowDelete);
    deleteAction(
      "PasOrigenAportante/DeletePasOrigenAportante",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.CodigoOrigenAportante, "CodigoOrigenAportante"));
        return alert(res.message);
      } else {
        dispatch(noAction());
        return alert(res.message);
      }
    });
  };

  return (
    <div>
      <MaterialTable
        title=" Catálogo Origen Aportante"
        columns={columns}
        data={db}
        options={{
          rowStyle: {
            fontSize: 12,
          },
          headerStyle: {
            backgroundColor: "#898883",
            color: "#FFF",
            fontSize: 13,
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                addFondos(newData);
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
                updateState(dataUpdate[index]);
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...db];
                const index = oldData.tableData.id;
                deleteState(dataDelete[index]);
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
};

export default ParOrigenAportante;