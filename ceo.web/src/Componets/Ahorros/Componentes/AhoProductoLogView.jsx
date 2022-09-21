import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import { helpHttp } from "../../../Helpers/HelpHttp";
import { useDispatch, useSelector } from "react-redux";
import { noAction, readAllAction } from "../../../Actions/Index";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "AhoProductoLog/GetAhoProductosLog";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const AhoProductoLogView = () => {
  const { useState } = React;
  let usehistory = useHistory();

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
      title: "Tipo",
      field: "CodigoTipo",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    {
      title: "Moneda",
      field: "CodigoMoneda",
    },
  ]);

  let url = `${baseUrl}${controller}`;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          console.log(res)
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
      usehistory.push(`./AhoProductoLog`);
    } else {
      usehistory.push({ pathname: "./AhoProductoLog", rowUpdate });
    }
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo de Productos"
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
            icon: "visibility",
            tooltip: "Ver Producto",
            onClick: (event, rowData) => updateState(rowData, false),
          },
        ]}
      />
    </div>
  );
};