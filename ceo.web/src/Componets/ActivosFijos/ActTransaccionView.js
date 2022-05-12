import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ActTransaccionView = () => {
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editActTransaccion");

  const [columns, setColumns] = useState([
    {
      title: "Empresa",
      field: "CodigoEmpresa",
    },
    {
      title: "Nombre",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    { 
      title: "Número de transacción", 
      field: "NumeroTransaccion"
    },
    {
      title: "Código Activo",
      field: "Activo",
    },
    { 
      title: "Código de transacción", 
      field: "CodigoTransaccion"
    },
    { 
      title: "Moneda", 
      field: "CodigoMoneda"
    },
    { 
      title: "Monto Efectivo", 
      field: "MontoEfectivo"
    },
    { 
      title: "Monto Cheque", 
      field: "MontoCheque"
    },
    { 
      title: "Monto Tarjeta", 
      field: "MontoTarjeta"
    },
    { 
      title: "Monto Otros", 
      field: "MontoOtros"
    },
    { 
      title: "Fecha Ingreso", 
      field: "FechaIngreso"
    },
    { 
      title: "Fecha Efectiva", 
      field: "FechaEfectiva"
    },
    { 
      title: "Fecha Reversión", 
      field: "FechaReversion"
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
      usehistory.push(`./ActTransaccion/1`);
    } else {
      console.log(rowUpdate);
      window.localStorage.setItem("editActTransaccion", JSON.stringify(rowUpdate));
      usehistory.push(`./ActTransaccion/0`);
    }
  };

  return (
    <div>
      <MaterialTable
        title=" Transacciones"
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
            tooltip: "Editar Transacción",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Transacción",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nuevo Transacción",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default ActTransaccionView;