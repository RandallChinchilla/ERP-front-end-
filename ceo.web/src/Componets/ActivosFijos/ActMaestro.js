import { makeStyles } from "@material-ui/core";
import {
  TextField,
  Box,
  Grid,
  Paper,
  Typography,
  FormHelperText,
  FormControl,
  Button,
  Divider,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useForm } from "../../Hooks/useForm";
import { SelectCross } from "../Listas/SelectCross";
import { AutContext } from "../../Context/AutContext";
import { postAction } from "../../Helpers/postHelper";

const useStyles = makeStyles(() => ({
  paper: {
    width: 1200,
  },
  grid: {
    flex: 1,
    justifyContent: "center",
  },
  textfiled: {
    width: "100%",
  },
  listas: {
    width: "100%",
  },
}));

const validationsForm = (form) => {
  let errors = {};
  if (!form.CodigoEmpresa) {
    errors.CodigoEmpresa = "Debe ingresar una empresa";
    errors.error = true;
  }
  if (!form.CodigoActivo) {
    errors.CodigoActivo = "Debe ingresar el codigo del activo";
    errors.error = true;
  }
  if (!form.CodigoGrupo) {
    errors.CodigoGrupo = "Debe seleccionar un valor";
    errors.error = true;
  }
  if (!form.CodigoSubGrupo) {
    errors.CodigoSubGrupo = "Debe seleccionar un valor";
    errors.error = true;
  }
  if (!form.Descripcion) {
    errors.Descripcion = "Debe ingresar una descripción";
    errors.error = true;
  }
  if (!form.NumeroProveedor) {
    errors.NumeroProveedor = "Debe ingresar el número del provee";
    errors.error = true;
  }
  if (!form.CodigoMarca) {
    errors.CodigoMarca = "Debe seleccionar una valor";
    errors.error = true;
  }
  if (!form.FechaCompra) {
    errors.FechaCompra = "Debe ingresar una fecha valida";
    errors.error = true;
  }
  if (!form.FechaSalida) {
    errors.FechaSalida = "Debe ingresar una fecha valida";
    errors.error = true;
  }
  if (!form.CodigoMoneda) {
    errors.CodigoMoneda = "Debe seleccionar una valor";
    errors.error = true;
  }
  if (!form.ValorCompra) {
    errors.ValorCompra = "Debe ingresar valor de compra";
    errors.error = true;
  }
  if (!form.MontoDepreciado) {
    errors.MontoDepreciado = "Debe ingresar un monto a depreciar";
    errors.error = true;
  }
  if (!form.ValorEnLibros) {
    errors.ValorEnLibros = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.ValorDesecho) {
    errors.ValorDesecho = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.NumeroFactura) {
    errors.NumeroFactura = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.DiasGarantia) {
    errors.DiasGarantia = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.Serie) {
    errors.Serie = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.Placa) {
    errors.Placa = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.Ubicacion) {
    errors.Ubicacion = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.UsuarioAsignado) {
    errors.UsuarioAsignado = "Debe ingresar un valor";
    errors.error = true;
  }
  if (!form.CodigoEstado) {
    errors.CodigoEstado = "Debe seleccionar un valor";
    errors.error = true;
  }
  if (!form.CodigoCentroCosto) {
    errors.CodigoCentroCosto = "Debe seleccionar un valor";
    errors.error = true;
  }
  if (!form.CodigoDepartamento) {
    errors.CodigoDepartamento = "Debe seleccionar un valor";
    errors.error = true;
  }

  return errors;
};

export const ActMaestro = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const [value, setValue] = useState(new Date());
  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoActivo: "",
    CodigoGrupo: "",
    CodigoSubGrupo: "",
    Descripcion: "",
    FechaCompra: "",
    FechaSalida: "",
    ValorCompra: "",
    MontoDepreciado: "",
    ValorEnLibros: "",
    ValorDesecho: "",
    CodigoGrupo: "",
    NumeroProveedor: "",
    CodigoMarca: "",
    CodigoMoneda: "",
    NumeroFactura: "",
    DiasGarantia: "",
    Serie: "",
    Placa: "",
    Ubicacion: "",
    UsuarioAsignado: "",
    CodigoEstado: "",
    CodigoCentroCosto: "",
    CodigoDepartamento: "",
    IdUsuario: userData.id,
    userName: userData.userName,
  };

  const hanldeSubmit = () => {
    postAction("ActMaestro/PostActMaestro", form).then((res) => {
      console.log(res);
    });
  };

  const { form, errors, handleChange, handleChangeDate, handleBlur, setForm } =
    useForm(initialForm, validationsForm);

  const styles = useStyles();
  return (
    <div>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box container>
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
                  Activo
                </Typography>
              </Grid>
              <Grid item xs={6} className={styles.grid}>
                <TextField
                  disabled
                  id="CodigoEmpresa"
                  name="CodigoEmpresa"
                  label="Empresa"
                  size="small"
                  // disabled="true"
                  className={styles.textfiled}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NombreEmpresa}
                ></TextField>
                {errors.CodigoEmpresa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEmpresa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="CodigoActivo"
                  name="CodigoActivo"
                  className={styles.textfiled}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoActivo}
                  label="Codigo"
                  size="small"
                ></TextField>
                {errors.CodigoActivo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoActivo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Grupo"}
                    controller={"ActGrupo/GetActGrupos"}
                    name={"CodigoGrupo"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoGrupo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoGrupo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Sub Grupo"}
                    controller={"ActSubGrupo/GetActSubGrupos"}
                    name={"CodigoSubGrupo"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoSubGrupo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoSubGrupo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} className={styles.grid}>
                <TextField
                  id="Descripcion"
                  name="Descripcion"
                  label="Descripción"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Descripcion}
                  className={styles.textfiled}
                ></TextField>
                {errors.Descripcion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Descripcion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="NumeroProveedor"
                  name="NumeroProveedor"
                  label="Número Proveedor"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroProveedor}
                  className={styles.textfiled}
                ></TextField>
                {errors.NumeroProveedor && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroProveedor}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Marca"}
                    controller={"ActMarca/GetActMarcas"}
                    name={"CodigoMarca"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoMarca && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoMarca}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaCompra"
                    // name="FechaCompra"
                    label="Fecha de Compra"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaCompra = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaCompra}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
                        size="small"
                        id="FechaCompra"
                        name="FechaCompra"
                        onBlur={handleBlur}
                        value={form.FechaCompra}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaCompra && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaCompra}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaSalida"
                    label="Fecha de Salida"
                    inputFormat="yyyy/MM/dd"
                    name="FechaSalida"
                    value={form.FechaSalida}
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaSalida = newvalue;
                    }}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
                        size="small"
                        id="FechaSalida"
                        name="FechaSalida"
                        onBlur={handleBlur}
                        value={form.FechaSalida}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaSalida && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaSalida}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Moneda"}
                    controller={"ParMonedum/GetParMonedas"}
                    name={"CodigoMoneda"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoMoneda && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoMoneda}
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="ValorCompra"
                  name="ValorCompra"
                  label="Valor Compra"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.ValorCompra}
                ></TextField>
                {errors.ValorCompra && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.ValorCompra}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="ValorDesecho"
                  name="ValorDesecho"
                  label="Valor Desecho"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.ValorDesecho}
                ></TextField>
                {errors.ValorDesecho && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.ValorDesecho}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="MontoDepreciado"
                  name="MontoDepreciado"
                  label="Monto Depreciado"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MontoDepreciado}
                ></TextField>
                {errors.MontoDepreciado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MontoDepreciado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="ValorEnLibros"
                  name="ValorEnLibros"
                  label="Valor en Libros"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.ValorEnLibros}
                ></TextField>
                {errors.ValorEnLibros && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.ValorEnLibros}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="NumeroFactura"
                  name="NumeroFactura"
                  label="Número Factura"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroFactura}
                ></TextField>
                {errors.NumeroFactura && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroFactura}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="DiasGarantia"
                  name="DiasGarantia"
                  label="Días Garantía"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.DiasGarantia}
                ></TextField>
                {errors.DiasGarantia && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.DiasGarantia}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="Serie"
                  name="Serie"
                  label="Serie"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Serie}
                ></TextField>
                {errors.Serie && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Serie}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="Placa"
                  name="Placa"
                  label="Placa"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Placa}
                ></TextField>
                {errors.Placa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Placa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Departamento"}
                    controller={"ParDepartamento/GetParDepartamentos"}
                    name={"CodigoDepartamento"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoDepartamento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoDepartamento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Centro de Costos"}
                    controller={"ConCentrocosto/GetConCentrosCosto"}
                    name={"CodigoCentroCosto"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoCentroCosto && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoCentroCosto}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="Ubicacion"
                  name="Ubicacion"
                  label="Ubicación"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Ubicacion}
                ></TextField>
                {errors.Ubicacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Ubicacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="UsuarioAsignado"
                  name="UsuarioAsignado"
                  label="Usuario Asignado"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.UsuarioAsignado}
                ></TextField>
                {errors.UsuarioAsignado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.UsuarioAsignado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Estado"}
                    controller={"ActEstado/GetActEstados"}
                    name={"CodigoEstado"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoEstado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEstado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} className={styles.grid}>
                <TextField
                  disabled
                  id="IdUsuario"
                  name="IdUsuario"
                  label="Usuario"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.userName}
                  className={styles.textfiled}
                ></TextField>
                {errors.IdUsuario && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IdUsuario}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} container justifyContent="end">
                <Button variant="contained" onClick={hanldeSubmit}>
                  Agregar
                </Button>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Divider />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
