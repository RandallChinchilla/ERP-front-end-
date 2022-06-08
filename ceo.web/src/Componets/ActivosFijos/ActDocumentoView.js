import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ActDocumentoView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editActDocumento");

  const [columns, setColumns] = useState([
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
    },
    // {
    //   title: "Empresa",
    //   field: "CodigoEmpresaNavigation.Nombre",
    //   id: "CodigoEmpresaNavigation.CodigoEmpresa",
    // },
    { 
      title: "Código Activo", 
      field: "CodigoActivo"
    },
    {
      title: "Fecha y Hora",
      field: "FechaHora",
    },
    { 
      title: "Nombre del Documento", 
      field: "NombreDocumento"
    },
  ]);

  const { Data, Error, setData } = useGetData(
    "ActDocumento/GetActDocumentos"
  );

  if (Error) return null;
  if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    if (isNew) {
      console.log(rowUpdate);
      usehistory.push(`./ActDocumento/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editActDocumento", JSON.stringify(rowUpdate));
      usehistory.push(`./ActDocumento/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Documentos"
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
            tooltip: "Editar Documento",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Documento",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nuevo Documento",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default ActDocumentoView;