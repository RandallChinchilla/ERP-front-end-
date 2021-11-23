import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  FormHelperText,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { Link, NavLink } from "react-router-dom";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";
import { blue } from "@mui/material/colors";
import SelectEstado from "../Listas/SelectEstado";

const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
  paper: {
    width: 1200,
    height: 450,
  },
  listas: {
      width: 210,
  },
}));

const validationsForm = (form) => {
  let errors = {};
  if (!form.codigoEmpresa) {
      errors.codigoEmpresa = "Debe seleccionar una empresa";
      errors.error = true;
    }
  if (!form.PrimerApellido) {
      errors.PrimerApellido = "Debe ingresar el primer apellido";
      errors.error = true;
    }
  if (!form.SegundoApellido) {
      errors.SegundoApellido = "Debe ingresar el segundo apellido";
      errors.error = true;
    }
  if (!form.Nombre) {
    errors.Nombre = "Debe ingresar un nombre";
    errors.error = true;
  }
  if (!form.Descripcion) {
    errors.Descripcion = "Debe ingresar una descripción";
    errors.error = true;
  }
  if (!form.FechaIngreso) {
    errors.FechaIngreso = "Debe ingresar la fecha de ingreso";
    errors.error = true;
  }
  if (!form.FechaSalida) {
    errors.FechaSalida = "Debe ingresar la fecha de salida";
    errors.error = true;
  }
  if (!form.FechaExpPassword) {
    errors.FechaExpPassword = "Debe ingresar la fecha de la expiración de la contraseña";
    errors.error = true;
  }
  return errors;
  };

  export default function SegUsuario(){
  
    const styles = useStyles();

  const initialForm = {
    codigoEmpresa: "",
    PrimerApellido: "",
    SegundoApellido: "",
    Nombre: "",
    Descripcion: "",
    FechaIngreso: "",
    FechaSalida: "",
    FechaExpPassword: "",
    ReinicioDePassword: "",
    Estado: "",
    RememberMe: true,
  };

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

/*   const { Data, Error, setData } = useGetData("SegUsuario");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;
  console.log(options); */


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
              Usuarios
            </Typography>
          </Grid>
          <Grid container justifyContent="center" >
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
          <InputLabel id="demo-simple-select-label">Codigo Empresa</InputLabel>
          <Select
            className={styles.listas}
            labelId="demo-simple-select-label"
            id="codigoEmpresa"
            name="codigoEmpresa"
            label="codigoEstado"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.codigoEmpresa}
          >
             <MenuItem value={1}>1</MenuItem>
             <MenuItem value={2}>2</MenuItem>
             <MenuItem value={3}>3</MenuItem>
          </Select>
          </FormControl>
          {errors.codigoEmpresa && (
                <FormHelperText id="my-helper-text" error>
                  {errors.codigoEmpresa}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="PrimerApellido"
            name="PrimerApellido"
            label="Primer Apellido"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.PrimerApellido}
          ></TextField>
                        {errors.PrimerApellido && (
                <FormHelperText id="my-helper-text" error>
                  {errors.PrimerApellido}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="SegundoApellido"
            name="SegundoApellido"
            label="Segundo Apellido"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.SegundoApellido}
          ></TextField>
                        {errors.SegundoApellido && (
                <FormHelperText id="my-helper-text" error>
                  {errors.SegundoApellido}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="Nombre"
            name="Nombre"
            label="Nombre"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Nombre}
          ></TextField>
                        {errors.Nombre && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Nombre}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="Descripcion"
            name="Descripcion"
            label="Descripción"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Descripcion}
          ></TextField>
                        {errors.Descripcion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Descripcion}
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
          />
                        {errors.FechaIngreso && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaIngreso}
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
           id="FechaSalida"
           name="FechaSalida"
           label="Fecha de salida"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.FechaSalida}
          />
                        {errors.FechaSalida && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaSalida}
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
           id="FechaExpPassword"
           name="FechaExpPassword"
           label="Fecha expiración de contraseña"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.FechaExpPassword}
          />
                        {errors.FechaExpPassword && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaExpPassword}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="left" marginBottom={2}>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="ReinicioDePassword"
            name="ReinicioDePassword"
            label="Reinicio de Contraseña"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.ReinicioDePassword}
          ></TextField>
                        {errors.ReinicioDePassword && (
                <FormHelperText id="my-helper-text" error>
                  {errors.ReinicioDePassword}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
            <SelectEstado/>
          </FormControl>
          </Grid>
          </Grid>
          <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/SegUsuarioView"
           style={isActive => ({
            color: isActive ? "red" : "red"
          })}>
          <Button variant="contained" color="error" >Cancelar</Button>
          </NavLink>
          </Stack>
          </Grid>
    </Grid>
    </Box>
    </Paper>
    </Grid>
);
};