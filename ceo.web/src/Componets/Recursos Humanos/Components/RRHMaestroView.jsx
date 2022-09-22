import React, { useEffect, useState } from "react";
import { useGetData } from "../../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import { helpHttp } from "../../../Helpers/HelpHttp";
import { useDispatch, useSelector } from "react-redux";
import { delAction, noAction, readAllAction } from "../../../Actions/Index";
import { deleteAction } from "../../../Helpers/deleteHelper";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "RrhMaestro/GetRrhMaestros";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const RRHMaestroView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  //window.localStorage.removeItem("editPasInstrumento");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [columns, setColumns] = useState([
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
    },
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    {
      title: "Número Empleado",
      field: "NumeroEmpleado",
    },
    {
      title: "Numero Id",
      field: "NumeroId",
    },
    {
      title: "Nombre",
      field: "Nombre",
    },
    {
      title: "Primer Apellido",
      field: "Apellido1",
    },
    {
      title: "Segundo Apellido",
      field: "Apellido2",
    },
  ]);

  let url = `${baseUrl}${controller}`;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch(readAllAction(res));
        } else {
          dispatch(noAction());
        }
      });
  }, [url, useDispatch]);

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    //console.log(rowUpdate);
    if (isNew) {
      usehistory.push(`./RRHMaestro`);
    } else {
      usehistory.push({ pathname: "./RRHMaestro", rowUpdate });
    }
  };
  //  se agrego el componente de eliminar
  const deleteItem = (rowDelete) => {
    deleteAction(
      "RrhMaestro/DeleteRrhMaestro",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.NumeroEmpleado, "NumeroEmpleado"));
        alert("El maestro fue eliminado");
      } else {
        alert("El maestro no fue eliminado");
      }
    });
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Maestro"
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
          exportButton: true,
        }}
        actions={[
          {
            icon: "edit",
            tooltip: "Editar Maestro",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Maestro",
            onClick: (event, rowData) => deleteItem(rowData),
          },
          {
            icon: "add",
            tooltip: "Nuevo Maestro",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};