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
import { useForm } from "../../Hooks/useForm";


const useStyles = makeStyles((theme) => ({
    iconos: {
      cursor: "pointer",
    },
    paper: {
      width: 1200,
      height: 250,
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
    if (!form.TipoImpuesto) {
        errors.TipoImpuesto = "Debe ingresar el tipo de impuesto";
        errors.error = true;
      }
    if (!form.Descripcion) {
        errors.Descripcion = "Debe ingresar una descripción";
        errors.error = true;
      }
    if (!form.CodigoTarifa) {
        errors.CodigoTarifa = "Debe ingresar el código tarifa";
        errors.error = true;
      }
    if (!form.Porcentaje) {
        errors.Porcentaje = "Debe ingresar el porcentaje";
        errors.error = true;
      }  
    return errors;
  };

export default function FelTipoImpuesto(){

    const styles = useStyles();

    const initialForm = {
        TipoImpuesto: "",
        Descripcion: "",
        CodigoTarifa: "",
        Porcentaje: "",
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
              Tipo de Impuesto
            </Typography>
          </Grid>
          <Grid container justifyContent="left" >     
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="TipoImpuesto"
            name="TipoImpuesto"
            label="Tipo Impuesto"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TipoImpuesto}
          ></TextField>
                        {errors.TipoImpuesto && (
                <FormHelperText id="my-helper-text" error>
                  {errors.TipoImpuesto}
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
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="CodigoTarifa"
            name="CodigoTarifa"
            label="Código Tarifa"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CodigoTarifa}
          ></TextField>
                        {errors.CodigoTarifa && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoTarifa}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="Porcentaje"
            name="Porcentaje"
            label="Porcentaje"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Porcentaje}
          ></TextField>
                        {errors.Porcentaje && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Porcentaje}
                </FormHelperText>
              )}
          </Grid>
         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/FelTipoImpuestoView"
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