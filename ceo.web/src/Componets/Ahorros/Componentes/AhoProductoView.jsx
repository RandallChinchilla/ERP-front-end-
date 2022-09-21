import React, { useEffect, useState } from "react";
import { useGetData } from "../../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import { helpHttp } from "../../../Helpers/HelpHttp";
import { useDispatch, useSelector } from "react-redux";
import { delAction, noAction, readAllAction } from "../../../Actions/Index";
import { deleteAction } from "../../../Helpers/deleteHelper";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "AhoProducto/GetAhoProductos";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const AhoProductoView = () => {
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
      usehistory.push(`./AhoProducto`);
    } else {
      usehistory.push({ pathname: "./AhoProducto", rowUpdate });
    }
  };
  //  se agrego el componente de eliminar
  const deleteItem = (rowDelete) => {
    deleteAction(
      "AhoProducto/DeleteAhoProducto",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.CodigoTipo, "CodigoTipo"));
        alert("El producto fue eliminado");
      } else {
        alert("El producto no fue eliminado");
      }
    });
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
            icon: "edit",
            tooltip: "Editar Producto",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Producto",
            onClick: (event, rowData) => deleteItem(rowData),
          },
          {
            icon: "add",
            tooltip: "Nuevo Producto",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};