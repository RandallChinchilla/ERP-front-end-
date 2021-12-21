import {
    Grid,
    Button,
    TextField,
    Typography,
    Paper,
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
import SelectEmpresa from "../Listas/SelectEmpresa";
import SelectCuentaGastoDiferencial from "../Listas/SelectCuentaGastoDif";
import SelectCuentraIngresoDiferencial from "../Listas/SelectCuentaIngresoDif";
import SelectCuentaUtilidadPeriodo from "../Listas/SelectCuentaUtilidadPeriodo";
import SelectCuentaUtilidadNoDis from "../Listas/SelectCuentaUtilidadNoDis";


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
    if (!form.CantidadPeriodos) {
        errors.CantidadPeriodos = "Debe ingresar la cantidad de períodos";
        errors.error = true;
      }
    if (!form.MascaraContable) {
        errors.MascaraContable = "Debe ingresar la máscara contable";
        errors.error = true;
      }
    if (!form.NivelMoneda) {
        errors.NivelMoneda = "Debe ingresar el nivel moneda";
        errors.error = true;
      }
    if (!form.NivelSig) {
        errors.NivelSig = "Debe ingresar el nivel SIG";
        errors.error = true;
      }
    if (!form.NivelRegulador) {
        errors.NivelRegulador = "Debe ingresar el nivel regulador";
        errors.error = true;
      }
    if (!form.MargenAutoajuste) {
        errors.MargenAutoajuste = "Debe ingresar el margen autoajuste";
        errors.error = true;
      }
    if (!form.MesInicioPeriodo) {
        errors.MesInicioPeriodo = "Debe ingresar el mes del inicio de período";
        errors.error = true;
      }
    if (!form.Usuario) {
        errors.Usuario = "Debe ingresar un usuario";
        errors.error = true;
      }
    return errors;
  };

export default function ConParametros(){

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
              Parámetros
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
            id="CantidadPeriodos"
            name="CantidadPeriodos"
            label="Cantidad de Períodos"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CantidadPeriodos}
          ></TextField>
                        {errors.CantidadPeriodos && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CantidadPeriodos}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="MascaraContable"
            name="MascaraContable"
            label="Máscara Contable"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.MascaraContable}
          ></TextField>
                        {errors.MascaraContable && (
                <FormHelperText id="my-helper-text" error>
                  {errors.MascaraContable}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="NivelMoneda"
            name="NivelMoneda"
            label="Nivel Moneda"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.NivelMoneda}
          ></TextField>
                        {errors.NivelMoneda && (
                <FormHelperText id="my-helper-text" error>
                  {errors.NivelMoneda}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="NivelSig"
            name="NivelSig"
            label="Nivel SIG"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.NivelSig}
          ></TextField>
                        {errors.NivelSig && (
                <FormHelperText id="my-helper-text" error>
                  {errors.NivelSig}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="NivelRegulador"
            name="NivelRegulador"
            label="Nivel Regulador"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.NivelRegulador}
          ></TextField>
                        {errors.NivelRegulador && (
                <FormHelperText id="my-helper-text" error>
                  {errors.NivelRegulador}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="MargenAutoajuste"
            name="MargenAutoajuste"
            label="Margen Autoajuste"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.MargenAutoajuste}
          ></TextField>
                        {errors.MargenAutoajuste && (
                <FormHelperText id="my-helper-text" error>
                  {errors.MargenAutoajuste}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="MesInicioPeriodo"
            name="MesInicioPeriodo"
            label="Mes Inicio Período"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.MesInicioPeriodo}
          ></TextField>
                        {errors.MesInicioPeriodo && (
                <FormHelperText id="my-helper-text" error>
                  {errors.MesInicioPeriodo}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
              <SelectCuentaGastoDiferencial/>
          </FormControl>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
              <SelectCuentraIngresoDiferencial/>
          </FormControl>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
              <SelectCuentaUtilidadPeriodo/>
          </FormControl>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
              <SelectCuentaUtilidadNoDis/>
          </FormControl>
          </Grid>
          <Grid container justifyContent="left">
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
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
          </Grid>

         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ConParametrosView"
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