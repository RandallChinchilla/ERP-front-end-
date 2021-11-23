import {
    Grid,
    Button,
    TextField,
    Typography,
    Paper,
    Select,
    MenuItem,
    FormHelperText,
    Checkbox,
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
import SelectEmpresa from "../Listas/SelectEmpresa";
import SelectId from "../Listas/SelectId";
import SelectEstado from "../Listas/SelectEstado";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import SelectMoneda from "../Listas/SelectMoneda";
import SelectAnno from "../Listas/SelectAnno";
import SelectPeriodo from "../Listas/SelectPeriodo";
import SelectModulo from "../Listas/SelectModulo";

const useStyles = makeStyles((theme) => ({
    iconos: {
      cursor: "pointer",
    },
    paper: {
      width: 1200,
      height: 620,
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
    if (!form.Asiento) {
        errors.Asiento = "Debe ingresar un asiento";
        errors.error = true;
      }
    if (!form.Detalle) {
        errors.Detalle = "Debe ingresar un detalle";
        errors.error = true;
      }
    if (!form.FechaIngreso) {
        errors.FechaIngreso = "Debe ingresar una fecha de ingreso";
        errors.error = true;
      }
    if (!form.FechaAplicacion) {
        errors.FechaAplicacion = "Debe ingresar una fecha de aplicación";
        errors.error = true;
      }
    if (!form.FechaReversion) {
        errors.FechaReversion = "Debe ingresar una fecha de reversión";
        errors.error = true;
      }
    if (!form.AsientoReversion) {
        errors.AsientoReversion = "Debe ingresar un asiento de reversión";
        errors.error = true;
      }
    if (!form.NumeroTransaccion) {
        errors.NumeroTransaccion = "Debe ingresar un número de transacción";
        errors.error = true;
      }
    if (!form.Usuario) {
        errors.Usuario = "Debe ingresar un usuario";
        errors.error = true;
      }
    if (!form.UsuarioAplica) {
        errors.UsuarioAplica = "Debe ingresar el usuario que aplica";
        errors.error = true;
      }
    if (!form.UsuarioReversa) {
        errors.UsuarioReversa = "Debe ingresar el usuario que reversa";
        errors.error = true;
      }  
    return errors;
  };

export default function ConEncabezado(){

    const styles = useStyles();

    const initialForm = {
        codigoEmpresa: "",
        Asiento: "",
        Anno: "",
        Periodo: "",
        Detalle: "",
        FechaAplicacion: "",
        FechaAplicacion: "",
        FechaReversion: "",
        AsientoReversion: "",
        NumeroTransaccion: "",
        Usuario: "",
        UsuarioAplica: "",
        UsuarioReversa: "",
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
              Asientos
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
            id="Asiento"
            name="Asiento"
            label="Asiento"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Asiento}
          ></TextField>
                        {errors.Asiento && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Asiento}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
          <SelectAnno/>
          </FormControl>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
          <SelectPeriodo/>
          </FormControl>
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="Detalle"
            name="Detalle"
            label="Detalle"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Detalle}
          ></TextField>
                        {errors.Detalle && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Detalle}
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
           label="Fecha de Ingreso"
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
           id="FechaAplicacion"
           name="FechaAplicacion"
           label="Fecha de Aplicación"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.FechaAplicacion}
          />
            {errors.FechaAplicacion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaAplicacion}
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
           id="FechaReversion"
           name="FechaReversion"
           label="Fecha de Reversión"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.FechaReversion}
          />
            {errors.FechaReversion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.FechaReversion}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="AsientoReversion"
            name="AsientoReversion"
            label="Asiento Reversión"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.AsientoReversion}
          ></TextField>
                        {errors.AsientoReversion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.AsientoReversion}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
              <SelectModulo/>
          </FormControl>
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="NumeroTransaccion"
            name="NumeroTransaccion"
            label="Numero de Transacción"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.NumeroTransaccion}
          ></TextField>
                        {errors.NumeroTransaccion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.NumeroTransaccion}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} >
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 55
          }}>
          <FormGroup sx={{marginRight: 2, marginTop: 1}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Asiento Diferencial" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} >
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 55
          }}>
          <FormGroup sx={{marginRight: 4, marginTop:1}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Asiento Externo" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
              <SelectEstado/>
          </FormControl>
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="Usuario"
            name="Usuario"
            label="Usuario"
            size="medium"
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
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="UsuarioAplica"
            name="UsuarioAplica"
            label="Usuario Aplica"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.UsuarioAplica}
          ></TextField>
                        {errors.UsuarioAplica && (
                <FormHelperText id="my-helper-text" error>
                  {errors.UsuarioAplica}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="left" >
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="UsuarioReversa"
            name="UsuarioReversa"
            label="Usuario Reversa"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.UsuarioReversa}
          ></TextField>
                        {errors.UsuarioReversa && (
                <FormHelperText id="my-helper-text" error>
                  {errors.UsuarioReversa}
                </FormHelperText>
              )}
          </Grid>
          </Grid>
         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ConEncabezadoView"
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