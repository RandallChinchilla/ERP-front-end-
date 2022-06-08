import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ActGrupoView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editActGrupo");

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
      title: "Código Grupo", 
      field: "CodigoGrupo"
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
  ]);

  const { Data, Error, setData } = useGetData(
    "ActGrupo/GetActGrupos"
  );

  if (Error) return null;
  if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    if (isNew) {
      console.log(rowUpdate);
      usehistory.push(`./ActGrupo/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editActGrupo", JSON.stringify(rowUpdate));
      usehistory.push(`./ActGrupo/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Grupos"
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
            tooltip: "Editar Grupo",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Grupo",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nuevo Grupo",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default ActGrupoView;