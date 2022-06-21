import React, { useContext, useEffect, useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import CrudContext from "../../Context/Crud/CrudContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { helpHttp } from "../../Helpers/HelpHttp";
import {
  noAction,
  readAllAction,
  updateAction,
  delAction,
} from "../../Actions/Index";
import ActGrupo from "./ActGrupo";
import { deleteAction } from "../../Helpers/deleteHelper";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "ActGrupo/GetActGrupos";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

const ActGrupoView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editActGrupo");

  const [error, seterror] = useState(null);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [columns, setColumns] = useState([
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
    },
    // {
    //   title: "Empresa",
    //   field: "CodigoEmpresaNavigation.Nombre",
    //   id: "CodigoEmpresaNavigation.CodigoEmpresa",
    // },
    {
      title: "Código Grupo",
      field: "CodigoGrupo",
    },
    {
      title: "Descripción",
      field: "Descripcion",
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
          seterror(res);
        }
      });
  }, [url, dispatch]);

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    if (isNew) {
      usehistory.push(`./ActGrupo`);
    } else {
      usehistory.push({ pathname: "./ActGrupo", rowUpdate });
    }
  };

  const deleteItem = (rowDelete) => {
    deleteAction("ActGrupo/DeleteActGrupo", rowDelete, userLoggedToken).then(
      (res) => {
        if (res.isSuccess) {
          dispatch(delAction(rowDelete.CodigoGrupo, "CodigoGrupo"));
          alert("El grupo fue eliminado");
        } else {
          alert("El grupo no fue eliminado");
        }
      }
    );
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Grupos"
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
            tooltip: "Nuevo Grupo",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default ActGrupoView;
