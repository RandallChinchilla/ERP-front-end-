import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const PasAutorizadoView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editPasAutorizado");

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

  const { Data, Error, setData } = useGetData(
    "PasAutorizado/GetPasAutorizados"
  );

  if (Error) return null;
  if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    if (isNew) {
      console.log(rowUpdate);
      usehistory.push(`./PasAutorizado/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editPasAutorizado", JSON.stringify(rowUpdate));
      usehistory.push(`./PasAutorizado/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Autorizado"
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
            tooltip: "Editar Autorizado",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Autorizado",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nuevo Autorizado",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default PasAutorizadoView;