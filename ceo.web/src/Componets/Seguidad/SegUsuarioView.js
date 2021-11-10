import {
    Grid,
    TextField,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Button,
    Divider,
    Modal,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useGetData } from "../../Hooks/useGetData";
  import { Delete, Edit, Visibility } from "@material-ui/icons";
  import { makeStyles } from "@material-ui/core";
  import { red, blue, green } from "@mui/material/colors";
  import { Link, NavLink } from "react-router-dom";
  
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
  }));
  
  const columns = [
    { id: "acciones", label: "Acciones", minWidth: 125 },
    { id: "empresa", label: "Empresa", minWidth: 100 },
    { id: "numerodeproveedor", label: "Número de Proveedor", minWidth: 100 },
    { id: "tipodeidentificacion", label: "Tipo de Identificación", minWidth: 100 },
    { id: "numerodeid", label: "Número de Identificación", minWidth: 100 },
    { id: "primerapellido", label: "Primer Apellido", minWidth: 100 },
    { id: "segundoapellido", label: "Segundo Apellido", minWidth: 100 },
    { id: "nombre", label: "Nombre", minWidth: 100 },
    { id: "estado", label: "Estado", minWidth: 100 },
  ];
  
  
  const SegUsuarioView = () => {
    const styles = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
      Descripcion: "",
      CodigoEmpresa: 1,
      CodigoMarca: 0,
    });
  
    const { Data, Error, setData } = useGetData("SegUsuario");
  
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
        <Typography
          variant="overline"
          style={{ marginTop: 10, alignSelf: "center", fontSize: 16 }}
        >
          Proveedores
        </Typography>
  

  
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={12}>
                    Catálogo Proveedores
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
                    <NavLink tag={Link} to="/SegUsuario">
                      <Edit
                        style={{ color: blue[600], width: 30 }}
                      />
                        </NavLink>
  
                        <NavLink tag={Link} to="/SegUsuario">
                      <Delete
                        style={{ color: red[700], width: 30 }}
                      />
                      </NavLink>

                      <NavLink tag={Link} to="/SegUsuario">
                      <Visibility
                        style={{ color: green[500], width: 30}}/>
                        </NavLink>

                    </TableCell>
                    <TableCell>{row.codigoEmpresa}</TableCell>
                    <TableCell>{row.apellido1}</TableCell>
                    <TableCell>{row.apellido2}</TableCell>
                    <TableCell>{row.nombre}</TableCell>
                    <TableCell>{row.descripcion}</TableCell>
                    <TableCell>{row.fechaIngreso}</TableCell>
                    <TableCell>{row.fechaSalida}</TableCell>
                    <TableCell>{row.fechaExpiracionPassword}</TableCell>
                    <TableCell>{row.indicadorReinicioPassword}</TableCell>
                    <TableCell>{row.codigoEstado}</TableCell>
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
  
  export default SegUsuarioView;