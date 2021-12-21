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
import FormControl from "@mui/material/FormControl";
import { useForm } from "../../Hooks/useForm";
import SelectEmpresa from "../Listas/SelectEmpresa";
import SelectAnno from "../Listas/SelectAnno";
import SelectPeriodo from "../Listas/SelectPeriodo";

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
    if (!form.Cuenta) {
        errors.Cuenta = "Debe seleccionar un número de cuenta";
        errors.error = true;
      }
    if (!form.Consecutivo) {
      errors.Consecutivo = "Debe ingresar un consecutivo";
      errors.error = true;
    }
    if (!form.Detalle) {
        errors.Detalle = "Debe ingresar detalles";
        errors.error = true;
      }
    if (!form.Usuario) {
        errors.Usuario = "Debe ingresar un usuario";
        errors.error = true;
      }
    return errors;
  };

export default function ConNotasEF(){

    const styles = useStyles();

    const initialForm = {
        codigoEmpresa: "",
        Moneda: "",
        Descripcion: "",
        CodigoInternacional: "",
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
              Notas Estado Financiero
            </Typography>
          </Grid>
          <Grid container justifyContent="center" >     
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
          <SelectEmpresa/>
          </FormControl>
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
            id="Cuenta"
            name="Cuenta"
            label="Cuenta"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Cuenta}
          ></TextField>
                        {errors.Cuenta && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Cuenta}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="Consecutivo"
            name="Consecutivo"
            label="Consecutivo"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Consecutivo}
          ></TextField>
                        {errors.Consecutivo && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Consecutivo}
                </FormHelperText>
              )}
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
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="MasDetalle"
            name="MasDetalle"
            label="Más Detalle"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Detalle}
          ></TextField>
                        {errors.MasDetalle && (
                <FormHelperText id="my-helper-text" error>
                  {errors.MasDetalle}
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
         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ConNotasEFView"
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