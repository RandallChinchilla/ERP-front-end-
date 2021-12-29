import { Divider, InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import MaterialTable from "material-table";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postAction } from "../../Helpers/postHelper";
import { useForm } from "../../Hooks/useForm";
import { useGetData } from "../../Hooks/useGetData";
import SelectCondicionVenta from "../Listas/SelectCondicionVenta";
import SelectMedioPago from "../Listas/SelectMedioPago";
import SelectMoneda from "../Listas/SelectMoneda";
import SelectSucursal from "../Listas/SelectSucursal";
import SelectTipoComprobante from "../Listas/SelectTipoComprobante";
import { FacMaestroDetalle } from "./FacMaestroDetalle";

const useStyles = makeStyles(() => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
  paper: {
    width: 1200,
  },
  listas: {
    width: "100%",
  },
  inpuntEmpresa: { width: "100%" },
  gridContainer: { paddingRight: 5, paddingLeft: 5 },
}));

const validationsForm = (form) => {
  let errors = {};
  if (!form.CodigoEmpresa) {
    errors.CodigoEmpresa = "Debe ingresar una empresa";
    errors.error = true;
  }
  if (!form.codigoTipoDocumento) {
    errors.codigoTipoDocumento = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.Nombre) {
    errors.Nombre = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.NumeroCliente) {
    errors.NumeroCliente = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.CorreoElectronico) {
    errors.CorreoElectronico = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }

  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.Direccion) {
    errors.Direccion = "Debe ingresar la dirección";
    errors.error = true;
  }
  if (!form.Observaciones) {
    errors.Observaciones = "Debe ingresar sus observaciones";
    errors.error = true;
  }
  return errors;
};

const FacMaestro = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editFacMaestro"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    Consecutivo: rowEdit ? rowEdit.Consecutivo : "",
    CodigoEmpresa: rowEdit ? rowEdit.CodigoEmpresa : userData.codigoEmpresa,
    CodigoSucursal: rowEdit ? rowEdit.CodigoSucursal : "",
    CodigoTipoDocumento: rowEdit ? rowEdit.CodigoTipoDocumento : "",
    CodigoCondicionVenta: rowEdit ? rowEdit.CodigoCondicionVenta : "",
    CodigoMoneda: rowEdit ? rowEdit.CodigoMoneda : "",
    CodigoMedioPago: rowEdit ? rowEdit.CodigoMedioPago : "",
    Nombre: rowEdit ? rowEdit.CliMaestro.Nombre : "",
    NumeroCliente: rowEdit ? rowEdit.CliMaestro.NumeroCliente : "",
    CorreoElectronico: rowEdit ? rowEdit.CliMaestro.CorreoElectronico : "",
    TelefonoCelular: rowEdit ? rowEdit.CliMaestro.TelefonoCelular : "",
    Direccion: rowEdit ? rowEdit.CliMaestro.Direccion : "",
    Observaciones: rowEdit ? rowEdit.Observaciones : "",
  };
  const { Data } = useGetData("CliMaestro/GetCliMaestros");
  const [columns, setColumns] = useState([
    { title: "Codigo Cliente", field: "NumeroCliente" },
    {
      title: "Nombre",
      field: "Nombre",
    },
  ]);

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

  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );

  const selectItem = (rowUpdate) => {
    console.log(rowUpdate);
    setForm({
      ...form,
      NumeroCliente: rowUpdate.NumeroCliente,
      Nombre: rowUpdate.Nombre,
      CorreoElectronico: rowUpdate.CorreoElectronico,
      TelefonoCelular: rowUpdate.TelefonoCelular,
      Direccion: rowUpdate.Direccion,
    });
    handleClose();
  };

  //+++++++add Encabezado de Factura+++++++++
  const addRow = () => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    const addRowRequest = {
      codigoEmpresa: form.CodigoEmpresa,
      consecutivo: 0,
      codigoMoneda: form.CodigoMoneda,
      // fecha: "24/07/2021",
      codigoSucursal: form.CodigoSucursal,
      codigoTipoDocumento: form.CodigoTipoDocumento,
      codigoCondicionVenta: form.CodigoCondicionVenta,
      codigoMedioPago: form.CodigoMedioPago,
      numeroCliente: form.NumeroCliente,
      observaciones: form.Observaciones,
      codigoEstado: 1,
      comprobanteElectronico: "0",
      comprobanteElectronicoReversa: "0",
      id: "scano1",
      userName: "scanobaq",
    };

    console.log(addRowRequest);
    postAction(
      "IvtEncabezadoFactura/PostIvtEncabezadoFactura",
      addRowRequest,
      userLoggedToken
    ).then((response) => {
      if (response.status === 200) {
        setShow(true);
        console.log("Registro agregado");
      } else {
        console.log("No se pudo agregar el registro");
      }
    });
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box container sx={{ maxWidth: "100%" }}>
            <Grid container spacing={2} justifyContent="center" pl={5} pr={5}>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                mt={5}
                mb={5}
              >
                <Typography component="h1" variant="h6" noWrap>
                  Factura
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="CodigoEmpresa"
                  name="CodigoEmpresa"
                  label="Empresa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoEmpresa}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.CodigoEmpresa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEmpresa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectSucursal
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectTipoComprobante
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCondicionVenta
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectMoneda
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectMedioPago
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  onClick={handleOpen}
                  id="NumeroCliente"
                  name="NumeroCliente"
                  label="Cliente"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCliente}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  className={styles.inpunt}
                />
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Nombre"
                  name="Nombre"
                  label="Nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Nombre}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Nombre && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Nombre}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroCliente"
                  name="NumeroCliente"
                  label="Cedula"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCliente}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroCliente && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCliente}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  type="email"
                  id="CorreoElectronico"
                  name="CorreoElectronico"
                  label="Correo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CorreoElectronico}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CorreoElectronico && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CorreoElectronico}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoCelular"
                  name="TelefonoCelular"
                  label="Teléfono"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TelefonoCelular}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TelefonoCelular && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TelefonoCelular}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Direccion"
                  name="Direccion"
                  label="Dirección"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Direccion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Direccion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Direccion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <TextField
                  id="Observaciones"
                  name="Observaciones"
                  label="Observaciones"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Observaciones}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
              </Grid>
              <Grid item xs={12} container justifyContent="end">
                <Button onClick={addRow}>Agregar</Button>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Divider />
              </Grid>
              {show && (
                <Grid container spacing={2} justifyContent="center">
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    mt={1}
                    mb={2}
                  >
                    <Typography component="h1" variant="h6" noWrap>
                      Totales
                    </Typography>
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="Subtotal"
                      name="Subtotal"
                      label="Subtotal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.Subtotal}
                      className={styles.inpuntEmpresa}
                      size="small"
                      disabled
                    ></TextField>
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="Descuento"
                      name="Descuento"
                      label="Descuento"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.Descuento}
                      className={styles.inpuntEmpresa}
                      size="small"
                      disabled
                    ></TextField>
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="Impuesto"
                      name="Impuesto"
                      label="Impuesto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.Impuesto}
                      className={styles.inpuntEmpresa}
                      size="small"
                      disabled
                    ></TextField>
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="Total"
                      name="Total"
                      label="Total"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.Total}
                      className={styles.inpuntEmpresa}
                      size="small"
                      disabled
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} mt={2}>
                    <Divider />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    mt={1}
                    mb={3}
                  >
                    <Typography component="h1" variant="h6" noWrap>
                      Detalle Factura
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FacMaestroDetalle data={initialForm} />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Box>
        </Paper>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccione un producto
          </Typography> */}
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
                  tooltip: "Seleccionar Articulo",
                  onClick: (event, rowData) => selectItem(rowData, false),
                },
              ]}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FacMaestro;
