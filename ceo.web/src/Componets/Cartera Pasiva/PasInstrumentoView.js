import React, { useEffect, useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import { helpHttp } from "../../Helpers/HelpHttp";
import { useDispatch, useSelector } from "react-redux";
import { noAction, readAllAction } from "../../Actions/Index";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "PasInstrumento/GetPasInstrumentos";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const PasInstrumentoView = () => {
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
      title: "Código Instrumento",
      field: "CodigoInstrumento",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    {
      title: "Moneda",
      field: "CodigoMoneda",
    },
    {
      title: "Periodicidad Pago Interés",
      field: "CodigoNavigation.Descripcion",
      id: "CodigoNavigation.CodigoPeriodicidad",
    },
    {
      title: "Periodicidad Revisión Tasa",
      field: "CodigoNavigation.Descripcion",
      id: "CodigoNavigation.CodigoPeriodicidad",
    },
  ]);

  // const { Data, Error, setData } = useGetData(
  //   "PasInstrumento/GetPasInstrumentos"
  // );

  // if (Error) return null;
  // if (!Data) return null;

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
      usehistory.push(`./PasInstrumento`);
    } else {
      usehistory.push({ pathname: "./PasInstrumento", rowUpdate });
    }
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Instrumentos"
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
            tooltip: "Editar Instrumentos",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Instrumentos",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nuevo Instrumento",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};
