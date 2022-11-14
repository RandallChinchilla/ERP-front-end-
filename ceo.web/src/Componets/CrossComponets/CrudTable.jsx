import MaterialTable from "material-table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAction,
  delAction,
  noAction,
  updateAction,
  updateAlert,
} from "../../Actions/Index";
import { deleteAction } from "../../Helpers/deleteHelper";
import { postAction } from "../../Helpers/postHelper";
import { putAction } from "../../Helpers/putHelper";
import { useGetData } from "../../Hooks/useGetData";
import { tableStyle } from "../Recursos Humanos/Styles/styleRHHMaestroTab";

export const CrudTable = ({
  columns,
  apiRoutes,
  field,
  title,
  isEditable,
  isDeletable,
  isAdd,
}) => {
  const userLoggedToken = localStorage.getItem("mytoken");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state.alert;
  //const { usertoken } = state.user;

  const { Data, Error } = useGetData(apiRoutes.get);
  if (Error) return null;
  if (!Data) return null;

  console.log(Data);

  /**
   * Esta funcion realiza la conexion con el Api, agrega un registro y actualiza
   * el estado inicial por medio del dispatch y la acción createAction
   * @param {rowAdd} Parametro que contiene los datos que vamos a agregar
   */
  const addRow = (rowAdd) => {
    console.log(rowAdd);
    postAction(apiRoutes.add, rowAdd, userLoggedToken).then((res) => {
      let message = "";
      if (res.IsSuccess) {
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
    putAction(apiRoutes.update, rowUpdate, userLoggedToken).then((res) => {
      if (res.IsSuccess) {
        //dispatch(updateAction(rowUpdate, field));
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
            severity: "success",
            message: res.Message,
          })
        );
      }
    });
  };
  /**
   * Esta funcion realiza la conexion con el Api, elimina un registro y actualiza
   * el estado inicial por medio del dispatch y la acción delAction
   * @param {*} rowDelete
   */
  const deleteRow = (rowDelete) => {
    console.log(rowDelete);
    deleteAction(apiRoutes.delete, rowDelete, userLoggedToken).then((res) => {
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
        data={Data}
        options={tableStyle}
        editable={{
          isEditable: () => isEditable,
          isDeletable: () => isDeletable,
          onRowAdd: isAdd
            ? (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    addRow(newData);
                    resolve();
                  }, 1000);
                })
            : undefined,
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...Data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                resolve();
                updateRow(dataUpdate[index]);
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...Data];
                const index = oldData.tableData.id;
                deleteRow(dataDelete[index]);
                resolve();
              }, 1000);
            }),
        }}
      ></MaterialTable>
    </div>
  );
};
