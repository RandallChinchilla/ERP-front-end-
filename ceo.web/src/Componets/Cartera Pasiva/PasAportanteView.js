import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { delAction, noAction, readAllAction } from "../../Actions/Index";
import { deleteAction } from "../../Helpers/deleteHelper";
import { helpHttp } from "../../Helpers/HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "PasAportante/GetPasAportantes";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const PasAportanteView = () => {
  let usehistory = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [columns] = useState([
    {
      title: "Codigo Empresa",
      field: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    {
      title: "Nombre Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
    },
    {
      title: "Nombre Aportante",
      field: "Nombre",
    },
    {
      title: "Teléfono",
      field: "TelefonoCelular",
    },
    {
      title: "Dirección",
      field: "DireccionDomicilio",
    },
    {
      title: "Correo",
      field: "EMailAportante",
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
      usehistory.push(`./PasAportante`);
    } else {
      usehistory.push({ pathname: "./PasAportante", rowUpdate });
    }
  };

  const deleteItem = (rowDelete) => {
    deleteAction(
      "PasAportante/DeletePasAportante",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.CodigoAportante, "CodigoAportante"));
        alert("El aportante fue eliminado");
      } else {
        alert("El aportante no fue eliminado");
      }
    });
  };

  return (
    <div>
      <MaterialTable
        title="Aportantes"
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
            tooltip: "Editar Grupo",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Grupo",
            onClick: (event, rowData) => deleteItem(rowData),
          },
          {
            icon: "add",
            tooltip: "Agregar Aportante",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      ></MaterialTable>
    </div>
  );
};
