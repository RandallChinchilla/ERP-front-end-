import React from "react";
import { useGetData, useGetDataProps } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

export const FacTableDetalle = (props) => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editCliMaestro");

  const [columns, setColumns] = useState([
    {
      title: "Codigo",
      field: "CodigoArticulo",
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
      field: "Total",
    },
  ]);

  // const options = props.DataDet.map((item) => ({
  //   ...item,
  //   Total: item.Cantidad * item.PrecioUnitario,
  // }));

  // const options = props.DataDet.map(function (item) {
  //   return { ...item, Total: item.Cantidad * item.PrecioUnitario };
  // });

  const options = props.DataDet;
  console.log("hola perra");
  console.log(options);

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
