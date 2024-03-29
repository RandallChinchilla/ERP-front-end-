import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { red, blue, green } from "@mui/material/colors";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { putAction } from "../../Helpers/putHelper";
import { deleteAction } from "../../Helpers/deleteHelper";
import { postAction } from "../../Helpers/postHelper";  

const baseUrl = process.env.REACT_APP_BASE_URL;

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  barra: {
    backgroundColor: blue[100],
  },
  paper: {
    width: 1200,
    height: 420,
  },
}));

const columns = [
  { id: "acciones", label: "Acciones", minWidth: 125 },
  { id: "CodigoFormaDepreciacion", label: "Código Forma Depreciación", minWidth: 100 },
  { id: "Descripcion", label: "Descripción", minWidth: 100 },
  { id: "Formula", label: "Fórmula", minWidth: 100 },
];

const ActFormaDepreciacion = () => {
  const { useState } = React;
  const styles = useStyles();
  const [columns, setColumns] = useState([
    {
      title: "Código Forma Depreciación",
      field: "CodigoFormaDepreciacion",
    },
    { title: "Descripción", field: "Descripcion" },
    // { title: "Fórmula", field: "Formula" },
  ]);

  const { Data, Error, setData } = useGetData("ActFormaDepreciacion/GetActFormasDepreciacion");
  console.log(Data);

  if (Error) return null;
  if (!Data) return null;

  //+++++++add row in the table+++++++++
  const addState = (rowAdd) => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    console.log(rowAdd);
    postAction(
      "ActFormaDepreciacion/PostActFormaDepreciacion",
      rowAdd,
      userLoggedToken
    ).then((response) => {
      if (response.status === 200) {
        console.log("Registro agregado");
      } else {
        console.log("No se pudo agregar el registro");
      }
    });
  };
  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate) => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    putAction(
      "ActFormaDepreciacion/PutActFormaDepreciacion",
      rowUpdate,
      userLoggedToken
    ).then((response) => {
      if (response.status === 200) {
        console.log("Registro actualizado");
      } else {
        console.log("Registro no actualizado");
      }
    });
  };

  //+++++++Delete row in the table+++++++++
  const deleteState = (rowDelete) => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    console.log(rowDelete);
    deleteAction(
      "ActFormaDepreciacion/DeleteActFormaDepreciacion",
      rowDelete,
      userLoggedToken
    ).then((response) => {
      if (response.status === 200) {
        setData([]);
      } else {
      }
    });
  };

  return (
    <div>
      <MaterialTable
        title=" Catálogo Forma Depreciación"
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
          },}}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...Data, newData]);
                addState(newData);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...Data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve();
                updateState(dataUpdate[index]);
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...Data];
                const index = oldData.tableData.id;
                deleteState(dataDelete[index]);
                // dataDelete.splice(index, 1);
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
};

 
export default ActFormaDepreciacion;