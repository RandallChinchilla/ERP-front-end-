import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const CliMaestroView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editCliMaestro");

  const [columns, setColumns] = useState([
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    { title: "Número de Cliente", field: "NumeroCliente" },
    {
      title: "Tipo de Identificación",
      field: "CodigoTipoIdentificacionNavigation.Descripcion",
      id: "CodigoTipoIdentificacionNavigation.CodigoTipoIdentificacion",
    },
    {
      title: "Número de Identificación",
      field: "CodigoTipoIdentificacionNavigation.Descripcion",
      id: "CodigoTipoIdentificacionNavigation.CodigoTipoIdentificacion",
    },
    {
      title: "Primer Apellido",
      field: "Apellido1",
      id: "Apellido1",
    },
    {
      title: "Segundo Apellido",
      field: "Apellido2",
      id: "Apellido2",
    },
    {
      title: "Nombre",
      field: "Nombre",
      id: "Nombre",
    },
    {
      title: "Estado",
      field: "CodigoEstadoNavigation.Descripcion",
      id: "CodigoEstadoNavigation.CodigoEstado",
    },
  ]);

  const { Data, Error, setData } = useGetData("CliMaestro/GetCliMaestros");

  if (Error) return null;
  if (!Data) return null;

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

  return (
    <div>
      <MaterialTable
        title=" Catálogo de Clientes"
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
            tooltip: "Editar Cliente",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Cliete",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default CliMaestroView;
