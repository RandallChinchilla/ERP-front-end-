import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delAction, noAction, readAllAction } from "../../Actions/Index";
import { deleteAction } from "../../Helpers/deleteHelper";
import { helpHttp } from "../../Helpers/HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "PasAutorizado/GetPasAutorizados";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const PasAutorizadoView = () => {
  let usehistory = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [columns] = useState([
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
      title: "Código Aportante", 
      field: "CodigoAportante"
    },
    { 
      title: "Tipo Identificación", 
      field: "CodigoTipoIdentificacion"
    },
    {
      title: "Número Id",
      field: "NumeroId",
    },
    { 
      title: "Estado", 
      field: "CodigoEstado"
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
      usehistory.push(`./PasAutorizado`);
    } else {
      usehistory.push({ pathname: "./PasAutorizado", rowUpdate });
    }
  };

  const deleteItem = (rowDelete) => {
    deleteAction(
      "PasAutorizado/DeletePasAutorizado",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.CodigoAportante, "CodigoAportante"));
        alert("El autorizado fue eliminado");
      } else {
        alert("El autorizado no fue eliminado");
      }
    });
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Autorizado"
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
            tooltip: "Editar Autorizado",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Autorizado",
            onClick: (event, rowData) => deleteItem(rowData),
          },
          {
            icon: "add",
            tooltip: "Agregar Autorizado",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};