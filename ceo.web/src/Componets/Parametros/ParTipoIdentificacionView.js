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
    paper: {
        width: 1200,
        height: 420,
      },   
  }));
  
  const columns = [
    { id: "acciones", label: "Acciones", minWidth: 125 },
    { id: "tipodeidentificacion", label: "Tipo de Identificación", minWidth: 100 },
    { id: "descripcion", label: "Descripción", minWidth: 100 },
  ];
  
  
  const ParTipoIdentificacionView = () => {
    const styles = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
      CodigoTipoIdentificacion: "",
      Descripcion: "",
    });
  
    const { Data, Error, setData } = useGetData("ParTipoIdentificacion");
  
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
              Tipos de identificaciones
            </Typography>
          </Grid>  
        <Paper elevation={3} sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={12}>
                    Catálogo Tipo de Identificación
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
                    <NavLink tag={Link} to="/Dashboard/ParTipoIdentificacion">
                      <Edit
                        style={{ color: blue[600], width: 30 }}
                      />
                        </NavLink>
  
                        <NavLink tag={Link} to="/Dashboard/ParTipoIdentificacion">
                      <Delete
                        style={{ color: red[700], width: 30 }}
                      />
                      </NavLink>

                      <NavLink tag={Link} to="/Dashboard/ParEmpresa">
                      <Visibility
                        style={{ color: green[500], width: 30}}/>
                        </NavLink>

                    </TableCell>
                    <TableCell>{row.codigoTipoIdentificacion}</TableCell>
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
  
  export default ParTipoIdentificacionView;