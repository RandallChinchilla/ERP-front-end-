import { makeStyles } from "@material-ui/core";
import { Box, Modal } from "@mui/material";
import MaterialTable from "material-table";
import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";

export const CatCuentasModal = (props) => {
  const [columns, setColumns] = useState([
    { title: "Código", field: "NumeroCuenta" },
    { title: "Nombre", field: "Nombre" },
  ]);

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { Data, Error } = useGetData(props.controller, props.model);
  //console.log(Data);
  const selectItem = (rowUpdate) => {
    switch (props.id) {
      case "NumeroCuentaActivo":
        props.form.NumeroCuentaActivo = rowUpdate.NumeroCuenta;
        break;
      case "NumeroCuentaDepreciacion":
        props.form.NumeroCuentaDepreciacion = rowUpdate.NumeroCuenta;
        break;
      case "NumeroCuentaGastoDepreciacion":
        props.form.NumeroCuentaGastoDepreciacion = rowUpdate.NumeroCuenta;
        break;
      default:
        break;
    }
    props.handleClose();
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <div>
          <MaterialTable
            title="Articulo"
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
            }}
            actions={[
              {
                icon: "add",
                tooltip: "Seleccionar",
                onClick: (event, rowData) => selectItem(rowData, false),
              },
            ]}
          />
        </div>
      </Box>
    </Modal>
  );
};
