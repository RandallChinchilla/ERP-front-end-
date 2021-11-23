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
import SelectCodigoTransaccion from "../Listas/SelectCodigoTransaccion";
import SelectModulo from "../Listas/SelectModulo";

const useStyles = makeStyles((theme) => ({
    iconos: {
      cursor: "pointer",
    },
    paper: {
      width: 1200,
      height: 750,
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
    if (!form.Descripcion) {
        errors.Descripcion = "Debe ingresar una descripción";
        errors.error = true;
      }
    if (!form.Automatica) {
        errors.Automatica = "Debe ingresar si es automática";
        errors.error = true;
      }
    if (!form.ImprimeRecibo) {
        errors.ImprimeRecibo = "Debe ingresar si imprime recibo";
        errors.error = true;
      }
    if (!form.IngresaTransferencia) {
        errors.IngresaTransferencia = "Debe ingresar si se ingresa transferencia";
        errors.error = true;
      }
    if (!form.GeneraFacturaElectronica) {
        errors.GeneraFacturaElectronica = "Debe ingresar si se genera factura electrónica";
        errors.error = true;
      }
    if (!form.GeneraDebitoElectronico) {
        errors.GeneraDebitoElectronico = "Debe ingresar si genera débito electrónico";
        errors.error = true;
      }
    if (!form.GeneraCreditoElectronico) {
        errors.GeneraCreditoElectronico = "Debe ingresar si genera crédito electrónico";
        errors.error = true;
      }
    if (!form.CuentaProductoDebito) {
        errors.CuentaProductoDebito = "Debe ingresar si utiliza cuenta producto débito";
        errors.error = true;
      }
    if (!form.TipoCuentaDebito) {
        errors.TipoCuentaDebito = "Debe ingresar el tipo de cuenta débito";
        errors.error = true;
      }
    if (!form.CuentaContableDebito) {
        errors.CuentaContableDebito = "Debe ingresar la cuenta contable de débito";
        errors.error = true;
      }
    if (!form.CuentaProductoCredito) {
        errors.CuentaProductoCredito = "Debe ingresar si utiliza cuenta producto crédito";
        errors.error = true;
      }
    if (!form.TipoCuentaCredito) {
        errors.TipoCuentaCredito = "Debe ingresar el tipo de cuenta de crédito";
        errors.error = true;
      }
    if (!form.CuentaContableCredito) {
        errors.CuentaContableCredito = "Debe ingresar la cuenta contable de crédito";
        errors.error = true;
      }
    if (!form.IngresaEfectivo) {
        errors.IngresaEfectivo = "Debe seleccionar si se ingresa efectivo";
        errors.error = true;
      }
    if (!form.EgresaEfectivo) {
        errors.EgresaEfectivo = "Debe seleccionar si se egresa efectivo";
        errors.error = true;
      }
    if (!form.IngresaValorDocumento) {
        errors.IngresaValorDocumento = "Debe seleccionar si se ingresa documento valor";
        errors.error = true;
      }
    if (!form.AfectaSaldoMaestro) {
        errors.AfectaSaldoMaestro = "Debe seleccionar si afecta el saldo maestro";
        errors.error = true;
      }
    if (!form.DisminuyeSaldoMaestro) {
        errors.DisminuyeSaldoMaestro = "Debe seleccionar si disminuye el saldo maestro";
        errors.error = true;
      }
    if (!form.AfectaInteres) {
        errors.AfectaInteres = "Debe seleccionar si afecta el interés";
        errors.error = true;
      }
    if (!form.DisminuyeInteres) {
        errors.DisminuyeInteres = "Debe seleccionar si disminuye el interés";
        errors.error = true;
      }
    if (!form.GeneraCheque) {
        errors.GeneraCheque = "Debe seleccionar si genera cheque";
        errors.error = true;
      }
    if (!form.AceptaTarjeta) {
        errors.AceptaTarjeta = "Debe seleccionar si acepta tarjeta";
        errors.error = true;
      }
      if (!form.RequiereAutorizacion) {
        errors.RequiereAutorizacion = "Debe seleccionar si requiere autorización";
        errors.error = true;
      }
      if (!form.GeneraCheque) {
        errors.GeneraCheque = "Debe seleccionar si genera cheque";
        errors.error = true;
      }
/*     if (!form.Usuario) {
        errors.Usuario = "Debe ingresar un usuario";
        errors.error = true;
      } */
    return errors;
  };

export default function ParCodigoTransaccion(){

    const styles = useStyles();

    const initialForm = {
        Descripcion: "",
        Automatica: "",
        ImprimeRecibo: "",
        IngresaTransferencia: "",
        GeneraFacturaElectronica: "",
        GeneraDebitoElectronico: "",
        GeneraCreditoElectronico: "",
        CuentaProductoDebito: "",
        TipoCuentaDebito: "",
        CuentaContableDebito: "",
        CuentaProductoCredito: "",
        TipoCuentaCredito: "",
        CuentaContableCredito: "",
        IngresaEfectivo: "",
        EgresaEfectivo: "",
        IngresaValorDocumento: "",
        AfectaSaldoMaestro: "",
        DisminuyeSaldoMaestro: "",
        AfectaInteres: "",
        DisminuyeInteres: "",
        GeneraCheque: "",
        AceptaTarjeta: "",
        RequiereAutorizacion: "",
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
              Códigos Transacción 
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
            <SelectModulo/>
          </FormControl>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2}>
          <FormControl className={styles.listas}>
            <SelectCodigoTransaccion/>
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
              </FormHelperText>)}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 5, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Automática" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 4, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Imprime recibo" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Ingresa Transferencia" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Genera Factura Electrónica" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Genera Débito Electrónico" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Genera Credito Electrónico" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Utiliza cuenta producto débito" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="TipoCuentaDebito"
            name="TipoCuentaDebito"
            label="Tipo Cuenta Débito"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TipoCuentaDebito}
          ></TextField>
            {errors.TipoCuentaDebito && (
              <FormHelperText id="my-helper-text" error>
                {errors.TipoCuentaDebito}
              </FormHelperText>)}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="CuentaContableDebito"
            name="CuentaContableDebito"
            label="Cuenta Contable Débito"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Descripcion}
          ></TextField>
            {errors.CuentaContableDebito && (
              <FormHelperText id="my-helper-text" error>
                {errors.CuentaContableDebito}
              </FormHelperText>)}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Utiliza cuenta producto credito" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="TipoCuentaCredito"
            name="TipoCuentaCredito"
            label="Tipo Cuenta Crédito"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TipoCuentaCredito}
          ></TextField>
            {errors.TipoCuentaCredito && (
              <FormHelperText id="my-helper-text" error>
                {errors.TipoCuentaCredito}
              </FormHelperText>)}
          </Grid>
          <Grid  container justifyContent="center" xs={3} marginBottom={2}>
          <TextField
            labelId="demo-simple-select-label"
            id="CuentaContableCredito"
            name="CuentaContableCredito"
            label="Cuenta Contable Crédito"
            size="medium"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CuentaContableCredito}
          ></TextField>
            {errors.CuentaContableCredito && (
              <FormHelperText id="my-helper-text" error>
                {errors.CuentaContableCredito}
              </FormHelperText>)}
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 3, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Ingresa Efectivo" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 3, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Egresa Efectivo" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Ingresa Documento Valor" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Afecta saldo maestro" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Disminuye saldo maestro" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 4, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Afecta interés" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 3, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Disminuye interés" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 4, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Genera cheque" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="left">
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5, marginTop:0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Acepta tarjeta DB/CR" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
          </Grid>
          <Grid container justifyContent="center" xs={3} marginBottom={2} marginTop={1}>
          <Box sx={{
            border: 1, 
            borderColor: 'grey.400',
            width: 210,
            height: 50
          }}>
          <FormGroup 
          sx={{marginRight: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Requiere autorización" 
          labelPlacement="start"/>
          </FormGroup>
          </Box>
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
              </FormHelperText>)}
          </Grid>
          </Grid>



         </Grid>
         <Grid container justifyContent="right" marginBottom={1}>
          <Stack spacing={2} direction="row" marginRight={5} marginTop={2}>
          <Button variant="contained" >Aceptar</Button>
          <NavLink tag={Link} to="/Dashboard/ParCodigoTransaccionView"
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