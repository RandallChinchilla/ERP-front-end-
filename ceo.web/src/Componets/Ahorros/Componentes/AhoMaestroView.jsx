import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import { helpHttp } from "../../../Helpers/HelpHttp";
import { useDispatch, useSelector } from "react-redux";
import { delAction, noAction, readAllAction } from "../../../Actions/Index";
import { deleteAction } from "../../../Helpers/deleteHelper";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "AhoMaestro/GetAhoMaestros";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const AhoMaestroView = () => {
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
      title: "Portafolio",
      field: "CodigoPortafolio",
    },
    {
      title: "Numero Inversión",
      field: "NumeroInversion",
    },
    {
      title: "Aportante",
      field: "CodigoAportante",
    },
    {
      title: "Tipo",
      field: "CodigoTipo",
    },
    {
      title: "Moneda",
      field: "CodigoMoneda",
    },
    {
      title: "Estado",
      field: "CodigoEstadoNavigation.Descripcion",
      id: "CodigoEstadoNavigation.CodigoEstado",
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
      usehistory.push(`./AhoMaestro`);
    } else {
      usehistory.push({ pathname: "./AhoMaestro", rowUpdate });
    }
  };
  //  se agrego el componente de eliminar
  const deleteItem = (rowDelete) => {
    deleteAction(
      "AhoMaestro/DeleteAhoMaestro",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.NumeroInversion, "NumeroInversion"));
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