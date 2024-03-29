import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const InvMaestroView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editInvMaestro");

  const [columns, setColumns] = useState([
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    { title: "Codigo Articulo", field: "CodigoArticulo" },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    {
      title: "Cantidad",
      field: "Cantidad",
    },
  ]);

  const { Data, Error, setData } = useGetData("IvtMaestro/GetIvtMaestros");

  if (Error) return null;
  if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    if (isNew) {
      console.log(rowUpdate);
      usehistory.push(`./InvMaestro/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editInvMaestro", JSON.stringify(rowUpdate));
      usehistory.push(`./InvMaestro/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title=" Catálogo Inventario Maestro"
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
            tooltip: "Editar Inventario",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Inventario",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Agregar Inventario",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default InvMaestroView;
