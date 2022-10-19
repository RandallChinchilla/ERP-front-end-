import React, { useState } from "react";
import { useGetData } from "../../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const RRHFormaDePagoView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editRRHFormaDePago");

  const [columns, setColumns] = useState([
    {
      title: "Empresa",
      field: "CodigoEmpresa",
    },
    { title: "CodigoFormaDePago", field: "CodigoFormaDePago" },
    {title: "Nombre",
    field: "CodigoEmpresaNavigation.Nombre",
    id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
  ]);

  const { Data, Error, setData } = useGetData(
    "RrhIsr/GetListaRrhIsr"
  );

  if (Error) return null;
  if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    if (isNew) {
      console.log(rowUpdate);
      usehistory.push(`./RRHISR/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editRRHISR", JSON.stringify(rowUpdate));
      usehistory.push(`./RRHISR/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title=" Forma De Pago"
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
            tooltip: "Editar Forma De Pago",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Forma De Pago",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nueva Forma De Pago",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default RRHFormaDePagoView;