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
import { useForm } from "../../../Hooks/useForm";
import { useHistory, useLocation } from "react-router-dom";
import { SelectCross } from "../../Listas/SelectCross";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { postAction } from "../../../Helpers/postHelper";
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
  if (!form.CodigoTipo) {
    errors.CodigoTipo = "Debe ingresar el código tipo";
    errors.error = true;
  }
  if (!form.FechaHora) {
    errors.FechaHora = "Debe seleccionar la fecha y hora";
    errors.error = true;
  }
  if (!form.Tasa) {
    errors.Tasa = "Debe ingresar la tasa";
    errors.error = true;
  }
  if (!form.TasaMaxima) {
    errors.TasaMaxima = "Debe ingresar la tasa máxima";
    errors.error = true;
  }
  if (!form.PorcentajeISR) {
    errors.PorcentajeISR = "Debe ingresar el porcentaje del ISR";
    errors.error = true;
  }
  if (!form.CodigoEstado) {
    errors.CodigoEstado = "Debe seleccionar el estado";
    errors.error = true;
  }
  return errors;
};

export const PasTasaPlazo = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoTipo: 0,
    FechaHora: "",
    Tasa: "",
    TasaMaxima: "",
    PorcentajeISR: "",
    CodigoEstado: 0,
    Usuario: userData.userName,
  };
  //Se agregaron las funciones de Crear y Editar
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
    if (form.CodigoTipo === 0) {
      postAction("PasTasaPlazo/PostPasTasaPlazo", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            setForm(initialForm);
            return alert("La tasa plazo fue creado con exito");
          } else {
            return alert("La tasa plazo no fue creado");
          }
        }
      );
    } else {
      putAction("PasTasaPlazo/PutPasTasaPlazo", form, userLoggedToken).then(
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

  // const [value, setValue] = useState(new Date());

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
                  Tasa Plazo
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
                  id="CodigoTipo"
                  name="CodigoTipo"
                  label="Código Tipo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoTipo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoTipo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoTipo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaHora"
                    label="Fecha Hora"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaHora = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaHora}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
                        size="small"
                        id="FechaHora"
                        name="FechaHora"
                        onBlur={handleBlur}
                        value={form.FechaHora}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaHora && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaHora}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Tasa"
                  name="Tasa"
                  label="Tasa Bruta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Tasa}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Tasa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Tasa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="TasaMaxima"
                  name="TasaMaxima"
                  label="Tasa Bruta Máxima"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TasaMaxima}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TasaMaxima && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TasaMaxima}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="PorcentajeISR"
                  name="PorcentajeISR"
                  label="Porcentaje ISR"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.PorcentajeISR}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.PorcentajeISR && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.PorcentajeISR}
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
              {/* Se agregaron los funciones de agregar,actualizar y regresar */}
              <Grid item xs={12} container justifyContent="end">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./PasTasaPlazoView`);
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
