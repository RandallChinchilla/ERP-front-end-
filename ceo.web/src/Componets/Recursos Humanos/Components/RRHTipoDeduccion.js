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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
    errors.Descripcion =
      "Debe ingresar una descipción";
    errors.error = true;
  }
  if (!form.FechaVencimiento) {
    errors.FechaVencimiento = "Debe seleccionar la fecha de vencimiento";
    errors.error = true;
  }
  if (!form.Monto) {
    errors.Monto = "Debe ingresar el monto";
    errors.error = true;
  }
  if (!form.Porcentaje) {
    errors.Porcentaje = "Debe ingresar el porcentaje";
    errors.error = true;
  }
  if (!form.IndicadorIndividual) {
    errors.IndicadorIndividual = "Debe ingresar el indicador individual";
    errors.error = true;
  }
  if (!form.CodigoTransaccion) {
    errors.CodigoTransaccion = "Debe ingresar el código transacción";
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

export const RRHTipoDeduccion = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [value, setValue] = useState(new Date());
  let usehistory = useHistory();

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoTipoDeduccion: 0,
    Descripcion: "",
    FechaVencimiento: "",
    IndicadorMontoFijo: false,
    Monto: "",
    Porcentaje: "",
    IndicadorIndividual: "",
    CodigoTransaccion: 0,
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

  const { form, errors, handleChange, handleBlur, setForm, handleChecked} = useForm(
    initialForm,
    validationsForm
  );
  //Se creo la opcion de Agregar y Actualizar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.CodigoTipoDeduccion === 0) {
      postAction("RrhTipoDeduccion/PostRrhTipoDeduccion", form, userLoggedToken).then(
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
      putAction("RrhTipoDeduccion/PutRrhTipoDeduccion", form, userLoggedToken).then(
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
                  Tipo Deducción
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
                  id="CodigoTipoDeduccion"
                  name="CodigoTipoDeduccion"
                  label="Código Tipo Deducción"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoTipoDeduccion}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                ></TextField>
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaVencimiento"
                    label="Fecha Vencimiento"
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
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IndicadorMontoFijo"
                          checked={form.IndicadorMontoFijo || false}
                          onChange={handleChecked}
                          onBlur={handleBlur}
                        />
                      }
                      label="Indicador Monto Fijo"
                      labelPlacement="start"
                      className={styles.inpuntEmpresa}
                      size="small"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Monto"
                  name="Monto"
                  label="Monto"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Monto}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Monto && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Monto}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Porcentaje"
                  name="Porcentaje"
                  label="Porcentaje"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Porcentaje && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IndicadorIndividual"
                  name="IndicadorIndividual"
                  label="Indicador Individual"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorIndividual}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.IndicadorIndividual && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorIndividual}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Código Transacción"}
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
                    usehistory.push(`./RRHTipoDeduccionView`);
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
