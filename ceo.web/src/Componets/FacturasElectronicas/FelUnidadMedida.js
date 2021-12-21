import {
    Grid,
    Button,
    TextField,
    Typography,
    Paper,
    FormHelperText,
    Checkbox,
  } from "@mui/material";
import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { Link, NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { blue } from "@mui/material/colors";
import { useForm } from "../../Hooks/useForm";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


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
    if (!form.CodigoUnidadMedida) {
        errors.CodigoUnidadMedida = "Debe ingresar la unidad de medida";
        errors.error = true;
      }
    if (!form.Descripcion) {
        errors.Descripcion = "Debe ingresar una descripción";
        errors.error = true;
      }
    if (!form.DescripcionCorta) {
        errors.DescripcionCorta = "Debe ingresar una descripción corta";
        errors.error = true;
      }       
    return errors;
  };

export default function FelUnidadMedida(){

    const styles = useStyles();

    const initialForm = {
        CodigoUnidadMedida: "",
        Descripcion: "",
        DescripcionCorta: "",
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
              Unidad de Medida
            </Typography>
          </Grid>
          <Grid container justifyContent="left" >     
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="CodigoUnidadMedida"
            name="CodigoUnidadMedida"
            label="Unidad Medida"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CodigoUnidadMedida}
          ></TextField>
                        {errors.CodigoUnidadMedida && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoUnidadMedida}
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
            id="DescripcionCorta"
            name="DescripcionCorta"
            label="Descripción Corta"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.DescripcionCorta}
          ></TextField>
                        {errors.DescripcionCorta && (
                <FormHelperText id="my-helper-text" error>
                  {errors.DescripcionCorta}
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
          <FormGroup sx={{marginRight: 3, marginTop:1}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Indicador Visible" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/FelUnidadMedidaView"
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