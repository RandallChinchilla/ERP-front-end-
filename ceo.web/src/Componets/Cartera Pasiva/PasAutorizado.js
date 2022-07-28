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
import { postAction } from "../../Helpers/postHelper";
import { useForm } from "../../Hooks/useForm";
import { SelectCross } from "../Listas/SelectCross";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { putAction } from "../../Helpers/putHelper";
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
  if (!form.CodigoAportante) {
    errors.CodigoAportante = "Debe ingresar el código aportante";
    errors.error = true;
  }
  if (!form.CodigoTipoIdentificacion) {
    errors.CodigoTipoIdentificacion = "Debe ingresar el tipo de indentificación";
    errors.error = true;
  }
  if (!form.NumeroId) {
    errors.NumeroId = "Debe ingresar el número Id";
    errors.error = true;
  }
  if (!form.Nombre) {
    errors.Nombre = "Debe ingresar el nombre";
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
  if (!form.FechaVencimientoId) {
    errors.FechaVencimientoId = "Debe seleccionar la fecha del vencimiento Id";
    errors.error = true;
  }
  if (!form.eMail) {
    errors.eMail = "Debe ingresar el correo electrónico";
    errors.error = true;
  }
  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debe ingresar el teléfono celular";
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

export const PasAutorizado = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,     
    CodigoAportante: 0,
    CodigoTipoIdentificacion: 0,
    NumeroId: "",
    Nombre: "",
    Apellido1:  "",
    Apellido2: "",
    FechaVencimientoId: "",
    eMail: "",
    TelefonoCelular: "",
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
    validationsForm
  );
  //Se creo la opcion de Agregar y Actualizar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rowUpdate) {
      postAction("PasAutorizado/PostPasAutorizado", form, userLoggedToken).then(
        (res) => {
          console.log(res)
          if (res.isSuccess) {
            setForm(initialForm);
            return alert("El Autorizado fue creado con exito");
          } else {
            return alert("El Autorizado no fue creado");
          }
        }
      );
    } else {
      putAction("PasAutorizado/PutPasAutorizado", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            return alert("El autorizado fue actualizado con exito");
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
                Autorizado
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
                <TextField
                  id="CodigoAportante"
                  name="CodigoAportante"
                  label="Código Aportante"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoAportante}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoAportante}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoTipoIdentificacion"
                  name="CodigoTipoIdentificacion"
                  label="Código Tipo Identificación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoTipoIdentificacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaVencimientoId"
                    label="Fecha Vencimiento Id"
                    inputformat="dd/MM/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaVencimientoId = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaVencimientoId}
                    renderInput={(params) => (
                      <TextField
                        inputformat="dd/MM/yyyy"
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
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="eMail"
                  name="eMail"
                  label="Correo Electrónico"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.eMail}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.eMail && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.eMail}
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
              {/* Se agregaron las funciones actualizar agregar y regresar */}
              <Grid item xs={12} container justifyContent="end">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./PasAutorizadoView`);
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