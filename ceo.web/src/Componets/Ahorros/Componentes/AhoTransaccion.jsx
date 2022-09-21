import { Divider, InputAdornment, makeStyles } from "@material-ui/core";
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
import React, { useEffect, useState } from "react";
import { postAction } from "../../../Helpers/postHelper";
import { useForm } from "../../../Hooks/useForm";
import { SelectCross } from "../../Listas/SelectCross";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { putAction } from "../../../Helpers/putHelper";
import { useHistory, useLocation } from "react-router-dom";

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
  button: { margin: "1px" },
}));

const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

const validationsForm = (form) => {
  let errors = {};
  if (!form.CodigoEmpresa) {
    errors.CodigoEmpresa = "Debe ingresar una empresa";
    errors.error = true;
  }
  if (!form.NumeroTransaccion) {
    errors.NumeroTransaccion = "Debe ingresar el número de transacción";
    errors.error = true;
  }
  if (!form.NumeroInversion) {
    errors.NumeroInversion = "Debe ingresar el número de inversión";
    errors.error = true;
  }
  if (!form.CodigoTransaccion) {
    errors.CodigoTransaccion = "Debe seleccionar la transacción";
    errors.error = true;
  }
  if (!form.CodigoMoneda) {
    errors.CodigoMoneda = "Debe seleccionar la moneda";
    errors.error = true;
  }
  if (!form.MontoEfectivo) {
    errors.MontoEfectivo = "Debe ingresar el monto del efectivo";
    errors.error = true;
  }
  if (!form.MontoCheque) {
    errors.MontoCheque = "Debe ingresar el monto del cheque";
    errors.error = true;
  }
  if (!form.NumeroBanco) {
    errors.NumeroBanco = "Debe ingresar el banco";
    errors.error = true;
  }
  if (!form.NumeroCheque) {
    errors.NumeroCheque = "Debe ingresar el número de cheque";
    errors.error = true;
  }
  if (!form.MontoTarjeta) {
    errors.MontoTarjeta = "Debe ingresar el monto de la tarjeta";
    errors.error = true;
  }
  if (!form.NumeroTarjeta) {
    errors.NumeroTarjeta = "Debe ingresar el número de la tarjeta";
    errors.error = true;
  }
  if (!form.TipoCambio) {
    errors.TipoCambio = "Debe ingresar el tipo de cambio";
    errors.error = true;
  }
  if (!form.CodigoEmisor) {
    errors.CodigoEmisor = "Debe ingresar el emisor de la tarjeta";
    errors.error = true;
  }
  if (!form.MontoOtros) {
    errors.MontoOtros = "Debe ingresar monto de otros";
    errors.error = true;
  }
  if (!form.Referencia) {
    errors.Referencia = "Debe ingresar la referencia";
    errors.error = true;
  }
  if (!form.FechaIngreso) {
    errors.FechaIngreso = "Debe seleccionar la fecha de ingreso";
    errors.error = true;
  }
  if (!form.FechaEfectiva) {
    errors.FechaEfectiva = "Debe seleccionar la fecha efectiva";
    errors.error = true;
  }
  if (!form.FechaReversion) {
    errors.FechaReversion = "Debe seleccionar la fecha de reversión";
    errors.error = true;
  }
  if (!form.NumeroAsiento) {
    errors.NumeroAsiento = "Debe ingresar el número de asiento";
    errors.error = true;
  }
  if (!form.Usuario) {
    errors.Usuario = "Debe ingresar el usuario";
    errors.error = true;
  }
  return errors;
};

export const AhoTransaccion = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    NumeroTransaccion: "",
    NumeroInversion: "",
    CodigoTransaccion: 0,
    CodigoMoneda: 0,
    MontoEfectivo: "",
    MontoCheque: "",
    NumeroBanco: "",
    NumeroCheque: "",
    MontoTarjeta: "",
    NumeroTarjeta: "",
    TipoCambio: "",
    CodigoEmisor: 0,
    MontoOtros: "",
    Referencia: "",
    FechaIngreso: "",
    FechaEfectiva: "",    
    FechaReversion: "",
    NumeroAsiento: "",
    Observaciones: "",
    Usuario: userData.userName,
    Id: userData.id,
  };

  useEffect(() => {
    if (rowUpdate) {
      console.log(rowUpdate);
      setForm(rowUpdate);
    } else {
      setForm(initialForm);
    }
  }, [rowUpdate]);

  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );
  //Se creo la opcion de Agregar y Actualizar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rowUpdate) {
      postAction("AhoTransaccion/PostAhoTransaccion", form, userLoggedToken).then(
        (res) => {
          console.log(res);
          if (res.isSuccess) {
            setForm(initialForm);
            return alert("El registro fue creado con exito");
          } else {
            return alert("El registro no fue creado");
          }
        }
      );
    } else {
      putAction("AhoTransaccion/PutAhoTransaccion", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            return alert("El registro fue actualizado con exito");
          } else {
            return alert("El registro no fue actualizado");
          }
        }
      );
    }
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box container sx={{ maxWidth: "100%", "& button": { m: 1 } }}>
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
                  Transacciones
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="CodigoEmpresa"
                  name="CodigoEmpresa"
                  label="Empresa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={userData.nombreEmpresa}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroTransaccion"
                  name="NumeroTransaccion"
                  label="Número de Transacción"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroTransaccion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroTransaccion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroTransaccion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroInversion"
                  name="NumeroInversion"
                  label="Número de Inversión"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroInversion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroInversion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroInversion}
                  </FormHelperText>
                )}
              </Grid>



              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Transacción"}
                    controller={"ParCodigotransaccion/GetParCodigoTransacciones"}
                    name={"CodigoTransaccion"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoTransaccion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoTransaccion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
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
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="MontoEfectivo"
                  name="MontoEfectivo"
                  label="Monto Efectivo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MontoEfectivo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.MontoEfectivo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MontoEfectivo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="MontoCheque"
                  name="MontoCheque"
                  label="Monto Cheque"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MontoCheque}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.MontoCheque && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MontoCheque}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroBanco"
                  name="NumeroBanco"
                  label="Número de Banco"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroBanco}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroBanco && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroBanco}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroCheque"
                  name="NumeroCheque"
                  label="Número de Cheque"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCheque}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroCheque && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCheque}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="MontoTarjeta"
                  name="MontoTarjeta"
                  label="Monto de la Tarjeta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MontoTarjeta}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.MontoTarjeta && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MontoTarjeta}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroTarjeta"
                  name="NumeroTarjeta"
                  label="Número de Tarjeta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroTarjeta}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroTarjeta && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroTarjeta}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TipoCambio"
                  name="TipoCambio"
                  label="Tipo de Cambio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TipoCambio}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TipoCambio && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TipoCambio}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Tipo de Identificación"}
                    controller={"ParEmisorTarjeta/GetParEmisorTarjetas"}
                    name={"CodigoEmisor"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoEmisor && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEmisor}
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="MontoOtros"
                  name="MontoOtros"
                  label="Monto Otros"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MontoOtros}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.MontoOtros && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MontoOtros}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Referencia"
                  name="Referencia"
                  label="Referencia"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Referencia}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Referencia && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Referencia}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaIngreso"
                    label="Fecha de Ingreso"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaIngreso = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaIngreso}
                    renderInput={(params) => (
                      <TextField
                        fullWidth="true"
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaIngreso"
                        name="FechaIngreso"
                        onBlur={handleBlur}
                        value={form.FechaIngreso}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaIngreso && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaIngreso}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaEfectiva"
                    label="Fecha Efectiva"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaEfectiva = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaEfectiva}
                    renderInput={(params) => (
                      <TextField
                        fullWidth="true"
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaEfectiva"
                        name="FechaEfectiva"
                        onBlur={handleBlur}
                        value={form.FechaEfectiva}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaEfectiva && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaEfectiva}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaReversion"
                    label="Fecha de Reversión"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaReversion = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaReversion}
                    renderInput={(params) => (
                      <TextField
                        fullWidth="true"
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaReversion"
                        name="FechaReversion"
                        onBlur={handleBlur}
                        value={form.FechaReversion}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaReversion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaReversion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroAsiento"
                  name="NumeroAsiento"
                  label="Número de Asiento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroAsiento}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroAsiento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroAsiento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
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
                {errors.Observaciones && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Observaciones}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Usuario"
                  name="Usuario"
                  label="Usuario"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={userData.userName}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                >
                  {userData.userName}
                </TextField>
              </Grid>
              {/* Se agregaron las funciones actualizar agregar y regresar */}
              <Grid item xs={12} container justifyContent="end">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./AhoTransaccionView`);
                  }}
                >
                  Regresar
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={errors.error ? true : false}
                >
                  {rowUpdate ? "Actualizar" : "Agregar"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
