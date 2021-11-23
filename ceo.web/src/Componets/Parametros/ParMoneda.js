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
    if (!form.Moneda) {
      errors.Moneda = "Debe ingresar una moneda";
      errors.error = true;
    }
    if (!form.Descripcion) {
        errors.Descripcion = "Debe ingresar una descripción";
        errors.error = true;
      }
    if (!form.CodigoInternacional) {
        errors.CodigoInternacional = "Debe ingresar el código internacional";
        errors.error = true;
      }
    if (!form.Usuario) {
        errors.Usuario = "Debe ingresar un usuario";
        errors.error = true;
      }
    return errors;
  };

export default function ParEmpresa(){

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
              Moneda
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
          <SelectMoneda/>
          </FormControl>
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
            id="CodigoInternacional"
            name="CodigoInternacional"
            label="Código Internacional"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CodigoInternacional}
          ></TextField>
                        {errors.CodigoInternacional && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoInternacional}
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
          <FormGroup sx={{marginRight: 4, marginTop:1}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Moneda local?" 
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
          <FormGroup sx={{marginRight: 2, marginTop:1}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Moneda referencia?" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
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
          
          
          <Grid container justifyContent="left">
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



         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ParMonedaView"
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