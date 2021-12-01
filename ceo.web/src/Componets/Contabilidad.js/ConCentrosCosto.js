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

const useStyles = makeStyles((theme) => ({
    iconos: {
      cursor: "pointer",
    },
    paper: {
      width: 1200,
      height: 300,
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
    if (!form.CodigoCentroCosto) {
      errors.CodigoCentroCosto = "Debe ingresar el código Centro Costo";
      errors.error = true;
    }
    if (!form.Descripcion) {
        errors.Descripcion = "Debe ingresar una descripción";
        errors.error = true;
      }
    return errors;
  };

export default function ConCentrosCosto(){

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
              Centros Costo
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
            id="CodigoCentroCosto"
            name="CodigoCentroCosto"
            label="Código Centro Costo"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CodigoCentroCosto}
          ></TextField>
                        {errors.CodigoCentroCosto && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoCentroCosto}
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
          <FormControl className={styles.listas}>
          <SelectEstado/>
          </FormControl>
          </Grid> 
         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ConCentrosCostoView"
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