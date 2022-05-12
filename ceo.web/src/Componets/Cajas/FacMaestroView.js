import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const FacMaestroView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editFacMaestro");

  const [columns, setColumns] = useState([
    {
      title: "# Interno",
      field: "Consecutivo",
    },
    { title: "Cliente", field: "CliMaestro.Nombre" },
    {
      title: "Correo",
      field: "CliMaestro.CorreoElectronico",
    },
    {
      title: "Estatus",
      field: "CodigoEstadoNavigation.Descripcion",
      id: "CodigoEstadoNavigation.CodigoEstado",
    },
    {
      title: "Moneda",
      field: "Codigo.Descripcion",
      id: "Codigo.CodigoMoneda",
    },
    {
      title: "Monto",
    },
    {
      title: "Fecha Doc.",
      field: "Fecha",
    },
    {
      title: "Anulada",
    },
    {
      title: "Consecutivo FE",
      field: "ComprobanteElectronico",
    },
  ]);

  const { Data, Error, setData } = useGetData(
    "IvtEncabezadoFactura/GetIvtEncabezadoFacturas"
  );

  if (Error) return null;
  if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    if (isNew) {
      usehistory.push(`./FacMaestro/1`);
    } else {
      window.localStorage.setItem("editFacMaestro", JSON.stringify(rowUpdate));
      usehistory.push(`./FacMaestro/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title=" Facturas"
        columns={columns}
        data={Data}
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
            tooltip: "Editar Factura",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Factura",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nueva Factura",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default FacMaestroView;
