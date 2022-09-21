import React, { useEffect, useState } from "react";
import { useGetData } from "../../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import { helpHttp } from "../../../Helpers/HelpHttp";
import { useDispatch, useSelector } from "react-redux";
import { delAction, noAction, readAllAction } from "../../../Actions/Index";
import { deleteAction } from "../../../Helpers/deleteHelper";

const baseUrl = process.env.REACT_APP_BASE_URL;
const controller = "AhoTransaccion/GetAhoTransacciones";
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

export const AhoTransaccionView = () => {
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
      title: "Número Transacción",
      field: "NumeroTransaccion",
    },
    {
      title: "Numero Inversión",
      field: "NumeroInversion",
    },
    {
      title: "Transacción",
      field: "CodigoTransaccion",
    },
    {
      title: "Moneda",
      field: "CodigoMoneda",
    },
    {
      title: "Monto Efectivo",
      field: "MontoEfectivo",
    },
    {
      title: "Monto Cheque",
      field: "MontoCheque",
    },
    {
      title: "Monto Tarjeta",
      field: "MontoTarjeta",
    },
    {
      title: "Monto Otros",
      field: "MontoOtros",
    },
    {
      title: "Fecha Ingreso",
      field: "FechaIngreso",
    },
    {
      title: "Fecha Efectiva",
      field: "FechaEfectiva",
    },
    {
      title: "Fecha Reversión",
      field: "FechaReversion",
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
      usehistory.push(`./AhoTransaccion`);
    } else {
      usehistory.push({ pathname: "./AhoTransaccion", rowUpdate });
    }
  };
  //  se agrego el componente de eliminar
  const deleteItem = (rowDelete) => {
    deleteAction(
      "AhoTransaccion/DeleteAhoTransaccion",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.NumeroTransaccion, "NumeroTransaccion"));
        alert("La transacción fue eliminada");
      } else {
        alert("La transacción no fue eliminada");
      }
    });
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Transacciones"
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
            tooltip: "Editar Transacción",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Transacción",
            onClick: (event, rowData) => deleteItem(rowData),
          },
          {
            icon: "add",
            tooltip: "Nueva Transacción",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};