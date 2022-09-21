import { makeStyles } from "@material-ui/core";
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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { putAction } from "../../../Helpers/putHelper";
import { useHistory, useLocation } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

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
  if (!form.CodigoTipo) {
    errors.CodigoTipo = "Debe seleccionar el tipo";
    errors.error = true;
  }
  if (!form.Descripcion) {
    errors.Descripcion = "Debe ingresaruna descripción";
    errors.error = true;
  }
  if (!form.CodigoMoneda) {
    errors.CodigoMoneda = "Debe seleccionar la moneda";
    errors.error = true;
  }
  if (!form.MontoMinimo) {
    errors.MontoMinimo = "Debe ingresar el monto mínimo";
    errors.error = true;
  }
  if (!form.MontoMaximo) {
    errors.MontoMaximo = "Debe ingresar el monto máximo";
    errors.error = true;
  }
  if (!form.IndicadorTasaVariable) {
    errors.IndicadorTasaVariable = "Debe seleccionar la fecha del nacimiento";
    errors.error = true;
  }
  if (!form.IndicadorPermiteRetiro) {
    errors.IndicadorPermiteRetiro = "Debe ingresar el sexo";
    errors.error = true;
  }
  if (!form.IndicadorCapitazable) {
    errors.IndicadorCapitazable = "Debe ingresar el # de seguro social";
    errors.error = true;
  }
  if (!form.DivisorInteres) {
    errors.DivisorInteres = "Debe ingresar el divisor de interese";
    errors.error = true;
  }
  if (!form.MultiplicadorInteres) {
    errors.MultiplicadorInteres = "Debe ingresar el multiplicador de interese";
    errors.error = true;
  }
  if (!form.IndicadorPenalizaRetiroAnticipado) {
    errors.IndicadorPenalizaRetiroAnticipado = "Debe ingresar el nombre del conyugue";
    errors.error = true;
  }
  if (!form.IndicadorPermiteBloqueado) {
    errors.IndicadorPermiteBloqueado = "Debe ingresar la dirección";
    errors.error = true;
  }
  if (!form.IndicadorLiquidasSoloInteres) {
    errors.IndicadorLiquidasSoloInteres = "Debe ingresar el salario mensual";
    errors.error = true;
  }
  if (!form.IndicadorGeneraContrato) {
    errors.IndicadorGeneraContrato = "Debe ingresar la dirección del correo de oficina";
    errors.error = true;
  }
  if (!form.IndicadorRevolutivo) {
    errors.DireccionCorreoPersonal = "Debe ingresar la dirección del correo personal";
    errors.error = true;
  }
  if (!form.PermanenciaAnnos) {
    errors.PermanenciaAnnos = "Debe ingresar la permanencia de años";
    errors.error = true;
  }
  if (!form.FechaCreacion) {
    errors.FechaCreacion = "Debe seleccionar la fecha de creación";
    errors.error = true;
  }
  if (!form.FechaLiquidacion) {
    errors.FechaLiquidacion = "Debe seleccionar la fecha de liquidación";
    errors.error = true;
  }
  if (!form.CodigoPeriodicidad) {
    errors.CodigoPeriodicidad = "Debe seleccionar la perdiodicidad";
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

export const AhoProducto = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoTipo: 0,
    Descripcion: "",
    CodigoMoneda: 0,
    MontoMinimo: "",
    MontoMaximo: "",
    IndicadorTasaVariable: false,
    IndicadorPermiteRetiro: false,
    IndicadorCapitazable: false,
    CodigoPeriodicidad: 0,
    DivisorInteres: "",
    MultiplicadorInteres: "",
    IndicadorPenalizaRetiroAnticipado: false,
    IndicadorPermiteBloqueado: false,
    IndicadorLiquidasSoloInteres: false,
    IndicadorGeneraContrato: false,
    IndicadorRevolutivo: false,
    PermanenciaAnnos: "",
    FechaCreacion: "",
    FechaLiquidacion: "",    
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

  const { form, errors, handleChange, handleBlur, setForm, handleChecked} = useForm(
    initialForm,
    validationsForm
  );
  //Se creo la opcion de Agregar y Actualizar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rowUpdate) {
      postAction("AhoProducto/PostAhoProducto", form, userLoggedToken).then(
        (res) => {
          console.log(res);
          if (res.isSuccess) {
            setForm(initialForm);
            return alert("El producto fue creado con exito");
          } else {
            return alert("El producto no fue creado");
          }
        }
      );
    } else {
      putAction("AhoProducto/PutAhoProducto", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            return alert("El producto fue actualizado con exito");
          } else {
            return alert("El producto no fue actualizado");
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
                  Producto
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
                    title={"Tipo de Ahorros"}
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
              <Grid item xs={4} container justifyContent="center">
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
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="MontoMinimo"
                  name="MontoMinimo"
                  label="Monto Mínimo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MontoMinimo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.MontoMinimo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MontoMinimo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="MontoMaximo"
                  name="MontoMaximo"
                  label="Monto Máximo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MontoMaximo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.MontoMaximo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MontoMaximo}
                  </FormHelperText>
                )}
              </Grid>
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
                          name="IndicadorPermiteRetiro"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorPermiteRetiro || false}
                        />
                      }
                      label="Indicador Permite Retiro"
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
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="DivisorInteres"
                  name="DivisorInteres"
                  label="Divisor de Intereses"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.DivisorInteres}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.DivisorInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.DivisorInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="MultiplicadorInteres"
                  name="MultiplicadorInteres"
                  label="Multiplicador de Interes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.MultiplicadorInteres}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.MultiplicadorInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.MultiplicadorInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorPenalizaRetiroAnticipado"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorPenalizaRetiroAnticipado || false}
                        />
                      }
                      label="Penaliza Retiros"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="medium"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorPermiteBloqueado"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorPermiteBloqueado || false}
                        />
                      }
                      label="Permite Bloqueo"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="medium"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorLiquidasSoloInteres"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorLiquidasSoloInteres || false}
                        />
                      }
                      label="Liquida solo Interés"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="medium"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorGeneraContrato"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorGeneraContrato || false}
                        />
                      }
                      label="Genera Contrato"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="medium"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorRevolutivo"
                          onChange={handleChecked}
                          onBlur={handleBlur}
                          checked={form.IndicadorRevolutivo || false}
                        />
                      }
                      label="Revolutivo"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="medium"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="PermanenciaAnnos"
                  name="PermanenciaAnnos"
                  label="Permanencia Años"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.PermanenciaAnnos}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.PermanenciaAnnos && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.PermanenciaAnnos}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaCreacion"
                    label="Fecha de Creación"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaCreacion = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaCreacion}
                    renderInput={(params) => (
                      <TextField
                        fullWidth="true"
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaCreacion"
                        name="FechaCreacion"
                        onBlur={handleBlur}
                        value={form.FechaCreacion}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaCreacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaCreacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaLiquidacion"
                    label="Fecha de Liquidación"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaLiquidacion = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaLiquidacion}
                    renderInput={(params) => (
                      <TextField
                        fullWidth="true"
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaLiquidacion"
                        name="FechaLiquidacion"
                        onBlur={handleBlur}
                        value={form.FechaLiquidacion}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaLiquidacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaLiquidacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
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
                    usehistory.push(`./AhoProductoView`);
                  }}
                >
                  Regresar
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  // disabled={errors.error ? true : false}
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
