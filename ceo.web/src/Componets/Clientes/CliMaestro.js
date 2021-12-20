import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Paper,
  FormHelperText,
  Button,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Link, NavLink } from "react-router-dom";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";
import { blue } from "@mui/material/colors";
import SelectPais from "../Listas/SelectPais";
import SelectEmpresa from "../Listas/SelectEmpresa";
import SelectId from "../Listas/SelectId";
import SelectEstado from "../Listas/SelectEstado";
import SelectBanco from "../Listas/SelectBanco";
import SelectCanton from "../Listas/SelectCanton";
import SelectProvincia from "../Listas/SelectProvincia";
import { useParams } from "react-router-dom";
import { putAction } from "../../Helpers/putHelper";
import { useData } from "../../Hooks/useData";

const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
  paper: {
    width: 1200,
    height: 700,
  },
  listas: {
    width: 210,
  },
  inpunt: {
    width: 200,
    marginBottom: 30,
  },
}));

const validationsForm = (form) => {
  let errors = {};
  if (!form.TipoId) {
    errors.TipoId = "Debe ingresar un tipo de identificación";
    errors.error = true;
  }
  if (!form.Identificacion) {
    errors.Identificacion = "Debe ingresar un número de identificación";
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
    errors.Nombre = "Debe ingresar un nombre";
    errors.error = true;
  }
  if (!form.Contacto) {
    errors.Contacto = "Debe ingresar un contacto";
    errors.error = true;
  }
  if (!form.Telefono1) {
    errors.Telefono1 = "Debe ingresar un número de teléfono";
    errors.error = true;
  }
  if (!form.Telefono2) {
    errors.Telefono2 = "Debe ingresar un número de teléfono";
    errors.error = true;
  }
  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debe ingresar un número de teléfono celular";
    errors.error = true;
  }
  if (!form.CorreoElectronico) {
    errors.CorreoElectronico = "Debe ingresar un correo electronico";
    errors.error = true;
  }
  if (!form.Pais) {
    errors.Pais = "Debe ingresar un país";
    errors.error = true;
  }
  if (!form.Provincia) {
    errors.Provincia = "Debe ingresar una provincia";
    errors.error = true;
  }
  if (!form.Canton) {
    errors.Canton = "Debe ingresar un cantón";
    errors.error = true;
  }
  if (!form.Direccion) {
    errors.Direccion = "Debe ingresar la dirección";
    errors.error = true;
  }
  if (!form.Banco) {
    errors.Banco = "Debe ingresar un banco";
    errors.error = true;
  }
  if (!form.Iban) {
    errors.Iban = "Debe ingresar un IBAN";
    errors.error = true;
  }
  if (!form.FechaIngreso) {
    errors.FechaIngreso = "Debe ingresar la fecha de ingreso";
    errors.error = true;
  }
  if (!form.Observaciones) {
    errors.Observaciones = "Debe ingresar sus observaciones";
    errors.error = true;
  }
  if (!form.Estado) {
    errors.Estado = "Debe ingresar un estado";
    errors.error = true;
  }
  if (!form.Usuario) {
    errors.Usuario = "Debe ingresar un usuario";
    errors.error = true;
  }
  return errors;
};

export const CliMaestro = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editCliMaestro"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const dataInitial = {};

  const initialForm = {
    CodigoEmpresa: rowEdit ? rowEdit.CodigoEmpresa : "",
    NumeroCliente: rowEdit ? rowEdit.NumeroCliente : "",
    Apellido1: rowEdit ? rowEdit.Apellido1 : "",
    Apellido2: rowEdit ? rowEdit.Apellido2 : "",
    Nombre: rowEdit ? rowEdit.Nombre : "",
    Contacto: rowEdit ? rowEdit.Contacto : "",
    Telefono1: rowEdit ? rowEdit.Telefono1 : "",
    Telefono2: rowEdit ? rowEdit.Telefono2 : "",
    TelefonoCelular: rowEdit ? rowEdit.TelefonoCelular : "",
    CorreoElectronico: rowEdit ? rowEdit.CorreoElectronico : "",
    Direccion: rowEdit ? rowEdit.Direccion : "",
    NumeroBanco: rowEdit ? rowEdit.NumeroBanco : "",
    Iban: rowEdit ? rowEdit.Iban : "",
    FechaIngreso: rowEdit ? rowEdit.FechaIngreso : "",
    IndicadorEsProveedor: rowEdit ? rowEdit.IndicadorEsProveedor : "",
    Observaciones: rowEdit ? rowEdit.Observaciones : "",
    CodigoTipoIdentificacion: rowEdit ? rowEdit.CodigoTipoIdentificacion : "",
    codigoPais: rowEdit ? rowEdit.CodigoPais : "",
    CodigoProvincia: rowEdit ? rowEdit.CodigoProvincia : "",
    CodigoCanton: rowEdit ? rowEdit.CodigoCanton : "",
    CodigoEstado: rowEdit ? rowEdit.CodigoEstado : "",
    IdUsuario: rowEdit ? rowEdit.IdUsuario : "",
    Id: rowEdit ? rowEdit.Id : "",
    NumeroId: rowEdit ? rowEdit.NumeroId : "",
  };

  const { isNew } = useParams();
  console.log(isNew);

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );
  const { response, handleUpdate, handleAdd } = useData(
    form,
    "CliMaestro/PutCliMaestro"
  );

  return (
    <Grid mb={4} container justifyContent="center">
      <Paper elevation={3} className={styles.paper}>
        <Box container sx={{ maxWidth: "100%" }}>
          <Grid>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                color: blue[600],
                textAlign: "center",
                fontSize: 16,
                marginTop: 3,
                marginBottom: 3,
              }}
            >
              Clientes
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                labelId="demo-simple-select-label"
                id="Apellido1"
                name="Apellido1"
                label="Primer Apellido"
                size="medium"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Apellido1}
                className={styles.inpunt}
              ></TextField>
              {errors.Apellido1 && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Apellido1}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                labelId="demo-simple-select-label"
                id="Apellido2"
                name="Apellido2"
                label="Segundo Apellido"
                size="medium"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Apellido2}
                className={styles.inpunt}
              ></TextField>
              {errors.Apellido2 && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Apellido2}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                labelId="demo-simple-select-label"
                id="Nombre"
                name="Nombre"
                label="Nombre"
                size="medium"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Nombre}
                className={styles.inpunt}
              ></TextField>
              {errors.Nombre && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Nombre}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="Contacto"
                name="Contacto"
                label="Contacto"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Contacto}
                className={styles.inpunt}
              ></TextField>
              {errors.Contacto && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Contacto}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="Telefono1"
                name="Telefono1"
                label="Teléfono1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Telefono1}
                className={styles.inpunt}
              ></TextField>
              {errors.Telefono && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Telefono}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="Telefono2"
                name="Telefono2"
                label="Teléfono"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Telefono2}
                className={styles.inpunt}
              ></TextField>
              {errors.Telefono2 && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Telefono2}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="TelefonoCelular"
                name="TelefonoCelular"
                label="Telefono Celular"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.TelefonoCelular}
                className={styles.inpunt}
              ></TextField>
              {errors.TelefonoCelular && (
                <FormHelperText id="my-helper-text" error>
                  {errors.TelefonoCelular}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="CorreoElectronico"
                name="CorreoElectronico"
                label="Correo Electrónico"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.CorreoElectronico}
                className={styles.inpunt}
              ></TextField>
              {errors.Email && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Email}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <FormControl className={styles.listas}>
                <SelectPais
                  form={form}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <FormControl className={styles.listas}>
                <SelectProvincia CodigoProvincia={form.CodigoProvincia} />
              </FormControl>
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <FormControl className={styles.listas}>
                <SelectCanton CodigoCanton={form.CodigoCanton} />
              </FormControl>
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="Direccion"
                name="Direccion"
                label="Dirección"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Direccion}
                className={styles.inpunt}
              ></TextField>
              {errors.Direccion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Direccion}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <FormControl className={styles.listas}>
                <SelectBanco value={form.NumeroBanco} />
              </FormControl>
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="Iban"
                name="Iban"
                label="IBAN"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Iban}
                className={styles.inpunt}
              ></TextField>
              {errors.IBAN && (
                <FormHelperText id="my-helper-text" error>
                  {errors.IBAN}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                id="date"
                type="date"
                sx={{ width: 210 }}
                InputLabelProps={{
                  shrink: true,
                }}
                id="FechaIngreso"
                name="FechaIngreso"
                label="Fecha de ingreso"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.FechaIngreso}
                className={styles.inpunt}
              />
              {errors.FechaIngreso && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaIngreso}
                </FormHelperText>
              )}
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <TextField
                className={styles.inputMaterial}
                labelId="demo-simple-select-label"
                id="Observaciones"
                name="Observaciones"
                label="Observaciones"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.Observaciones}
                className={styles.inpunt}
              ></TextField>
              {errors.Observaciones && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Observaciones}
                </FormHelperText>
              )}
            </Grid>
            <Grid
              container
              justifyContent="center"
              xs={3}
              marginBottom={2}
              marginTop={1}
            >
              <Box
                sx={{
                  border: 1,
                  borderColor: "grey.400",
                  width: 210,
                  height: 50,
                }}
              >
                <FormGroup sx={{ marginRight: 4, marginTop: 0.5 }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked={false} />}
                    label="Es Proveedor?"
                    labelPlacement="start"
                    value={form.IndicadorEsProveedor}
                  />
                </FormGroup>
              </Box>
            </Grid>
            <Grid container justifyContent="center" xs={3} marginBottom={2}>
              <FormControl className={styles.listas}>
                <SelectEstado CodigoEstado={form.CodigoEstado} />
              </FormControl>
            </Grid>
            <Grid container justifyContent="right" marginBottom={1}>
              <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
                {isNew == 1 ? (
                  <Button variant="contained" onClick={handleAdd}>
                    Agregar
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleUpdate}>
                    Editar
                  </Button>
                )}
                <NavLink
                  tag={Link}
                  to="/Dashboard/CliMaestroView"
                  style={(isActive) => ({
                    color: isActive ? "red" : "red",
                  })}
                >
                  <Button variant="contained" color="error">
                    Cancelar
                  </Button>
                </NavLink>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};
