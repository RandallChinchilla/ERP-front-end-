import { Divider, makeStyles } from "@material-ui/core";
import {
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { postAction } from "../../../Helpers/postHelper";
import { useForm } from "../../../Hooks/useForm";
import { SelectCross } from "../../Listas/SelectCross";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useHistory, useLocation } from "react-router-dom";
import { putAction } from "../../../Helpers/putHelper";

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
  if (!form.Descripcion) {
    errors.Descripcion = "Debe escribir una descripcion";
    errors.error = true;
  }
  if (!form.Isin) {
    errors.Isin = "Debe ingresar el Isin";
    errors.error = true;
  }
  if (!form.Serie) {
    errors.Serie = "Debe ingresar la serie";
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
  if (!form.FechaUltimoPagoInteres) {
    errors.FechaUltimoPagoInteres =
      "Debe seleccionar la fecha del último pago de interés";
    errors.error = true;
  }
  if (!form.FechaProximoPagoInteres) {
    errors.FechaProximoPagoInteres =
      "Debe seleccionar la fecha del próximo pago de interés";
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
  if (!form.Divisor) {
    errors.Divisor = "Debe ingresar el divisor tasa";
    errors.error = true;
  }
  if (!form.Multiplicador) {
    errors.Multiplicador = "Debe ingresar el multiplicador tasa";
    errors.error = true;
  }
  if (!form.CodigoMoneda) {
    errors.CodigoMoneda = "Debe seleccionar la moneda";
    errors.error = true;
  }
  if (!form.CodigoPeriodicidadPagoInteres) {
    errors.CodigoPeriodicidadPagoInteres =
      "Debe seleccionar la periodicidad del pago de interés";
    errors.error = true;
  }
  if (!form.CodigoPeriodicidadRevisionTasa) {
    errors.CodigoPeriodicidadRevisionTasa =
      "Debe seleccionar la periodicidad de la revisión de tasa";
    errors.error = true;
  }
  return errors;
};

export const PasInstrumentoOld = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();

  const { rowUpdate } = useLocation();
  let usehistory = useHistory();

  const initialForm = {
    Consecutivo: 0,
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoInstrumento: 0,
    Descripcion: "",
    Isin: "",
    Serie: "",
    FechaEmision: "",
    FechaVencimiento: "",
    FechaUltimoPagoInteres: "",
    FechaProximoPagoInteres: "",
    TasaBruta: "",
    TasaNeta: "",
    Divisor: "",
    Multiplicador: "",
    IndicadorTasaVariable: false,
    IndicadorCapitalizable: false,
    IndicadorGenerico: false,
    CodigoMoneda: 0,
    CodigoPeriodicidadPagoInteres: 0,
    CodigoPeriodicidadRevisionTasa: 0,
    Usuario: userData.userName,
  };

  useEffect(() => {
    if (rowUpdate) {
      setForm(rowUpdate);
    } else {
      setForm(initialForm);
    }
  }, [rowUpdate]);

  const { form, errors, handleChange, handleBlur, setForm, handleChecked } =
    useForm(initialForm, validationsForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.CodigoInstrumento === 0) {
      postAction(
        "PasInstrumento/PostPasInstrumento",
        form,
        userLoggedToken
      ).then((res) => {
        console.log(res);
        if (res.IsSuccess) {
          setForm(initialForm);
          return alert("El instrumento fue creado con exito");
        } else {
          return alert("El instrumento no fue creado");
        }
      });
    } else {
      putAction("PasInstrumento/PutPasInstrumento", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            return alert("El instrumento fue actualizado con exito");
          } else {
            return alert("El registro no fue actualizado");
          }
        }
      );
    }
  };

  //Se agrego la opcion de Actualizar

  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box
            sx={{ maxWidth: "100%", "& button": { m: 1 } }}
            // container sx={{ maxWidth: "100%" }}
          >
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
                  Instrumentos
                </Typography>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
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
                {errors.CodigoEmpresa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEmpresa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoInstrumento"
                  name="CodigoInstrumento"
                  label="Código Instrumento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoInstrumento}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                ></TextField>
                {/* {errors.CodigoInstrumento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoInstrumento}
                  </FormHelperText>
                )} */}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
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
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Isin"
                  name="Isin"
                  label="Isin"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Isin}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Isin && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Isin}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Serie"
                  name="Serie"
                  label="Serie"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Serie}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Serie && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Serie}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaEmision"
                    label="Fecha Emisión"
                    inputFormat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaEmision = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaEmision}
                    renderInput={(params) => (
                      <TextField
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
                    label="Fecha Vencimiento"
                    inputFormat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaVencimiento = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaVencimiento}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaUltimoPagoInteres"
                    label="Fecha Último Pago Interés"
                    inputFormat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaUltimoPagoInteres = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaUltimoPagoInteres}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
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
                    label="Fecha Próximo Pago Interés"
                    inputFormat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaProximoPagoInteres = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaProximoPagoInteres}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
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
                  label="TasaBruta"
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
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Divisor"
                  name="Divisor"
                  label="Divisor Tasa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Divisor}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Divisor && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Divisor}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Multiplicador"
                  name="Multiplicador"
                  label="Multiplicador Tasa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Multiplicador}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Multiplicador && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Multiplicador}
                  </FormHelperText>
                )}
              </Grid>
              {/* Se eliminaron las validaciones de 
              indicador tasa variable,indicador capitalizable e indicador generico 
              ya que estas opciones pueder ir marcadas o no dependiendo del caso*/}
              <Grid item xs={4} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorTasaVariable"
                          checked={form.IndicadorTasaVariable || false}
                          onChange={handleChecked}
                          onBlur={handleBlur}
                        />
                      }
                      label="Indicador Tasa Variable"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="small"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorCapitalizable"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorCapitalizable || false}
                        />
                      }
                      label="Indicador Capitalizable"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="medium"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorGenerico"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorGenerico || false}
                        />
                      }
                      label="Indicador Génerico"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="medium"
                    />
                  </FormGroup>
                </FormControl>
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
                {errors.Observaciones && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Observaciones}
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
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Periodicidad Pago Interés"
                    controller={"ParPeriodicidad/GetParPeriodicidades"}
                    name="CodigoPeriodicidad"
                    nameId="CodigoPeriodicidadPagoInteres"
                    field="Descripcion"
                  />
                </FormControl>
                {errors.CodigoPeriodicidadPagoInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPeriodicidadPagoInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Periodicidad Revisión Tasa"
                    controller={"ParPeriodicidad/GetParPeriodicidades"}
                    name="CodigoPeriodicidad"
                    nameId="CodigoPeriodicidadRevisionTasa"
                    field="Descripcion"
                  />
                </FormControl>
                {errors.CodigoPeriodicidadRevisionTasa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPeriodicidadRevisionTasa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
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
                ></TextField>
              </Grid>
              {/* Se agregaron los botones 
              Regresar, Agregar y Actualizar 
              con el formato actual */}
              <Grid item xs={12} container justifyContent="end">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./PasInstrumentoView`);
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
