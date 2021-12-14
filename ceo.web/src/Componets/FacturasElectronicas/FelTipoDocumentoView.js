/* import {
    Grid,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Divider,
    Modal,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useGetData } from "../../Hooks/useGetData";
  import { Delete, Edit, Visibility } from "@material-ui/icons";
  import { makeStyles } from "@material-ui/core";
  import { red, blue, green } from "@mui/material/colors";
  import { Link, NavLink } from "react-router-dom"; */

  import React, { useState } from "react";
  import { makeStyles } from "@material-ui/core";
  import { red, blue, green } from "@mui/material/colors";
  import { useGetData } from "../../Hooks/useGetData";
  import MaterialTable from "material-table";
  import { putAction } from "../../Helpers/putHelper";
  import { deleteAction } from "../../Helpers/deleteHelper";
  import { postAction } from "../../Helpers/postHelper";
  
  /* const baseUrl = process.env.REACT_APP_BASE_URL;
  
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
    { id: "codigotipodocumento", label: "Tipo Documento", minWidth: 100 },
    { id: "descripcion", label: "Descripción", minWidth: 100 },
  ];
  
  
  const FelTipoDocumentoView = () => {
    const styles = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
      Descripcion: "",
      CodigoEmpresa: 1,
      CodigoMarca: 0,
    });
  
    const { Data, Error, setData } = useGetData("FelTipoDocumento");
  
    if (Error) return null;
    if (!Data) return null;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    }; 
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        spacing={3}
      >
        <Grid>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                color: blue[600],
                textAlign: "center",
                fontSize: 16,
                marginTop: 3,
                marginBottom: 3,
              }}
            >
              Tipo de Documento
            </Typography>
          </Grid>  
        <Paper elevation={3} sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={12}>
                    Catálogo Tipo Documento
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      className={styles.barra}
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Data.map((row) => (
                  <TableRow key={row.codigoMarca}>
                    <TableCell>
                    <NavLink tag={Link} to="/Dashboard/FelTipoDocumento">
                      <Edit
                        style={{ color: blue[600], width: 30 }}
                      />
                        </NavLink>
  
                        <NavLink tag={Link} to="/Dashboard/FelTipoDocumento">
                      <Delete
                        style={{ color: red[700], width: 30 }}
                      />
                      </NavLink>

                      <NavLink tag={Link} to="/Dashboard/FelTipoDocumento">
                      <Visibility
                        style={{ color: green[500], width: 30}}/>
                        </NavLink>

                    </TableCell>
                    <TableCell>{row.codigoTipoDocumento}</TableCell>
                    <TableCell>{row.descripcion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={Data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    );
  };
  
  export default FelTipoDocumentoView; */


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
  { id: "codigoTipoDocumento", label: "Código Tipo Documento", minWidth: 100 },
  { id: "descripcion", label: "Descripción", minWidth: 100 },
];

const FelTipoDocumentoView = () => {
  const { useState } = React;
  const styles = useStyles();
  const [columns, setColumns] = useState([
    {
      title: "Tipo Documento",
      field: "codigoTipoDocumento",
    },
    { title: "Descripción", field: "descripcion" },
  ]);

  const { Data, Error, setData } = useGetData("FelTipoDocumento");
  console.log(Data);

  if (Error) return null;
  if (!Data) return null;

  //+++++++add row in the table+++++++++
  const addState = (rowAdd) => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    console.log(rowAdd);
    postAction(
      "FelTipodocumento/PostFelTipoDocumento",
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
      "FelTipodocumento/PutFelTipoDocumento",
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
      "FelTipodocumento/DeleteFelTipoDocumento",
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
        title=" Catálogo Tipo Documento"
        columns={columns}
        data={Data}
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

export default FelTipoDocumentoView;