import { makeStyles } from "@material-ui/core";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useForm } from "../../Hooks/useForm";
import { SelectCross } from "../Listas/SelectCross";
import { useHistory, useLocation } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { postAction } from "../../Helpers/postHelper";
import { putAction } from "../../Helpers/putHelper";

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

let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

const validationsForm = (form) => {
  let errors = {};
  if (form.CodigoOrigenAportante === 0) {
    errors.CodigoOrigenAportante = "Debes seleccionar un origen";
    errors.error = true;
  }
  if (!form.Nombre) {
    errors.Nombre = "Debes seleccionar un origen";
    errors.error = true;
  }
  if (form.CodigoPaisAportante === 0) {
    errors.CodigoPaisAportante = "Debes seleccionar un Pais";
    errors.error = true;
  }
  if (form.CodigoProviniaAportante === 0) {
    errors.CodigoProvinciaAportante = "Debes seleccionar una provincia";
    errors.error = true;
  }
  if (form.CodigoCantonAportante === 0) {
    errors.CodigoCantonAportante = "Debes seleccionar un canton";
    errors.error = true;
  }
  if (form.CodigoDistritoAportante === 0) {
    errors.CodigoDistritoAportante = "Debes seleccionar un distrito";
    errors.error = true;
  }
  if (!form.EMailAportante) {
    errors.EMailAportante = "Debes ingresar un correo valido";
    errors.error = true;
  } else if (!regexEmail.test(form.EMailAportante.trim())) {
    errors.EMailAportante =
      "El correo ingresado no es un correo example@gmail.com";
    errors.error = true;
  }

  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debes ingresar un teléfono celular";
    errors.error = true;
  }
  if (form.CodigoOrigenFondos === 0) {
    errors.CodigoOrigenFondos = "Debes seleccionar un origen de los fondos";
    errors.error = true;
  }
  if (!form.NombreEncargado) {
    errors.NombreEncargado = "Debes ingresar un nombre";
    errors.error = true;
  }
  if (!form.Apellido1Encargado) {
    errors.Apellido1Encargado = "Debes ingresar primer apellido";
    errors.error = true;
  }
  if (form.CodigoTipoIdentificacion === 0) {
    errors.CodigoTipoIdentificacion =
      "Debes seleccionar un tipo de identificación";
    errors.error = true;
  }
  if (!form.NumeroId) {
    errors.NumeroId = "Debes ingresar el númnero de id";
    errors.error = true;
  }
  if (!form.FechaVencimientoId) {
    errors.FechaVencimientoId = "Debes seleccionar una fecha";
    errors.error = true;
  }
  if (!form.FechaNacimiento) {
    errors.FechaNacimiento = "Debes seleccionar una fecha";
    errors.error = true;
  }
  if (form.CodigoPaisNacimientoEncargado === 0) {
    errors.CodigoPaisNacimientoEncargado = "Debes seleccionar un pais";
    errors.error = true;
  }
  if (form.CodigoPaisNacionalidadEncargado === 0) {
    errors.CodigoPaisNacionalidadEncargado = "Debes seleccionar un pais";
    errors.error = true;
  }
  if (form.CodigoPaisEncargado === 0) {
    errors.CodigoPaisEncargado = "Debes seleccionar un pais";
    errors.error = true;
  }
  if (form.CodigoProvinciaEncargado === 0) {
    errors.CodigoProvinciaEncargado = "Debes seleccionar uan provincia";
    errors.error = true;
  }
  if (form.CodigoCantonEncargado === 0) {
    errors.CodigoCantonEncargado = "Debes seleccionar un canton";
    errors.error = true;
  }

  if (form.CodigoDistritoEncargado === 0) {
    errors.CodigoDistritoEncargado = "Debes seleccionar un distrito";
    errors.error = true;
  }
  if (!form.DireccionDomicilio) {
    errors.DireccionDomicilio = "Debes ingresar una dirección de domicilio";
    errors.error = true;
  }
  if (!form.FechaNombramiento) {
    errors.FechaNombramiento = "Debes ingresar una fecha";
    errors.error = true;
  }
  if (!form.EMailEncargado) {
    errors.EMailEncargado = "Debes ingresar un correo";
    errors.error = true;
  } else if (!regexEmail.test(form.EMailEncargado.trim())) {
    errors.EMailEncargado =
      "El correo ingresado no es un correo example@gmail.com";
    errors.error = true;
  }
  if (!form.TelefonoCelularEncargado) {
    errors.TelefonoCelularEncargado = "debes ingresar un número de celular";
    errors.error = true;
  }
  if (!form.FechaOrdenacionConsagracion) {
    errors.FechaOrdenacionConsagracion = "debes ingresar una fecha";
    errors.error = true;
  }
  if (form.CodigoDiocesis === 0) {
    errors.CodigoDiocesis = "debes seleccionar un codigo";
    errors.error = true;
  }
  if (!form.FechaIngreso) {
    errors.FechaIngreso = "debes ingresar una fecha";
    errors.error = true;
  }
  if (form.CodigoEstado === 0) {
    errors.CodigoEstado = "debes seleccionar un codigo";
    errors.error = true;
  }

  return errors;
};

export const PasAportante = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    Id: userData.id,
    NombreUsuario: userData.userName,
    CodigoOrigenAportante: 0,
    CodigoAportante: 0,
    Nombre: "",
    CodigoPaisAportante: 0,
    CodigoProvinciaAportante: 0,
    CodigoCantonAportante: 0,
    CodigoDistritoAportante: 0,
    EMailAportante: "",
    TelefonoFijo: "",
    TelefonoCelular: "",
    CodigoOrigenFondos: 0,
    NombreEncargado: "",
    Apellido1Encargado: "",
    Apellido2Encargado: "",
    CodigoTipoIdentificacion: 0,
    NumeroId: "",
    FechaVencimientoId: "",
    FechaNacimiento: "",
    CodigoPaisNacimientoEncargado: 0,
    CodigoPaisNacionalidadEncargado: 0,
    CodigoPaisEncargado: 0,
    CodigoProvinciaEncargado: 0,
    CodigoCantonEncargado: 0,
    CodigoDistritoEncargado: 0,
    DireccionDomicilio: "",
    FechaNombramiento: "",
    EMailEncargado: "",
    TelefonoFijoEncargado: "",
    TelefonoCelularEncargado: "",
    FechaOrdenacionConsagracio: "",
    CodigoDiocesis: 0,
    Congregacion: "",
    FechaIngreso: "",
    CodigoEstado: 0,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.CodigoAportante === 0) {
      postAction("PasAportante/PostPasAportante", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            setForm(initialForm);
            return alert("El Aportante fue creado con exito");
          } else {
            return alert("El aportante no fue creado");
          }
        }
      );
    } else {
      putAction("PasAportante/PutPasAportante", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            return alert("El aportente fue actualizado con exito");
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
                  Aportante
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
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Tipo Aportante"
                    controller={"PasOrigenAportante/GetPasOrigenAportantes"}
                    name="CodigoOrigenAportante"
                    field="Descripcion"
                  />
                </FormControl>
                {errors.CodigoOrigenAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoOrigenAportante}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Nombre"
                  name="Nombre"
                  label="Nombre Aportante"
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
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Pais"}
                    controller="ParPais/GetParPaises"
                    name="CodigoPais"
                    field="Nombre"
                    nameId="CodigoPaisAportante"
                  />
                </FormControl>
                {errors.CodigoPaisAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPaisAportante}
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
                        : `ParProvincium/GetParProvinciaFilter?CodigoPais=${form.CodigoPaisAportante}`
                    }
                    name="CodigoProvincia"
                    field="Descripcion"
                    nameId="CodigoProvinciaAportante"
                    disabled={form.CodigoPaisAportante === 0 ? true : false}
                  />
                </FormControl>
                {errors.CodigoProvinciaAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoProvinciaAportante}
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
                      form.CodigoProvinciaAportante === 0
                        ? "ParCanton/GetParCantones"
                        : `ParCanton/GetParCantonesFilter?CodigoPais=${form.CodigoPaisAportante}&CodigoProvincia=${form.CodigoProvinciaAportante}`
                    }
                    name="CodigoCanton"
                    field="Descripcion"
                    nameId="CodigoCantonAportante"
                    disabled={
                      form.CodigoProvinciaAportante === 0 ? true : false
                    }
                  />
                </FormControl>
                {errors.CodigoCantonAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoCantonAportante}
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
                    //controller={"ParDistrito/GetParDistritos"}
                    controller={
                      form.CodigoCantonAportante === 0
                        ? "ParDistrito/GetParDistritos"
                        : `ParDistrito/GetParDistritosFilter?CodigoPais=${form.CodigoPaisAportante}&CodigoProvincia=${form.CodigoProvinciaAportante}&CodigoCanton=${form.CodigoCantonAportante}`
                    }
                    name="CodigoDistrito"
                    field="Descripcion"
                    nameId="CodigoDistritoAportante"
                    disabled={form.CodigoCantonAportante === 0 ? true : false}
                  />
                </FormControl>
                {errors.CodigoDistritoAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoDistritoAportante}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="EMailAportante"
                  name="EMailAportante"
                  label="Correo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.EMailAportante}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.EMailAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.EMailAportante}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoFijo"
                  name="TelefonoFijo"
                  label="Telefono Fijo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TelefonoFijo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {/* {errors.TelefonoFijo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TelefonoFijo}
                  </FormHelperText>
                )} */}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoCelular"
                  name="TelefonoCelular"
                  label="Celular"
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
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Origen de fondos"
                    controller={"PasOrigenFondo/GetPasOrigenFondos"}
                    name="CodigoOrigenFondos"
                    field="Descripcion"
                  />
                </FormControl>
                {errors.CodigoOrigenFondos && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoOrigenFondos}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NombreEncargado"
                  name="NombreEncargado"
                  label="Nombre Encargado"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NombreEncargado}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NombreEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NombreEncargado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Apellido1Encargado"
                  name="Apellido1Encargado"
                  label="Primer Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Apellido1Encargado}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Apellido1Encargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Apellido1Encargado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Apellido2Encargado"
                  name="Apellido2Encargado"
                  label="Segundo Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Apellido2Encargado}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {/* {errors.Apellido2Encargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Apellido2Encargado}
                  </FormHelperText>
                )} */}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Tipo Identificación"
                    controller={
                      "ParTipoidentificacion/GetParTiposIdentificacion"
                    }
                    name="CodigoTipoIdentificacion"
                    field="Descripcion"
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaVencimientoId"
                    // name="FechaCompra"
                    inputFormat="dd/MM/yyyy"
                    label="Fecha vencimiento Id"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaVencimientoId = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaVencimientoId}
                    renderInput={(params) => (
                      <TextField
                        type="datetime-local"
                        size="small"
                        id="FechaVencimientoId"
                        name="FechaVencimientoId"
                        onBlur={handleBlur}
                        value={form.FechaVencimientoId}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaVencimientoId && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaVencimientoId}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaNacimiento"
                    // name="FechaCompra"
                    inputFormat="dd/MM/yyyy"
                    label="Fecha Nacimiento"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaNacimiento = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaNacimiento}
                    renderInput={(params) => (
                      <TextField
                        type="datetime-local"
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
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Pais Nacimeinto"}
                    controller={"ParPais/GetParPaises"}
                    name="CodigoPais"
                    field="Nombre"
                    nameId="CodigoPaisNacimientoEncargado"
                  />
                </FormControl>
                {errors.CodigoPaisNacimientoEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPaisNacimientoEncargado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Nacionalidad"}
                    controller={"ParPais/GetParPaises"}
                    name="CodigoPais"
                    field="Nombre"
                    nameId="CodigoPaisNacionalidadEncargado"
                  />
                </FormControl>
                {errors.CodigoPaisNacionalidadEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPaisNacionalidadEncargado}
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
                    controller={"ParPais/GetParPaises"}
                    name="CodigoPais"
                    field="Nombre"
                    nameId="CodigoPaisEncargado"
                  />
                </FormControl>
                {errors.CodigoPaisEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPaisEncargado}
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
                    //controller={"ParProvincium/GetParProvincias"}
                    controller={
                      form.CodigoPaisEncargado === 0
                        ? "ParProvincium/GetParProvincias"
                        : `ParProvincium/GetParProvinciaFilter?CodigoPais=${form.CodigoPaisEncargado}`
                    }
                    name="CodigoProvincia"
                    field="Descripcion"
                    nameId="CodigoProvinciaEncargado"
                    disabled={form.CodigoPaisEncargado === 0 ? true : false}
                  />
                </FormControl>
                {errors.CodigoProvinciaEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoProvinciaEncargado}
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
                      form.CodigoProvinciaEncargado === 0
                        ? "ParCanton/GetParCantones"
                        : `ParCanton/GetParCantonesFilter?CodigoPais=${form.CodigoPaisEncargado}&CodigoProvincia=${form.CodigoProvinciaEncargado}`
                    }
                    name="CodigoCanton"
                    field="Descripcion"
                    nameId="CodigoCantonEncargado"
                    disabled={
                      form.CodigoProvinciaEncargado === 0 ? true : false
                    }
                  />
                </FormControl>
                {errors.CodigoCantonEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoCantonEncargado}
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
                      form.CodigoCantonEncargado === 0
                        ? "ParDistrito/GetParDistritos"
                        : `ParDistrito/GetParDistritosFilter?CodigoPais=${form.CodigoPaisEncargado}&CodigoProvincia=${form.CodigoProvinciaEncargado}&CodigoCanton=${form.CodigoCantonEncargado}`
                    }
                    name="CodigoDistrito"
                    field="Descripcion"
                    nameId="CodigoDistritoEncargado"
                    disabled={form.CodigoCantonEncargado === 0 ? true : false}
                  />
                </FormControl>
                {errors.CodigoDistritoEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoDistritoEncargado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="DireccionDomicilio"
                  name="DireccionDomicilio"
                  label="Dirección Domicilio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.DireccionDomicilio}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.DireccionDomicilio && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.DireccionDomicilio}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaNombramiento"
                    inputFormat="dd/MM/yyyy"
                    label="Fecha Nombramiento"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaNombramiento = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaNombramiento}
                    renderInput={(params) => (
                      <TextField
                        type="datetime-local"
                        size="small"
                        id="FechaNombramiento"
                        name="FechaNombramiento"
                        onBlur={handleBlur}
                        value={form.FechaNombramiento}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaNombramiento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaNombramiento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="EMailEncargado"
                  name="EMailEncargado"
                  label="eMail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.EMailEncargado}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.EMailEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.EMailEncargado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoFijoEncargado"
                  name="TelefonoFijoEncargado"
                  label="Teléfono"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TelefonoFijoEncargado}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoCelularEncargado"
                  name="TelefonoCelularEncargado"
                  label="Celular"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TelefonoCelularEncargado}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TelefonoCelularEncargado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TelefonoCelularEncargado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaOrdenacionConsagracion"
                    inputFormat="dd/MM/yyyy"
                    label="Fecha Ordenación/Consagración"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaOrdenacionConsagracion = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaOrdenacionConsagracion}
                    renderInput={(params) => (
                      <TextField
                        type="datetime-local"
                        size="small"
                        id="FechaOrdenacionConsagracion"
                        name="FechaOrdenacionConsagracion"
                        onBlur={handleBlur}
                        value={form.FechaOrdenacionConsagracion}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaOrdenacionConsagracion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaOrdenacionConsagracion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Diocesis"
                    controller={"ParDiocesis/GetListaParDiocesis"}
                    name="CodigoDiocesis"
                    field="Descripcion"
                  />
                </FormControl>
                {errors.CodigoDiocesis && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoDiocesis}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Congregacion"
                  name="Congregacion"
                  label="Congregación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Congregacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {/* {errors.Congregacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Congregacion}
                  </FormHelperText>
                )} */}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaIngreso"
                    inputFormat="dd/MM/yyyy"
                    label="Fecha Ingreso"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaIngreso = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaIngreso}
                    renderInput={(params) => (
                      <TextField
                        type="datetime-local"
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
                {errors.FechaOrdenacionConsagracion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaOrdenacionConsagracion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title="Estado"
                    controller={"ParEstado/GetParEstados"}
                    name="CodigoEstado"
                    field="Descripcion"
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
                  id="NombreUsuario"
                  name="NombreUsuario"
                  label="Usuario"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={userData.userName}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={12} container justifyContent="end">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./PasAportanteView`);
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
