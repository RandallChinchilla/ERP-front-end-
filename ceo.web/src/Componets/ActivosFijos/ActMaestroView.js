import { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const ActMaestroView = () => {
  let usehistory = useHistory();

  const [columns, setColumns] = useState([
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
    },
    {
      title: "Código Activo",
      field: "CodigoActivo",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    {
      title: "Fecha Compra",
      field: "FechaCompra",
    },
    {
      title: "Valor Compra",
      field: "ValorCompra",
    },
    {
      title: "Monto Depreciado",
      field: "MontoDepreciado",
    },
    {
      title: "Valor en Libros",
      field: "ValorEnLibros",
    },
    {
      title: "Nombre Proveedor",
      // field:"Proveedor de prueba"
    },
    {
      title: "Estado",
      field: "CodigoEstadoNavigation.Descripcion",
    },
    {
      title: "Moneda",
      field: "Codigo3.Descripcion",
    },
  ]);

  const { Data, Error } = useGetData("ActMaestro/GetActMaestros");

  if (Error) return null;
  if (!Data) return null;

  const handleCreate = (row) => {
    usehistory.push("./ActMaestro");
  };

  const handleUpdate = (row) => {
    console.log(row);
  };

  return (
    <div>
      <MaterialTable
        title="Catálogo Maestro"
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
            onClick: (event, rowData) => handleUpdate(rowData),
          },
          {
            icon: "delete",
            tooltip: "Borrar Factura",
            // onClick: (event, rowData) =>
            //   alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nueva Avtivo",
            isFreeAction: true,
            onClick: (event, rowData) => handleCreate(rowData),
          },
        ]}
      ></MaterialTable>
    </div>
  );
};

export default ActMaestroView;
