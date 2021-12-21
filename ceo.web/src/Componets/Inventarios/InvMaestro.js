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
import { useParams } from "react-router-dom";
import { useData } from "../../Hooks/useData";
import SelectMoneda from "../Listas/SelectMoneda";
import SelectTipoImpuesto from "../Listas/SelectTipoImpuesto";
import SelectUnidadMedida from "../Listas/SelectUnidadMedida";
import SelectCodigoLinea from "../Listas/SelectCodigoLinea";

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
  if (!form.CodigoArticulo) {
    errors.CodigoArticulo = "Debe ingresar un articulo";
    errors.error = true;
  }
  if (!form.Descripcion) {
    errors.Descripcion = "Debe ingresar una descripción";
    errors.error = true;
  }
  if (!form.FechaUltimaCompra) {
    errors.FechaUltimaCompra = "Debe ingresar la fecha de la última compra";
    errors.error = true;
  }
  if (!form.FechaUltimaVenta) {
    errors.FechaUltimaVenta = "Debe ingresar la fecha de la última venta";
    errors.error = true;
  }
  if (!form.CostoPromedio) {
    errors.CostoPromedio = "Debe ingresar el costo promedio";
    errors.error = true;
  }
  if (!form.CostoUltimaCompra) {
    errors.CostoUltimaCompra = "Debe ingresar el costo de la ultima compra";
    errors.error = true;
  }
  if (!form.CantidadMinima) {
    errors.CantidadMinima = "Debe ingresar la cantidad minima";
    errors.error = true;
  }
  if (!form.CantidadMaxima) {
    errors.CantidadMaxima = "Debe ingresar la cantidad maxima";
    errors.error = true;
  }
  if (!form.Cantidad) {
    errors.Cantidad = "Debe ingresar la cantidad";
    errors.error = true;
  }
  if (!form.Observaciones) {
    errors.Observaciones = "Debe ingresar las observaciones";
    errors.error = true;
  }
  if (!form.PrecioVenta) {
    errors.PrecioVenta = "Debe ingresar el precio de venta";
    errors.error = true;
  }
  if (!form.CodigoLinea) {
    errors.CodigoLinea = "Debe seleccionar el código linea";
    errors.error = true;
  }
  if (!form.CodigoTipoImpuesto) {
    errors.CodigoTipoImpuesto = "Debe seleccionar el tipo de impuesto";
    errors.error = true;
  }
  if (!form.CodigoMoneda) {
    errors.CodigoMoneda = "Debe seleccionar la moneda";
    errors.error = true;
  }
  if (!form.CodigoUnidadMedida) {
    errors.CodigoUnidadMedida = "Debe seleccionar la unidad de medida";
    errors.error = true;
  }
  if (!form.Id) {
    errors.Id = "Debe ingresar la identificación";
    errors.error = true;
  }
  if (!form.UserName) {
    errors.UserName = "Debe ingresar el usuario";
    errors.error = true;
  }
  return errors;
};

const InvMaestro = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editInvMaestro"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const dataInitial = {};

  const initialForm = {
    CodigoEmpresa: rowEdit
      ? rowEdit.CodigoEmpresaNavigation.Nombre
      : "",
    CodigoArticulo: rowEdit ? rowEdit.CodigoArticulo : "",
    Descripcion: rowEdit ? rowEdit.Descripcion : "",
    FechaUltimaCompra: rowEdit ? rowEdit.FechaUltimaCompra : "",
    FechaUltimaVenta: rowEdit ? rowEdit.FechaUltimaVenta : "",
    CostoPromedio: rowEdit ? rowEdit.CostoPromedio : "",
    CostoUltimaCompra: rowEdit ? rowEdit.CostoUltimaCompra : "",
    CantidadMinima: rowEdit ? rowEdit.CantidadMinima : "",
    CantidadMaxima: rowEdit ? rowEdit.CantidadMaxima : "",
    Cantidad: rowEdit ? rowEdit.Cantidad : "",
    Observaciones: rowEdit ? rowEdit.Observaciones : "",
    PrecioVenta: rowEdit ? rowEdit.PrecioVenta : "",
    CodigoLinea: rowEdit ? rowEdit.CodigoLinea : "",
    CodigoTipoImpuesto: rowEdit ? rowEdit.CodigoTipoImpuesto : "",
    CodigoUnidadMedida: rowEdit ? rowEdit.CodigoUnidadMedida : "",
    CodigoMoneda: rowEdit ? rowEdit.CodigoMoneda : "",
    Id: rowEdit ? rowEdit.Id : "",
    UserName: rowEdit ? rowEdit.UserName : "",
  };

  const { isNew } = useParams();
  console.log(isNew);

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );
  const { response, handleUpdate, handleAdd } = useData(
    form,
    "IvtMaestro/PutIvtMaestro"
  );

  return (
    <Grid container justifyContent="center">
      <Paper elevation={3} className={styles.paper}>
        <Box container sx={{ maxWidth: "100%" }}>
          <Grid container spacing={2} justifyContent="center" pl={5} pr={5}>
            
            
            
            <Grid item xs={12} container justifyContent="center" mt={5} mb={5}>
              <Typography component="h1" variant="h6" noWrap>
                Inventario Maestro
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
            <Grid item xs={3} container justifyContent="center">
              <TextField
                id="CodigoArticulo"
                name="CodigoArticulo"
                label="Articulo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.CodigoArticulo}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.CodigoArticulo && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoArticulo}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <TextField
                id="Descripcion"
                name="Descripcion"
                label="Descripción"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Descripcion}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.Descripcion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Descripcion}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <TextField
                type="datetime-local"
                InputLabelProps={{shrink: true,}}
                id="FechaUltimaCompra"
                name="FechaUltimaCompra"
                label="Fecha Última Compra"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.FechaUltimaCompra}
                className={styles.inpuntEmpresa}
                size="small"
                ></TextField>
                {errors.FechaUltimaCompra && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaUltimaCompra}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <TextField
                type="datetime-local"
                InputLabelProps={{shrink: true,}}
                id="FechaUltimaVenta"
                name="FechaUltimaVenta"
                label="Fecha Última Venta"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.FechaUltimaVenta}
                className={styles.inpuntEmpresa}
                size="small"
                ></TextField>
                {errors.FechaUltimaVenta && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaUltimaVenta}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <TextField
                id="CostoPromedio"
                name="CostoPromedio"
                label="Costo Promedio"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.CostoPromedio}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.CostoPromedio && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CostoPromedio}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <TextField
                id="CostoUltimaCompra"
                name="CostoUltimaCompra"
                label="Costo Última Compra"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.CostoUltimaCompra}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.CostoUltimaCompra && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CostoUltimaCompra}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <TextField
                id="CantidadMinima"
                name="CantidadMinima"
                label="Cantidad Mínima"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.CantidadMinima}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.CantidadMinima && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CantidadMinima}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={3} container justifyContent="center">
              <TextField
                id="CantidadMinima"
                name="CantidadMinima"
                label="Cantidad Mínima"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.CantidadMinima}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.CantidadMinima && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CantidadMinima}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <TextField
                id="Cantidad"
                name="Cantidad"
                label="Cantidad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Cantidad}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.Cantidad && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Cantidad}
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
              <Grid item xs={4} container justifyContent="center">
              <TextField
                id="PrecioVenta"
                name="PrecioVenta"
                label="Precio Venta"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.PrecioVenta}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.PrecioVenta && (
                <FormHelperText id="my-helper-text" error>
                  {errors.PrecioVenta}
                </FormHelperText>
              )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
              <FormControl size="small" className={styles.listas}>
                <SelectCodigoLinea
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
              {errors.CodigoLinea && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoLinea}
                </FormHelperText>
              )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
              <FormControl size="small" className={styles.listas}>
                <SelectTipoImpuesto
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
              {errors.CodigoTipoImpuesto && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoTipoImpuesto}
                </FormHelperText>
              )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
              <FormControl size="small" className={styles.listas}>
                <SelectMoneda
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
              {errors.CodigoMoneda && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoMoneda}
                </FormHelperText>
              )}
              </Grid>
            <Grid item xs={2} container justifyContent="center">
              <FormControl size="small" className={styles.listas}>
                <SelectUnidadMedida
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
              {errors.CodigoUnidadMedida && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoUnidadMedida}
                </FormHelperText>
              )}
            </Grid>

              <Grid item xs={6} container justifyContent="center">
              <TextField
                id="Id"
                name="Id"
                label="Identificación"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Id}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.Id && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Id}
                </FormHelperText>
              )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
              <TextField
                id="UserName"
                name="UserName"
                label="Usuario"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.UserName}
                className={styles.inpuntEmpresa}
                size="small"
              ></TextField>
              {errors.UserName && (
                <FormHelperText id="my-helper-text" error>
                  {errors.UserName}
                </FormHelperText>
              )}
              </Grid>






              </Grid>
              </Box>
              </Paper>
              </Grid>
  );
};

export default InvMaestro;
