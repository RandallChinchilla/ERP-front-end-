import {
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
    Button,
    Divider,
    Modal,
    TextField,
  } from "@mui/material";
import React, { useState } from "react";
import { Delete, Edit, Visibility } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { red, blue, green } from "@mui/material/colors";
import { Link, NavLink } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useForm } from "../../Hooks/useForm";
import { useGetData } from "../../Hooks/useGetData";
import { postAction } from "../../Helpers/postHelper";
import axios from "axios";
  
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
    { id: "codigocondicionventa", label: "Condición Venta", minWidth: 100 },
    { id: "descripcion", label: "Descripción", minWidth: 100 },
  ];
  
  const initialForm = {
    Descripcion: "",
    CodigoCondicionVenta: "",
  };
  
  const validationsForm = (form) => {
    let errors = {};
    if (!form.Descripcion <= 0) {
      errors.Descripcion = "Debe ingresar una marca";
    }
    return errors;
  };
  
  const FelCondicionVentaView = () => {
    const styles = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [dataToEdit, setDataToEdit] = useState(null);
  
    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
      Descripcion: "",
      CodigoCondicionVenta: "",
    });
  
    const { form, errors, handleChange, handleBlur, setForm } = useForm(
      initialForm,
      setConsolaSeleccionada,
      validationsForm
    );

    const { Data, Error, setData } = useGetData("FelCondicionVentum");
    console.log(Data);
  
    if (Error) return null;
    if (!Data) return null;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    }; 
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const addCondicion = async () => {
      await axios
        .post(`${baseUrl}${"FelCondicionVentum/PostFelCondicionVentum"}`, form)
        .then((response) => {
          console.log(response);
          setData(Data.concat(response.data.result));
        });
    };
  
    const editCondicion  = async () => {
      let itemselect = JSON.stringify({
        descripcion: form.descripcion,
        codigoCondicionVenta: consolaSeleccionada.codigoCondicionVenta,
      });
      console.log(itemselect);
  
      var config = {
        method: "put",
        url: `${baseUrl}${"FelCondicionVentum/PutFelCondicionVentum"}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: itemselect,
      };
  
      axios(config)
        .then(function (response) {
          console.log(response.data);
          Data.map((item) => {
            if (consolaSeleccionada.codigoCondicionVenta === item.codigoCondicionVenta) {
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
  
    const deletCondicion = async () => {
      console.log(consolaSeleccionada.codigoCondicionVenta);
      let itemselect = JSON.stringify({
        Descripcion: "",
        codigoCondicionVenta: consolaSeleccionada.codigoCondicionVenta,
      });
  
      var config = {
        method: "delete",
        url: `${baseUrl}${"FelCondicionVentum/DeleteFelCondicionVentum"}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: itemselect,
      };
  
      await axios
        .delete(`${baseUrl}${"FelCondicionVentum/DeleteFelCondicionVentum"}`, config)
        .then((response) => {
          console.log(response);
          setData(
            Data.filter(
              (item) => item.codigoCondicionVenta !== consolaSeleccionada.codigoCondicionVenta
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
        <h3>Editar Condición</h3>
        <TextField
          id="edit"
          name="Descripcion"
          className={styles.inputMaterial}
          label="Ingresa la condición"
          onChange={handleChange}
          value={form && form.Descripcion}
        ></TextField>
        <br />
        <div align="right">
          <Button color="primary" onClick={() => editCondicion()}>
            Editar
          </Button>
          <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
        </div>
      </div>
    );
  
    const bodyEliminar = (
      <div className={styles.modal}>
        <p>
          Estás seguro que deseas eliminar la Condición
          <br />
          <b>{consolaSeleccionada && consolaSeleccionada.descripcion}</b> ?{" "}
        </p>
        <div align="right">
          <Button color="secondary" onClick={() => deletCondicion()}>
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
              Condición de Venta
            </Typography>
            <Grid item marginBottom={3}>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => addCondicion()}
          >
            Agregar
          </Button>
        </Grid>
          </Grid>  

        <Paper elevation={3} sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={12}>
                    Catálogo Condición Venta
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
                  <TableRow key={row.codigoCondicionVenta}>
                    <TableCell>
                      <Edit style={{ color: blue[600], width: 30 }}
                      onClick={() => seleccionarConsola(row, "Editar")}/>
                      <Delete style={{ color: red[700], width: 30 }}
                      onClick={() => seleccionarConsola(row, "Eliminar")}/>
                      <Visibility style={{ color: green[500], width: 30}}/>
                    </TableCell>
                    <TableCell>{row.codigoCondicionVenta}</TableCell>
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
        <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
      </Grid>
    );
  };
  
  export default FelCondicionVentaView;