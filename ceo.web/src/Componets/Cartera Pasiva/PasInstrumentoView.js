import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const PasInstrumentoView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editPasInstrumento");

  const [columns, setColumns] = useState([
    {
      title: "Empresa",
      field: "CodigoEmpresa",
    },
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    { 
      title: "Código Instrumento", 
      field: "CodigoInstrumento"
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    { 
      title: "Moneda", 
      field: "CodigoMoneda"
    },
    { 
      title: "Periodicidad", 
      field: "MontoEfectivo"
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
      usehistory.push(`./PasInstrumento/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editPasInstrumento", JSON.stringify(rowUpdate));
      usehistory.push(`./PasInstrumento/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title=" Instrumentos"
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
            tooltip: "Editar Instrumentos",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Instrumentos",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nuevo Instrumento",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default PasInstrumentoView;