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
import SelectEmpresa from "../Listas/SelectEmpresa";
import SelectId from "../Listas/SelectId";
import SelectEstado from "../Listas/SelectEstado";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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
    if (!form.TipoId) {
      errors.TipoId = "Debe ingresar un tipo de identificación";
      errors.error = true;
    }
    if (!form.Descripcion) {
        errors.Descripcion = "Debe ingresar una descripción";
        errors.error = true;
      }
    if (!form.Formato) {
        errors.Formato = "Debe ingresar un formato";
        errors.error = true;
      }
    if (!form.Longitud) {
        errors.Longitud = "Debe ingresar la longitud";
        errors.error = true;
      }
    if (!form.CodigoFacturaElectronica) {
        errors.CodigoFacturaElectronica = "Debe ingresar el código de la factura electrónica";
        errors.error = true;
      }
    return errors;
  };

export default function ParTipoIdentificacion(){

    const styles = useStyles();

    const initialForm = {
        TipoId: "",
        Descripcion: "",
        Formato: "",
        Longitud: "",
        CodigoFacturaElectronica: "",
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
              Tipo de Identificacíon
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
            id="Formato"
            name="Formato"
            label="Formato"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Formato}
          ></TextField>
                        {errors.Formato && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Formato}
                </FormHelperText>
              )}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="Longitud"
            name="Longitud"
            label="Longitud"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Longitud}
          ></TextField>
                        {errors.Longitud && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Longitud}
                </FormHelperText>
              )}
          </Grid>
          <Grid container justifyContent="left">
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="UltimaModificacion"
            name="UltimaModificacion"
            label="Ultima Modificación"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Longitud}
          ></TextField>
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="UsuarioModificacion"
            name="UsuarioModificacion"
            label="Usuario Modificación"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Longitud}
          ></TextField>
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="CodigoFacturaElectronica"
            name="CodigoFacturaElectronica"
            label="Código Factura Electrónica"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CodigoFacturaElectronica}
          ></TextField>
                        {errors.CodigoFacturaElectronica && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoFacturaElectronica}
                </FormHelperText>
              )}
          </Grid>
          </Grid>           
         <Grid container justifyContent="left" marginBottom={1} marginLeft={5}>
         <FormGroup>
         <FormControlLabel control={<Switch defaultChecked={false} />} label="Es física?" />
         </FormGroup>
         </Grid>
         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ParTipoIdentificacionView"
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
