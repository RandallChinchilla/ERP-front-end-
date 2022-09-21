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
  if (!form.NumeroEmpleado) {
    errors.NumeroEmpleado = "Debe ingresar el número empleado";
    errors.error = true;
  }
  if (!form.NumeroId) {
    errors.NumeroId = "Debe ingresar el número Id";
    errors.error = true;
  }
  if (!form.Apellido1) {
    errors.Apellido1 = "Debe ingresar el primer apellido";
    errors.error = true;
  }
  if (!form.Apellido2) {
    errors.Apellido2 = "Debe ingresar el segundo apellido";
    errors.error = true;
  }
  if (!form.Nombre) {
    errors.Nombre = "Debe ingresar el nombre";
    errors.error = true;
  }
  if (!form.FechaNacimiento) {
    errors.FechaNacimiento = "Debe seleccionar la fecha del nacimiento";
    errors.error = true;
  }
  if (!form.CodigoSexo) {
    errors.CodigoSexo = "Debe ingresar el sexo";
    errors.error = true;
  }
  if (!form.IdSeguroSocial) {
    errors.IdSeguroSocial = "Debe ingresar el # de seguro social";
    errors.error = true;
  }
  if (!form.FechaIngreso) {
    errors.FechaIngreso = "Debe seleccionar la fecha de ingreso";
    errors.error = true;
  }
  if (!form.FechaSalida) {
    errors.FechaSalida = "Debe seleccionar la fecha de salida";
    errors.error = true;
  }
  if (!form.NombreConyugue) {
    errors.NombreConyugue = "Debe ingresar el nombre del conyugue";
    errors.error = true;
  }
  if (!form.Direccion) {
    errors.Direccion = "Debe ingresar la dirección";
    errors.error = true;
  }
  if (!form.SalarioMensual) {
    errors.SalarioMensual = "Debe ingresar el salario mensual";
    errors.error = true;
  }
  if (!form.DireccionCorreoOficina) {
    errors.DireccionCorreoOficina = "Debe ingresar la dirección del correo de oficina";
    errors.error = true;
  }
  if (!form.DireccionCorreoPersonal) {
    errors.DireccionCorreoPersonal = "Debe ingresar la dirección del correo personal";
    errors.error = true;
  }
  if (!form.TelefonoOficina) {
    errors.TelefonoOficina = "Debe ingresar el teléfono de oficina";
    errors.error = true;
  }
  if (!form.ExtensionInterna) {
    errors.ExtensionInterna = "Debe ingresar la extensión interna";
    errors.error = true;
  }
  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debe ingresar el teléfono celular";
    errors.error = true;
  }
  if (!form.TelefonoHabitacion) {
    errors.TelefonoHabitacion = "Debe ingresar el teléfono de habitación";
    errors.error = true;
  }
  if (!form.VacacionesPendientes) {
    errors.VacacionesPendientes = "Debe ingresar las vacaciones pendientes";
    errors.error = true;
  }
  if (!form.Observaciones) {
    errors.Observaciones = "Debe ingresar el las observaciones";
    errors.error = true;
  }
  if (!form.CodigoEstadoCivil) {
    errors.CodigoEstadoCivil = "Debe seleccionar el estado civil";
    errors.error = true;
  }
  if (!form.CodigoPuesto) {
    errors.CodigoPuesto = "Debe seleccionar el puesto";
    errors.error = true;
  }
  if (!form.CodigoDepartamento) {
    errors.CodigoDepartamento = "Debe seleccionar el departamento";
    errors.error = true;
  }
  if (!form.CodigoTipoIdentificacion) {
    errors.CodigoTipoIdentificacion = "Debe seleccionar el tipo de identificación";
    errors.error = true;
  }
  if (!form.CodigoPaisTipoId) {
    errors.CodigoPaisTipoId = "Debe seleccionar el código país tipo Id";
    errors.error = true;
  }
  if (!form.CodigoMotivoSalida) {
    errors.CodigoMotivoSalida = "Debe seleccionar el motivo de salida";
    errors.error = true;
  }
  if (!form.CodigoPais) {
    errors.CodigoPais = "Debe seleccionar el país";
    errors.error = true;
  }
  if (!form.CodigoProvincia) {
    errors.CodigoProvincia = "Debe seleccionar la provincia";
    errors.error = true;
  }
  if (!form.CodigoCanton) {
    errors.CodigoCanton = "Debe seleccionar el cantón";
    errors.error = true;
  }
  if (!form.CodigoDistrito) {
    errors.CodigoEstado = "Debe seleccionar el distrito";
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

export const RRHMaestro = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    NumeroEmpleado: "",
    CodigoPaisTipoId: 0,
    CodigoTipoIdentificacion: 0,
    NumeroId: "",
    Apellido1: "",
    Apellido2: "",
    Nombre: "",
    FechaNacimiento: "",
    CodigoSexo: "",
    CodigoEstadoCivil: 0,
    NombreConyugue: "",
    IdSeguroSocial: "",
    FechaIngreso: "",
    FechaSalida: "",    
    CodigoMotivoSalida: 0,
    CodigoPais: 0,
    CodigoProvincia: 0,
    CodigoCanton: 0,
    CodigoDistrito: 0,
    Direccion: "",
    CodigoPuesto: 0,
    CodigoDepartamento: 0,
    SalarioMensual: "",
    DireccionCorreoOficina: "",
    DireccionCorreoPersonal: "",
    TelefonoOficina: "",
    ExtensionInterna: "",
    TelefonoCelular: "",
    TelefonoHabitacion: "",
    VacacionesPendientes: "",
    Observaciones: "",
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
      postAction("RrhMaestro/PostRrhMaestro", form, userLoggedToken).then(
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
      putAction("RrhMaestro/PutRrhMaestro", form, userLoggedToken).then(
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
                <TextField
                  id="NumeroEmpleado"
                  name="NumeroEmpleado"
                  label="Número Empleado"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroEmpleado}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroEmpleado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroEmpleado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"País Id"}
                    controller={"ParPais/GetParPaises"}
                    name={"CodigoPais"}
                    field={"Nombre"}
                    nameId="CodigoPaisTipoId"
                  />
                </FormControl>
                {errors.CodigoPaisTipoId && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPaisTipoId}
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
                    controller={"ParTipoidentificacion/GetParTiposIdentificacion"}
                    name={"CodigoTipoIdentificacion"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoTipoIdentificacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoTipoIdentificacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroId"
                  name="NumeroId"
                  label="Número Id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroId}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroId && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroId}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Apellido1"
                  name="Apellido1"
                  label="Primer Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Apellido1}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Apellido1 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Apellido1}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Apellido2"
                  name="Apellido2"
                  label="Segundo Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Apellido2}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Apellido2 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Apellido2}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaNacimiento"
                    label="Fecha de Nacimiento"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaNacimiento = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaNacimiento}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="FechaNacimiento"
                        name="FechaNacimiento"
                        onBlur={handleBlur}
                        value={form.FechaNacimiento}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaNacimiento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaNacimiento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoSexo"
                  name="CodigoSexo"
                  label="Sexo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoSexo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoSexo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoSexo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Estado Civil"}
                    controller={"ParEstadoCivil/GetParEstadosCiviles"}
                    name={"CodigoEstadoCivil"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoEstadoCivil && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEstadoCivil}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NombreConyugue"
                  name="NombreConyugue"
                  label="Nombre Conyugue"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NombreConyugue}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NombreConyugue && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NombreConyugue}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IdSeguroSocial"
                  name="IdSeguroSocial"
                  label="#Seguro Social"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IdSeguroSocial}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.IdSeguroSocial && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IdSeguroSocial}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaSalida"
                    label="Fecha de Salida"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaSalida = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaSalida}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
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
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Motivo Salida"}
                    controller={"RrhMotivoSalida/GetRrhMotivosSalida"}
                    name={"CodigoMotivoSalida"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoMotivoSalida && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoMotivoSalida}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Pais"}
                    controller="ParPais/GetParPaises"
                    name="CodigoPais"
                    field="Nombre"
                    nameId="CodigoPais"
                  />
                </FormControl>
                {errors.CodigoPais && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPais}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Provincia"
                    controller={
                      form.CodigoPaisAportante === 0
                        ? "ParProvincium/GetParProvincias"
                        : `ParProvincium/GetParProvinciaFilter?CodigoPais=${form.CodigoPais}`
                    }
                    name="CodigoProvincia"
                    field="Descripcion"
                    nameId="CodigoProvincia"
                    disabled={form.CodigoPais === 0 ? true : false}
                  />
                </FormControl>
                {errors.CodigoProvincia && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoProvincia}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Canton"
                    controller={
                      form.CodigoProvincia === 0
                        ? "ParCanton/GetParCantones"
                        : `ParCanton/GetParCantonesFilter?CodigoPais=${form.CodigoPais}&CodigoProvincia=${form.CodigoProvincia}`
                    }
                    name="CodigoCanton"
                    field="Descripcion"
                    nameId="CodigoCanton"
                    disabled={
                      form.CodigoProvincia === 0 ? true : false
                    }
                  />
                </FormControl>
                {errors.CodigoCanton && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoCanton}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Distrito"
                    controller={
                      form.CodigoCanton === 0
                        ? "ParDistrito/GetParDistritos"
                        : `ParDistrito/GetParDistritosFilter?CodigoPais=${form.CodigoPais}&CodigoProvincia=${form.CodigoProvincia}&CodigoCanton=${form.CodigoCanton}`
                    }
                    name="CodigoDistrito"
                    field="Descripcion"
                    nameId="CodigoDistrito"
                    disabled={form.CodigoCanton === 0 ? true : false}
                  />
                </FormControl>
                {errors.CodigoDistrito && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoDistrito}
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
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Puesto"
                    controller="RrhPuesto/GetRrhPuestos"
                    name="CodigoPuesto"
                    field="Descripcion"
                  />
                </FormControl>
                {errors.CodigoPuesto && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPuesto}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
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
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="SalarioMensual"
                  name="SalarioMensual"
                  label="Salario Mensual"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.SalarioMensual}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.SalarioMensual && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.SalarioMensual}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="DireccionCorreoOficina"
                  name="DireccionCorreoOficina"
                  label="Correo Oficina"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.DireccionCorreoOficina}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.DireccionCorreoOficina && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.DireccionCorreoOficina}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="DireccionCorreoPersonal"
                  name="DireccionCorreoPersonal"
                  label="Correo Personal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.DireccionCorreoPersonal}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.DireccionCorreoPersonal && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.DireccionCorreoPersonal}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoOficina"
                  name="TelefonoOficina"
                  label="Teléfono Oficina"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TelefonoOficina}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TelefonoOficina && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TelefonoOficina}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="ExtensionInterna"
                  name="ExtensionInterna"
                  label="Extensión Interna"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.ExtensionInterna}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.ExtensionInterna && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.ExtensionInterna}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoCelular"
                  name="TelefonoCelular"
                  label="Teléfono Celular"
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
                  id="TelefonoHabitacion"
                  name="TelefonoHabitacion"
                  label="Teléfono Habitación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TelefonoHabitacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TelefonoHabitacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TelefonoHabitacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="VacacionesPendientes"
                  name="VacacionesPendientes"
                  label="Vacaciones Pendientes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.VacacionesPendientes}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.VacacionesPendientes && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.VacacionesPendientes}
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
                    usehistory.push(`./RRHMaestroView`);
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
