import { Box, Modal } from "@mui/material";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { helpHttp } from "../../Helpers/HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const SelectAportanteModal = (props) => {
  const [data, setData] = useState([]);
  const style = {
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

  const [columns, setColumns] = useState([
    { title: "Aportante", field: "CodigoAportante" },
    {
      title: "Nombre",
      field: "Nombre",
    },
  ]);

  let url = `${baseUrl}${props.controller}`;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setData(res);
        } else {
          //setError(res.err);
        }
      });
  }, [props.url]);

  const selectItem = (rowData) => {
    console.log(rowData);
    props.form.CodigoAportante = rowData.CodigoAportante;
    props.handleClose();
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <MaterialTable
              title="Aportante"
              columns={columns}
              data={data}
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
                  tooltip: "Seleccionar Item",
                  onClick: (event, rowData) => selectItem(rowData),
                },
              ]}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
