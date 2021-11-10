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
  import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
  import { useForm } from "../../Hooks/useForm";
  import { useGetData } from "../../Hooks/useGetData";
  import { Delete, Edit, Visibility } from "@material-ui/icons";
  import { makeStyles } from "@material-ui/core";
  
  import { postAction } from "../../Helpers/postHelper";
  import axios from "axios";
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
    { id: "numerodecliente", label: "Número de Cliente", minWidth: 100 },
    { id: "tipodeidentificacion", label: "Tipo de Identificación", minWidth: 100 },
    { id: "numerodeid", label: "Número de Identificación", minWidth: 100 },
    { id: "primerapellido", label: "Primer Apellido", minWidth: 100 },
    { id: "segundoapellido", label: "Segundo Apellido", minWidth: 100 },
    { id: "nombre", label: "Nombre", minWidth: 100 },
    { id: "estado", label: "Estado", minWidth: 100 },
  ];
  
  const initialForm = {
    Descripcion: "",
    CodigoEmpresa: 1,
    CodigoMarca: 0,
  };
  
  const validationsForm = (form) => {
    let errors = {};
    if (!form.Descripcion <= 0) {
      errors.Descripcion = "Debe ingresar una marca";
    }
    return errors;
  };
  
  const CliMaestroView = () => {
    const styles = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [dataToEdit, setDataToEdit] = useState(null);
  
    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
      Descripcion: "",
      CodigoEmpresa: 1,
      CodigoMarca: 0,
    });
  
    const { form, errors, handleChange, handleBlur, setForm } = useForm(
      initialForm,
      setConsolaSeleccionada,
      validationsForm
    );
  
    const { Data, Error, setData } = useGetData("CliMaestro");
  
    if (Error) return null;
    if (!Data) return null;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const addCliente = async () => {
      await axios
        .post(`${baseUrl}${"CliMaestro/PostCliMaestro"}`, form)
        .then((response) => {
          console.log(response);
          setData(Data.concat(response.data.result));
        });
    };
  
    const editCliente = async () => {
      let itemselect = JSON.stringify({
        Descripcion: form.Descripcion,
        CodigoEmpresa: consolaSeleccionada.codigoEmpresa,
        CodigoMarca: consolaSeleccionada.codigoMarca,
      });
      console.log(itemselect);
  
      var config = {
        method: "put",
        url: `${baseUrl}${"CliMaestro/PutCliMaestro"}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: itemselect,
      };
  
      axios(config)
        .then(function (response) {
          console.log(response.data);
          Data.map((item) => {
            if (consolaSeleccionada.codigoMarca === item.codigoMarca) {
              console.log("se cumpple el if");
              item.descripcion = form.Descripcion;
              console.log(item.descripcion);
              console.log(consolaSeleccionada.descripcion);
            }
          });
          abrirCerrarModalEditar();
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    const deleteCliente = async () => {
      console.log(consolaSeleccionada.codigoMarca);
      let itemselect = JSON.stringify({
        Descripcion: "",
        CodigoEmpresa: consolaSeleccionada.codigoEmpresa,
        CodigoMarca: consolaSeleccionada.codigoMarca,
      });
  
      var config = {
        method: "delete",
        url: `${baseUrl}${"CliMaestro/DeleteCliMaestro"}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: itemselect,
      };
  
      await axios
        .delete(`${baseUrl}${"CliMaestro/DeleteCliMaestro"}`, config)
        .then((response) => {
          console.log(response);
          setData(
            Data.filter(
              (item) => item.codigoMarca !== consolaSeleccionada.codigoMarca
            )
          );
          abrirCerrarModalEliminar();
          setConsolaSeleccionada(initialForm);
        });
    };
  
    const abrirCerrarModalEditar = () => {
      setModalEditar(!modalEditar);
    };
    const abrirCerrarModalEliminar = () => {
      setModalEliminar(!modalEliminar);
    };
  
    const seleccionarConsola = (row, action) => {
      setConsolaSeleccionada(row);
      action === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
    };
  
    const bodyEditar = (
      <div className={styles.modal}>
        <h3>Editar Cliente</h3>
        <TextField
          id="edit"
          name="Descripcion"
          className={styles.inputMaterial}
          label="Ingresa la marca"
          onChange={handleChange}
          value={form && form.descripcion}
        ></TextField>
        <br />
        <div align="right">
          <Button color="primary" onClick={() => editCliente()}>
            Editar
          </Button>
          <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
        </div>
      </div>
    );
  
    const bodyEliminar = (
      <div className={styles.modal}>
        <p>
          Estás seguro que deseas eliminar el cliente
          <br />
          <b>{consolaSeleccionada && consolaSeleccionada.descripcion}</b> ?{" "}
        </p>
        <div align="right">
          <Button color="secondary" onClick={() => deleteCliente()}>
            Sí
          </Button>
          <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
        </div>
      </div>
    );
  
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
          Clientes
        </Typography>
  
        <Grid mb={4} container alignItems="center">
          <Grid item mr={1}>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => addCliente()}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
  
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={12}>
                    Catálogo Clientes
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

                    <NavLink tag={Link} to="/CliMaestro">
                      <Edit
                        style={{ color: blue[600], width: 30 }}
                        onClick={() => seleccionarConsola(row, "Editar")}
                      />
                        </NavLink>
  
                        <NavLink tag={Link} to="/CliMaestro">
                      <Delete
                        style={{ color: red[700], width: 30 }}
                        onClick={() => seleccionarConsola(row, "Eliminar")}
                      />
                      </NavLink>

                      <NavLink tag={Link} to="/CliMaestro">
                      <Visibility
                        style={{ color: green[500], width: 30}}/>
                        </NavLink>

                    </TableCell>
                    <TableCell>{row.codigoEmpresa}</TableCell>
                    <TableCell>{row.numeroCliente}</TableCell>
                    <TableCell>{row.codigoTipoIdentificacion}</TableCell>
                    <TableCell>{row.numeroId}</TableCell>
                    <TableCell>{row.apellido1}</TableCell>
                    <TableCell>{row.apellido2}</TableCell>
                    <TableCell>{row.nombre}</TableCell>
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
        <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>
  
        <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
      </Grid>
    );
  };
  
  export default CliMaestroView;