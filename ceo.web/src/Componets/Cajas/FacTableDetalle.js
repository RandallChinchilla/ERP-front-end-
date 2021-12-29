import React from "react";
import { useGetData, useGetDataProps } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

export const FacTableDetalle = (props) => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editCliMaestro");

  // const modelRequest = {
  //   codigoEmpresa: props.data.CodigoEmpresa,
  //   consecutivo: props.data.Consecutivo,
  // };

  const [columns, setColumns] = useState([
    {
      title: "Codigo",
      field: "CodigoArticulo",
      // id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    {
      title: "Descripción",
      field: "CodigoArticulo",
    },
    {
      title: "Cantidad",
      field: "Cantidad",
    },
    {
      title: "P. Unitario",
      field: "PrecioUnitario",
    },
    {
      title: "% Iva",
      field: "MontoImpuesto",
    },
    {
      title: "% Descuento",
      field: "PorcentajeDescuento",
    },
    {
      title: "Total",
      field: "PrecioUnitario * Cantidad",
    },
  ]);

  // const { Data, Error, setData } = useGetDataProps(
  //   "IvtEncabezadoFactura/GetIvtEncabezadoFactura",
  //   modelRequest
  // );

  // if (Error) return null;
  //if (!props.DataDet) return null;
  const options = props.DataDet;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    if (isNew) {
      console.log(rowUpdate);
      usehistory.push(`./CliMaestro/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editCliMaestro", JSON.stringify(rowUpdate));
      usehistory.push(`./CliMaestro/0`);
    }
  };

  console.log("hola perra");

  return (
    <div>
      <MaterialTable
        title="Items Factura"
        columns={columns}
        data={options}
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
        actions={
          [
            //   {
            //     icon: "edit",
            //     tooltip: "Editar Cliente",
            //     onClick: (event, rowData) => updateState(rowData, false),
            //   },
            // {
            //   icon: "delete",
            //   tooltip: "Borrar Cliete",
            //   onClick: (event, rowData) =>
            //     alert("You want to delete " + rowData.name),
            // },
            //   {
            //     icon: "add",
            //     tooltip: "Add User",
            //     isFreeAction: true,
            //     onClick: (event, rowData) => updateState(rowData, true),
            //   },
          ]
        }
      />
    </div>
  );
};
