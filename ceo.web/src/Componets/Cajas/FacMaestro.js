import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Paper,
  FormHelperText,
  Button,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { blue } from "@mui/material/colors";
import SelectPais from "../Listas/SelectPais";
import SelectEstado from "../Listas/SelectEstado";
import SelectBanco from "../Listas/SelectBanco";
import SelectCanton from "../Listas/SelectCanton";
import SelectProvincia from "../Listas/SelectProvincia";
import { useParams } from "react-router-dom";
import { useData } from "../../Hooks/useData";
import SelectTipoComprobante from "../Listas/SelectTipoComprobante";
import { Smartphone } from "@material-ui/icons";
import SelectMoneda from "../Listas/SelectMoneda";
import SelectSucursal from "../Listas/SelectSucursal";
import SelectMedioPago from "../Listas/SelectMedioPago";

const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
  paper: {
    width: 1200,
    height: 700,
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

  //   if (!form.Apellido1) {
  //     errors.Apellido1 = "Debe ingresar el primer apellido";
  //     errors.error = true;
  //   }
  //   if (!form.Apellido2) {
  //     errors.Apellido2 = "Debe ingresar el segundo apellido";
  //     errors.error = true;
  //   }
  //   if (!form.Nombre) {
  //     errors.Nombre = "Debe ingresar un nombre";
  //     errors.error = true;
  //   }
  //   if (!form.Contacto) {
  //     errors.Contacto = "Debe ingresar un contacto";
  //     errors.error = true;
  //   }
  //   if (!form.Telefono1) {
  //     errors.Telefono1 = "Debe ingresar un número de teléfono";
  //     errors.error = true;
  //   }
  //   if (!form.Telefono2) {
  //     errors.Telefono2 = "Debe ingresar un número de teléfono";
  //     errors.error = true;
  //   }
  //   if (!form.TelefonoCelular) {
  //     errors.TelefonoCelular = "Debe ingresar un número de teléfono celular";
  //     errors.error = true;
  //   }
  //   if (!form.CorreoElectronico) {
  //     errors.CorreoElectronico = "Debe ingresar un correo electronico";
  //     errors.error = true;
  //   }
  //   if (!form.Pais) {
  //     errors.Pais = "Debe ingresar un país";
  //     errors.error = true;
  //   }
  //   if (!form.Provincia) {
  //     errors.Provincia = "Debe ingresar una provincia";
  //     errors.error = true;
  //   }
  //   if (!form.Canton) {
  //     errors.Canton = "Debe ingresar un cantón";
  //     errors.error = true;
  //   }
  //   if (!form.Direccion) {
  //     errors.Direccion = "Debe ingresar la dirección";
  //     errors.error = true;
  //   }
  //   if (!form.Banco) {
  //     errors.Banco = "Debe ingresar un banco";
  //     errors.error = true;
  //   }
  //   if (!form.Iban) {
  //     errors.Iban = "Debe ingresar un IBAN";
  //     errors.error = true;
  //   }
  //   if (!form.FechaIngreso) {
  //     errors.FechaIngreso = "Debe ingresar la fecha de ingreso";
  //     errors.error = true;
  //   }
  //   if (!form.Observaciones) {
  //     errors.Observaciones = "Debe ingresar sus observaciones";
  //     errors.error = true;
  //   }
  //   if (!form.Estado) {
  //     errors.Estado = "Debe ingresar un estado";
  //     errors.error = true;
  //   }
  //   if (!form.Usuario) {
  //     errors.Usuario = "Debe ingresar un usuario";
  //     errors.error = true;
  //   }
  return errors;
};

const FacMaestro = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editFacMaestro"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const dataInitial = {};

  const initialForm = {
    CodigoEmpresa: rowEdit
      ? rowEdit.CliMaestro.CodigoEmpresaNavigation.Nombre
      : "",
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
    // Apellido1: rowEdit ? rowEdit.Apellido1 : "",
    // Apellido2: rowEdit ? rowEdit.Apellido2 : "",
    // Nombre: rowEdit ? rowEdit.Nombre : "",
    // Contacto: rowEdit ? rowEdit.Contacto : "",
    // Telefono1: rowEdit ? rowEdit.Telefono1 : "",
    // Telefono2: rowEdit ? rowEdit.Telefono2 : "",
    // TelefonoCelular: rowEdit ? rowEdit.TelefonoCelular : "",
    // CorreoElectronico: rowEdit ? rowEdit.CorreoElectronico : "",
    // Direccion: rowEdit ? rowEdit.Direccion : "",
    // NumeroBanco: rowEdit ? rowEdit.NumeroBanco : "",
    // Iban: rowEdit ? rowEdit.Iban : "",
    // FechaIngreso: rowEdit ? rowEdit.FechaIngreso : "",
    // IndicadorEsProveedor: rowEdit ? rowEdit.IndicadorEsProveedor : "",
    // Observaciones: rowEdit ? rowEdit.Observaciones : "",
    // CodigoTipoIdentificacion: rowEdit ? rowEdit.CodigoTipoIdentificacion : "",
    // codigoPais: rowEdit ? rowEdit.CodigoPais : "",
    // CodigoProvincia: rowEdit ? rowEdit.CodigoProvincia : "",
    // CodigoCanton: rowEdit ? rowEdit.CodigoCanton : "",
    // CodigoEstado: rowEdit ? rowEdit.CodigoEstado : "",
    // IdUsuario: rowEdit ? rowEdit.IdUsuario : "",
    // Id: rowEdit ? rowEdit.Id : "",
    // NumeroId: rowEdit ? rowEdit.NumeroId : "",
  };

  const { isNew } = useParams();
  console.log(isNew);

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );
  const { response, handleUpdate, handleAdd } = useData(
    form,
    "CliMaestro/PutCliMaestro"
  );

  return (
    <Grid container justifyContent="center">
      <Paper elevation={3} className={styles.paper}>
        <Box container sx={{ maxWidth: "100%" }}>
          <Grid container spacing={2} justifyContent="center" pl={5} pr={5}>
            <Grid item xs={12} container justifyContent="center" mt={5} mb={5}>
              <Typography component="h1" variant="h6" noWrap>
                Detalle Factura
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
                <SelectTipoComprobante
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <FormControl size="small" className={styles.listas}>
                <SelectMoneda
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <FormControl size="small" className={styles.listas}>
                <SelectMedioPago
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
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
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default FacMaestro;
