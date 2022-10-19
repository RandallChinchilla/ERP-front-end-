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

export const RRHMaestroLog = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    NumeroEmpleado: "",
    Fecha: "",
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
  );
  //Se creo la opcion de Agregar y Actualizar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rowUpdate) {
      postAction("RrhMaestroLog/PostRrhMaestroLog", form, userLoggedToken).then(
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
      putAction("RrhMaestroLog/PutRrhMaestroLog", form, userLoggedToken).then(
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
                  Maestro Log
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
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="Fecha"
                    label="Fecha"
                    inputformat="dd/MM/yyyy"
                    disabled
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.Fecha = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.Fecha}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
                        size="small"
                        id="Fecha"
                        name="Fecha"
                        disabled
                        onBlur={handleBlur}
                        value={form.Fecha}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
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
                    disabled
                  />
                </FormControl>
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
                    disabled
                  />
                </FormControl>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    disabled
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
                  disabled
                ></TextField>
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
                    disabled
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    disabled
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
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    disabled
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
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"País"}
                    controller={"ParPais/GetParPaises"}
                    name={"CodigoPais"}
                    field={"Nombre"}
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Provincia"}
                    controller={"ParProvincium/GetParProvincias"}
                    name={"CodigoProvincia"}
                    field={"Descripcion"}
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Cantón"}
                    controller={"ParCanton/GetParCantones"}
                    name={"CodigoCanton"}
                    field={"Descripcion"}
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Distrito"}
                    controller={"ParDistrito/GetParDistritos"}
                    name={"CodigoDistrito"}
                    field={"Descripcion"}
                    disabled
                  />
                </FormControl>
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
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Puesto"}
                    controller={"RrhPuesto/GetRrhPuestos"}
                    name={"CodigoPuesto"}
                    field={"Descripcion"}
                    disabled
                  />
                </FormControl>
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
                    disabled
                  />
                </FormControl>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                  disabled
                ></TextField>
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
                    disabled
                  />
                </FormControl>
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
                >
                  {userData.userName}
                </TextField>
              </Grid>
              {/* Este componente es visual por lo tanto no tiene opcion de actualizar o agregar*/}
              <Grid item xs={12} container justifyContent="end">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./RRHMaestroLogView`);
                  }}
                >
                  Regresar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
