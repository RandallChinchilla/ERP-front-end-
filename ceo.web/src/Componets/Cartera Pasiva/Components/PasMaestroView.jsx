import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { delAction, noAction, readAllAction } from "../../../Actions/Index";
import { deleteAction } from "../../../Helpers/deleteHelper";
import { helpHttp } from "../../../Helpers/HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "PasMaestro/GetPasMaestros";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const PasMaestroView = () => {
  let usehistory = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [columns] = useState([
    {
      title: "Código Empresa",
      field: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    {
      title: "Nombre Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
    },
    {
      title: "Código Portafolio",
      field: "CodigoPortafolio",
    },
    {
      title: "Número Inversion",
      field: "NumeroInversion",
    },
    {
      title: "Código Aportante",
      field: "CodigoAportante",
    },
    {
      title: "Código Instrumento",
      field: "CodigoInstrumento",
    },
    {
      title: "Moneda",
      field: "CodigoMoneda",
    },
    {
      title: "Estado",
      field: "CodigoEstado",
    },
    {
      title: "Saldo Nominal",
      field: "SaldoValorNominal",
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
      usehistory.push(`./PasMaestro`);
    } else {
      usehistory.push({ pathname: "./PasMaestro", rowUpdate });
    }
  };

  const deleteItem = (rowDelete) => {
    deleteAction(
      "PasMaestro/DeletePasMaestro",
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
        title="Maestro"
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
            tooltip: "Agregar Maestro",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      ></MaterialTable>
    </div>
  );
};
