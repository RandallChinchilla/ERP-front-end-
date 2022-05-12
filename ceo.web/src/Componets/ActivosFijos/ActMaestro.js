import { makeStyles } from "@material-ui/core";
import {
  TextField,
  Box,
  Grid,
  Paper,
  Typography,
  FormHelperText,
  FormControl,
} from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useForm } from "../../Hooks/useForm";
import { SelectCross } from "../Listas/SelectCross";

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
  if (!form.Codigo) {
    errors.Codigo = "Debe ingresar el codigo del activo";
    errors.error = true;
  }
  if (!form.CodigoGrupo) {
    errors.CodigoGrupo = "Debe ingresar el codigo del activo";
    errors.error = true;
  }
  if (!form.CodigoSubGrupo) {
    errors.CodigoSubGrupo = "Debe ingresar el codigo del sub grupo";
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
    errors.CodigoMarca = "Debe seleccionar una marca";
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
    errors.CodigoMoneda = "Debe seleccionar una marca";
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

  return errors;
};

export const ActMaestro = () => {
  const initialForm = {
    CodigoEmpresa: "",
    Codigo: "",
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
  };

  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );

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
                  id="CodigoEmpresa"
                  name="CodigoEmpresa"
                  label="Empresa"
                  size="small"
                  // disabled="true"
                  className={styles.textfiled}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoEmpresa}
                ></TextField>
                {errors.CodigoEmpresa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEmpresa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} className={styles.grid}>
                <TextField
                  id="Codigo"
                  name="Codigo"
                  className={styles.textfiled}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Codigo}
                  label="Codigo"
                  size="small"
                ></TextField>
                {errors.Codigo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Codigo}
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
                  label="NumeroProveedor"
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
                    controller={"ActMarca"}
                    name={"codigoMarca"}
                    field={"descripcion"}
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
                    name="FechaCompra"
                    label="Fecha de Compra"
                    inputFormat="MM/dd/yyyy"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.FechaCompra}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
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
                    label="Fecha de Salida"
                    inputFormat="MM/dd/yyyy"
                    renderInput={(params) => (
                      <TextField
                        size="small"
                        id="FechaSalida"
                        name="FechaSalida"
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
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
