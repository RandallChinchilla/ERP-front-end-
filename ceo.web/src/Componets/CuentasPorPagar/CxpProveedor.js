import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Paper,
  FormHelperText,
  Button,
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
import SelectPais from "../Listas/SelectPais";
import SelectEmpresa from "../Listas/SelectEmpresa";
import SelectId from "../Listas/SelectId";
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
    height: 650,
  },
  listas: {
    width: 210,
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
  if (!form.Nombre) {
    errors.Nombre = "Debe ingresar un nombre";
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
  if (!form.Telefono) {
    errors.Telefono= "Debe ingresar un número de teléfono";
    errors.error = true;
  }
  if (!form.Telefono2) {
    errors.Telefono2 = "Debe ingresar un número de teléfono";
    errors.error = true;
  }
  if (!form.TelefonoEmergencias) {
    errors.TelefonoEmergencias = "Debe ingresar un número de emergencias";
    errors.error = true;
  }
  if (!form.Pais) {
    errors.Pais = "Debe ingresar un país";
    errors.error = true;
  }
  if (!form.Direccion) {
    errors.Direccion = "Debe ingresar la dirección";
    errors.error = true;
  }
  if (!form.Contacto) {
    errors.Contacto = "Debe ingresar un contacto";
    errors.error = true;
  }
  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debe ingresar un número de teléfono celular";
    errors.error = true;
  }
  if (!form.Email) {
    errors.Email = "Debe ingresar un correo electronico";
    errors.error = true;
  }
  if (!form.PlazoPago) {
    errors.PlazoPago = "Debe ingresar un plazo de pago";
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

export const CxpProveedor = () => {

  const styles = useStyles();

  const initialForm = {
      TipoId: "",
      Identificacion: "",
      Nombre: "",
      PrimerApellido: "",
      SegundoApellido: "",
      Telefono: "",
      Telefono2: "",
      TelefonoEmergencias: "",
      Pais: "",
      Direccion: "",
      Contacto: "",    
      TelefonoCelular: "",
      Email: "",
      PlazoPago: "",
      Observaciones: "",
      Estado: "",
      Usuario: "",
      RememberMe: true,
    };
  
    const { form, errors, handleChange, handleBlur } = useForm(
      initialForm,
      validationsForm
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
              Proveedores
            </Typography>
          </Grid>
          <Grid container justifyContent="center" >         
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
            <SelectId/>
          </FormControl>
          </Grid>       
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            className={styles.inputMaterial}
            labelId="demo-simple-select-label"
            id="Identificacion"
            name="Identificacion"
            label="Identificación"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Identificacion}
          ></TextField>
                        {errors.Identificacion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Identificacion}
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
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            className={styles.inputMaterial}
            labelId="demo-simple-select-label"
            id="Telefono"
            name="Telefono"
            label="Teléfono"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Telefono}
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
            id="TelefonoEmergencias"
            name="TelefonoEmergencias"
            label="Teléfono Emergencias"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TelefonoEmergencias}
          ></TextField>
                        {errors.TelefonoEmergencias && (
                <FormHelperText id="my-helper-text" error>
                  {errors.TelefonoEmergencias}
                </FormHelperText>
              )}  
          </Grid>  
         <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
            <SelectPais/>
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
           ></TextField>
                        {errors.Direccion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Direccion}
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
            id="TelefonoCelular"
            name="TelefonoCelular"
            label="Telefono Celular"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TelefonoCelular}
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
            id="Email"
            name="Email"
            label="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Email}
           ></TextField>
                        {errors.Email && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Email}
                </FormHelperText>
              )}
          </Grid> 
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            className={styles.inputMaterial}
            labelId="demo-simple-select-label"
            id="PlazoPago"
            name="PlazoPago"
            label="Plazo de Pago"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.PlazoPago}
           ></TextField>
                        {errors.PlazoPago && (
                <FormHelperText id="my-helper-text" error>
                  {errors.PlazoPago}
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
           ></TextField>
                        {errors.Observaciones && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Observaciones}
                </FormHelperText>
              )}
          </Grid> 
         <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
            <SelectEstado/>
          </FormControl>
          </Grid> 
          <Grid container justifyContent="left" marginBottom={2}>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            className={styles.inputMaterial}
            labelId="demo-simple-select-label"
            id="Usuario"
            name="Usuario"
            label="Usuario"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Usuario}
          ></TextField>
                        {errors.Usuario && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Usuario}
                </FormHelperText>
              )}
          </Grid>
          </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/CxpProveedorView"
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