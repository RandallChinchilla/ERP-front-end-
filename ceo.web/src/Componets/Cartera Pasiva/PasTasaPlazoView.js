import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const PasTasaPlazoView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editPasTasaPlazo");

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
      title: "Código Tipo", 
      field: "CodigoTipo"
    },
    {
      title: "Fecha",
      field: "FechaHora",
    },
    { 
      title: "Tasa Bruta", 
      field: "Tasa"
    },
    { 
      title: "Estado", 
      field: "CodigoEstado"
    },
  ]);

  const { Data, Error, setData } = useGetData(
    "PasInstrumento/GetPasInstrumentos"
  );

  if (Error) return null;
  if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    if (isNew) {
      console.log(rowUpdate);
      usehistory.push(`./PasTasaPlazo/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editPasTasaPlazo", JSON.stringify(rowUpdate));
      usehistory.push(`./PasTasaPlazo/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Tasa Plazo"
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
            tooltip: "Editar Tasa Plazo",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Tasa Plazo",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nueva Tasa Plazo",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default PasTasaPlazoView;