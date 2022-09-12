import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { delAction, noAction, readAllAction } from "../../../Actions/Index";
import { deleteAction } from "../../../Helpers/deleteHelper";
import { helpHttp } from "../../../Helpers/HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "PasTasaPlazo/GetPasTasaPlazos";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const PasTasaPlazoView = () => {
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
      title: "Código Tipo",
      field: "CodigoTipo",
    },
    {
      title: "Fecha",
      field: "FechaHora",
    },
    {
      title: "Tasa Bruta",
      field: "Tasa",
    },
    {
      title: "Estado",
      field: "CodigoEstado",
    },
  ]);

  let url = `${baseUrl}${controller}`;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          //console.log(res);
          dispatch(readAllAction(res));
        } else {
          //console.log(res);
          dispatch(noAction());
        }
      });
  }, [url, useDispatch]);

  const updateState = (rowUpdate, isNew) => {
    if (isNew) {
      usehistory.push(`./PasTasaPlazo`);
    } else {
      usehistory.push({ pathname: "./PasTasaPlazo", rowUpdate });
    }
  };
  //Se agrego la funcion de eliminar
  const deleteItem = (rowDelete) => {
    deleteAction(
      "PasTasaPlazo/DeletePasTasaPlazo",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.CodigoTipo, "CodigoTipo"));
        alert("La tasa plazo fue eliminado");
      } else {
        alert("La tasa plazo no fue eliminado");
      }
    });
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Tasa Plazo"
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
            tooltip: "Editar Tasa Plazo",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Tasa Plazo",
            onClick: (event, rowData) => deleteItem(rowData),
          },
          {
            icon: "add",
            tooltip: "Nueva Tasa Plazo",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};
