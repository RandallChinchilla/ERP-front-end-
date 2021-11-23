import {
    Grid,
    Button,
    TextField,
    Typography,
    Paper,
    Select,
    MenuItem,
    FormHelperText,
  } from "@mui/material";
import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { Link, NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { blue } from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";
import SelectPais from "../Listas/SelectPais";
import SelectId from "../Listas/SelectId";
import SelectEstado from "../Listas/SelectEstado";
import SelectEmpresa from "../Listas/SelectEmpresa";

const useStyles = makeStyles((theme) => ({
    iconos: {
      cursor: "pointer",
    },
    paper: {
      width: 1200,
      height: 450,
    },
    inpunt: {
      width: 150,
      marginBottom: 30,
    },
    button: {
      width: 400,
    },
    select: {
      width: 400,
      marginBottom: 15,
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
    if (!form.Nombre) {
      errors.Nombre = "Debe ingresar un nombre";
      errors.error = true;
    }
    if (!form.TipoId) {
      errors.TipoId = "Debe ingresar un tipo de identificación";
      errors.error = true;
    }
    if (!form.Identificacion) {
        errors.Identificacion = "Debe ingresar un número de identificación";
        errors.error = true;
      }
    if (!form.Pais) {
        errors.Pais = "Debe ingresar un país";
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
    if (!form.FechaIngreso) {
        errors.FechaIngreso = "Debe ingresar la fecha de ingreso";
        errors.error = true;
      }
    if (!form.Usuario) {
        errors.Usuario = "Debe ingresar un usuario";
        errors.error = true;
      }
    if (!form.Estado) {
        errors.Estado = "Debe ingresar un estado";
        errors.error = true;
      }
    if (!form.UltimaModificacion) {
        errors.UltimaModificacion = "Debe ingresar la fecha de la ultima modificación";
        errors.error = true;
      }
    if (!form.UsuarioUltMod) {
        errors.UsuarioUltMod = "Debe ingresar el usuario de la última modificación";
        errors.error = true;
      }
    return errors;
  };

export default function ParEmpresa(){

    const styles = useStyles();

    const initialForm = {
        codigoEmpresa: "",
        Nombre: "",
        TipoId: "",
        Identificacion: "",
        Pais: "",
        Telefono: "",
        Telefono2: "",
        FechaIngreso: "",
        Usuario: "",
        Estado: "",
        UltimaModificacion: "",
        UsuarioUltMod: "",
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
              Empresa
            </Typography>
          </Grid>
          <Grid container justifyContent="center" >     
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
            <SelectEmpresa/>
          </FormControl>
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
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
          <SelectPais/>
          </FormControl>
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
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
          <SelectEstado/>
          </FormControl>
          </Grid> 
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
           id="date"
           type="date"
           sx={{ width: 210 }}
           InputLabelProps={{
           shrink: true,
           }}
           id="UltimaModificacion"
           name="UltimaModificacion"
           label="Fecha de la ultima modificación"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.UltimaModificacion}
          />
            {errors.UltimaModificacion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.UltimaModificacion}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
           className={styles.inputMaterial}
           labelId="demo-simple-select-label"
           id="UsuarioUltMod"
           name="UsuarioUltMod"
           label="Usuario ultima modificación"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.UsuarioUltMod}
          ></TextField>
          </Grid>
         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ParEmpresaview"
           style={isActive => ({
            color: isActive ? "red" : "red"
          })}>
          <Button variant="contained" color="error" >Cancelar</Button>
          </NavLink>
          </Stack>
          </Grid>
    </Box>
    </Paper>
    </Grid>
);}