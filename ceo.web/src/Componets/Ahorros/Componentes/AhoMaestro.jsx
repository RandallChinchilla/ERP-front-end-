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
  if (!form.CodigoPortafolio) {
    errors.CodigoPortafolio = "Debe seleccionar el portafolio";
    errors.error = true;
  }
  if (!form.NumeroInversion) {
    errors.NumeroInversion = "Debe ingresar el número de inversión";
    errors.error = true;
  }
  if (!form.CodigoAportante) {
    errors.CodigoAportante = "Debe seleccionar el aportante";
    errors.error = true;
  }
  if (!form.CodigoTipo) {
    errors.CodigoTipo = "Debe seleccionar el tipo";
    errors.error = true;
  }
  if (!form.CodigoMoneda) {
    errors.CodigoMoneda = "Debe seleccionar la moneda";
    errors.error = true;
  }
  if (!form.FechaEmision) {
    errors.FechaEmision = "Debe seleccionar la fecha de emisión";
    errors.error = true;
  }
  if (!form.FechaVencimiento) {
    errors.FechaVencimiento = "Debe seleccionar la fecha de vencimiento";
    errors.error = true;
  }
  if (!form.CodigoPeriodicidad) {
    errors.CodigoPeriodicidad = "Debe seleccionar la perdiodicidad";
    errors.error = true;
  }
  if (!form.FechaUltimoPagoInteres) {
    errors.FechaUltimoPagoInteres = "Debe seleccionar la fecha del último pago de interes";
    errors.error = true;
  }
  if (!form.FechaProximoPagoInteres) {
    errors.FechaProximoPagoInteres = "Debe seleccionar la fecha de próximo pago de interes";
    errors.error = true;
  }
  if (!form.TasaBruta) {
    errors.TasaBruta = "Debe ingresar la tasa bruta";
    errors.error = true;
  }
  if (!form.TasaNeta) {
    errors.TasaNeta = "Debe ingresar la tasa neta";
    errors.error = true;
  }
  if (!form.FechaUltimoInteresAcumulado) {
    errors.FechaUltimoInteresAcumulado = "Debe seleccionar la fecha del último interés acumulado";
    errors.error = true;
  }
  if (!form.SaldoNominal) {
    errors.SaldoNominal = "Debe ingresar el saldo nominal";
    errors.error = true;
  }
  if (!form.InteresPorPagar) {
    errors.InteresPorPagar = "Debe ingresar el interés por pagar";
    errors.error = true;
  }
  if (!form.CodigoEstado) {
    errors.CodigoEstado = "Debe seleccionar el estado";
    errors.error = true;
  }
  if (!form.Usuario) {
    errors.Usuario = "Debe ingresar el usuario";
    errors.error = true;
  }
  return errors;
};

export const AhoMaestro = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoPortafolio: 0,
    NumeroInversion: "",
    CodigoAportante: 0,
    CodigoTipo: 0,
    CodigoMoneda: 0,
    FechaEmision: "",
    FechaVencimiento: "",
    CodigoPeriodicidad: "",
    FechaUltimoPagoInteres: "",
    FechaProximoPagoInteres: "",
    TasaBruta: "",
    TasaNeta: "",
    FechaUltimoInteresAcumulado: "",
    SaldoNominal: "",
    InteresPorPagar: "",    
    CodigoEstado: 0,
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
      postAction("AhoMaestro/PostAhoMaestro", form, userLoggedToken).then(
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
      putAction("AhoMaestro/PutAhoMaestro", form, userLoggedToken).then(
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
                  Maestro
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
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Portafolio"}
                    controller={"PasPortafolio/GetPasPortafolios"}
                    name={"CodigoPortafolio"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoPortafolio && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPortafolio}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroInversion"
                  name="NumeroInversion"
                  label="Número Inversión"
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
                    title={"Aportante"}
                    controller={"PasAportante/GetPasAportantes"}
                    name={"CodigoAportante"}
                    field={"Nombre"}
                  />
                </FormControl>
                {errors.CodigoAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoAportante}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Tipo Ahorro"}
                    controller={"AhoTipo/GetAhoTipos"}
                    name={"CodigoTipo"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoTipo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoTipo}
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaEmision"
                    label="Fecha de Emisión"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaEmision = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaEmision}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaEmision"
                        name="FechaEmision"
                        onBlur={handleBlur}
                        value={form.FechaEmision}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaEmision && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaEmision}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaVencimiento"
                    label="Fecha de Vencimiento"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaVencimiento = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaVencimiento}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaVencimiento"
                        name="FechaVencimiento"
                        onBlur={handleBlur}
                        value={form.FechaVencimiento}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaVencimiento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaVencimiento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Periodicidad"}
                    controller={"ParPeriodicidad/GetParPeriodicidades"}
                    name={"CodigoPeriodicidad"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoPeriodicidad && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPeriodicidad}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaUltimoPagoInteres"
                    label="Último Pago de Intereses"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaUltimoPagoInteres = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaUltimoPagoInteres}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaUltimoPagoInteres"
                        name="FechaUltimoPagoInteres"
                        onBlur={handleBlur}
                        value={form.FechaUltimoPagoInteres}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaUltimoPagoInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaUltimoPagoInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaProximoPagoInteres"
                    label="Próximo Pago de Intereses"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaProximoPagoInteres = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaProximoPagoInteres}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaProximoPagoInteres"
                        name="FechaProximoPagoInteres"
                        onBlur={handleBlur}
                        value={form.FechaProximoPagoInteres}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaProximoPagoInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaProximoPagoInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TasaBruta"
                  name="TasaBruta"
                  label="Tasa Bruta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TasaBruta}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TasaBruta && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TasaBruta}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TasaNeta"
                  name="TasaNeta"
                  label="Tasa Neta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TasaNeta}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TasaNeta && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TasaNeta}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaUltimoInteresAcumulado"
                    label="Fecha del Interés Acumulado"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaUltimoInteresAcumulado = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaUltimoInteresAcumulado}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaUltimoInteresAcumulado"
                        name="FechaUltimoInteresAcumulado"
                        onBlur={handleBlur}
                        value={form.FechaUltimoInteresAcumulado}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaUltimoInteresAcumulado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaUltimoInteresAcumulado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="SaldoNominal"
                  name="SaldoNominal"
                  label="Saldo Nominal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.SaldoNominal}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.SaldoNominal && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.SaldoNominal}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="InteresPorPagar"
                  name="InteresPorPagar"
                  label="Intereses Por Pagar"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.InteresPorPagar}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.InteresPorPagar && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.InteresPorPagar}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Código Estado"}
                    controller={"ParEstado/GetParEstados"}
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
                    usehistory.push(`./AhoMaestroView`);
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
