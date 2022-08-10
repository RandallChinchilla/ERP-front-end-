import { makeStyles, InputAdornment } from "@material-ui/core";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useForm } from "../../Hooks/useForm";
import { SelectCross } from "../Listas/SelectCross";
import { useHistory, useLocation } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { postAction } from "../../Helpers/postHelper";
import { putAction } from "../../Helpers/putHelper";
import { useGetData } from "../../Hooks/useGetData";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import MaterialTable from "material-table";

const useStyles = makeStyles(() => ({
    iconos: {
      cursor: "pointer",
    },
    inputMaterial: {
      marginRight: 3,
    },
    paper: {
      width: 1200,
    },
    listas: {
      width: "100%",
    },
    inpuntEmpresa: { width: "100%" },
    gridContainer: { paddingRight: 5, paddingLeft: 5 },
    button: { margin: "1px" },
  }));

  const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

  const validationsForm = (form) => {
    let errors = {};
    if (form.CodigoPortafolio === 0) {
      errors.CodigoPortafolio = "Debes seleccionar un portafolio";
      errors.error = true;
    }
    if (!form.NumeroInversion) {
      errors.NumeroInversion = "Debes ingresar un número de inversion";
      errors.error = true;
    }
    if (form.CodigoAportante === 0) {
      errors.CodigoAportante = "Debes seleccionar un aportante";
      errors.error = true;
    }
    if (form.CodigoInstrumento === 0) {
        errors.CodigoInstrumento = "Debes seleccionar un instrumento";
        errors.error = true;
    }
    if (form.CodigoMoneda === 0) {
        errors.CodigoMoneda = "Debes seleccionar una moneda";
        errors.error = true;
    }
    if (!form.Isin) {
        errors.Isin = "Debes ingresar un Isin";
        errors.error = true;
    }
    if (!form.Serie) {
        errors.Serie = "Debes ingresar una serie";
        errors.error = true;
    }
    if (!form.FechaEmision) {
        errors.FechaEmision = "Debes seleccionar la fecha de emisión";
        errors.error = true;
    }
    if (!form.FechaVencimiento) {
        errors.FechaVencimiento = "Debes seleccionar la fecha de vencimiento";
        errors.error = true;
    }
    if (!form.CodigoPeriodicidad === 0) {
        errors.CodigoPeriodicidad = "Debes seleccionar una periodicidad";
        errors.error = true;
    }
    if (!form.FechaUltimoPagoInteres) {
        errors.FechaUltimoPagoInteres = "Debes seleccionar la fecha del último pago de interés";
        errors.error = true;
    }
    if (!form.FechaProximoPagoInteres) {
        errors.FechaProximoPagoInteres = "Debes seleccionar la fecha del próximo pago de interés";
        errors.error = true;
    }
    if (!form.FechaUltimoInteresAcumulado) {
        errors.FechaUltimoInteresAcumulado = "Debes seleccionar la fecha del último interés acumulado";
        errors.error = true;
    }
    if (!form.CodigoEstado === 0) {
        errors.CodigoEstado = "Debes seleccionar un estado";
        errors.error = true;
    }
    if (!form.TasaBruta) {
        errors.TasaBruta = "Debes ingresar un tasa bruta";
        errors.error = true;
    }
    if (!form.SaldoValorNominal) {
        errors.SaldoValorNominal = "Debes ingresar el saldo nominal";
        errors.error = true;
    }
    if (!form.PorcentajeValorVenta) {
        errors.PorcentajeValorVenta = "Debes ingresar el porcentaje del valor de venta";
        errors.error = true;
    }
    if (!form.PorcentajeValorMercado) {
        errors.PorcentajeValorMercado = "Debes ingresar el porcentaje del valor de mercado";
        errors.error = true;
    }
    if (!form.AmortizacionAcumalada) {
        errors.AmortizacionAcumlada = "Debes ingresar la amortización acumulada";
        errors.error = true;
    }
    if (!form.ValuacionAcumulada) {
        errors.ValuacionAcumulada = "Debes ingresar la valoración acumulada";
        errors.error = true;
    }
    if (!form.ValorMercado) {
        errors.ValorMercado = "Debes ingresar el valor del mercado";
        errors.error = true;
    }
    if (!form.ValorContable) {
        errors.ValorContable = "Debes ingresar el valor contable";
        errors.error = true;
    }
    if (!form.DiasInteresPorPagar) {
        errors.DiasInteresPorPagar = "Debes ingresar los días acumulados";
        errors.error = true;
    }
    if (!form.InteresPorPagar) {
        errors.InteresPorPagar = "Debes ingresar el interés por pagar";
        errors.error = true;
    }
    if (!form.Tir) {
        errors.Tir = "Debes ingresar el TIR";
        errors.error = true;
    }
    if (!form.DiasInteresVencimiento) {
        errors.DiasInteresVencimiento = "Debes ingresar los días al vencimiento";
        errors.error = true;
    }
    return errors;
  };

  export const PasMaestro = () => {
    const userData = JSON.parse(localStorage.getItem("userLogged"));
    const styles = useStyles();
    const { rowUpdate } = useLocation();
    const [value, setValue] = useState(new Date());
    let usehistory = useHistory();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const initialForm = {
        CodigoEmpresa: userData.codigoEmpresa,
        NombreEmpresa: userData.nombreEmpresa,
        Id: userData.id,
        NombreUsuario: userData.userName,
        CodigoPortafolio: 0,
        NumeroInversion: "",
        CodigoAportante: "",
        CodigoInstrumento: "",
        CodigoMoneda: 0,
        Isin: "",
        Serie: "",
        FechaEmision: "",
        FechaVencimiento: "",
        CodigoPeriodicidad: 0,
        FechaUltimoPagoInteres: "",
        FechaProximoPagoInteres: "",
        FechaUltimoInteresAcumulado: "",
        CodigoEstado: 0,
        TasaBruta: "",
        SaldoValorNominal: "",
        PorcentajeValorVenta: "",
        PorcentajeValorMercado: "",
        AmortizacionAcumulada: "",
        ValuacionAcumulada: "",
        ValorMercado: "",
        ValorContable: "",
        DiasInteresPorPagar: "",
        InteresPorPagar: "",
        Tir: "",
        DiasInteresVencimiento: "",
      };

      const { Data } = useGetData("PasAportante/GetPasAportantes");
      const [columns, setColumns] = useState([
        { title: "Aportante", field: "CodigoAportante" },
        {
          title: "Nombre",
          field: "Nombre",
        },
      ]);

      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };

      const selectItem = (rowUpdate) => {
        console.log(rowUpdate);
        setForm({
          ...form,
          CodigoAportante: rowUpdate.CodigoAportante,
        });
        handleClose();
      };

      useEffect(() => {
        if (rowUpdate) {
          console.log(rowUpdate);
          setForm(rowUpdate);
        } else {
          setForm(initialForm);
        }
      }, [rowUpdate]);
    
      const { form, errors, handleChange, handleBlur, setForm } = useForm(
        initialForm,
        validationsForm
      );
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (form.CodigoPortafolio === 0) {
          postAction("PasMaestro/PostPasMaestro", form, userLoggedToken).then(
            (res) => {
              if (res.isSuccess) {
                setForm(initialForm);
                return alert("El maestro fue creado con exito");
              } else {
                return alert("El maestro no fue creado");
              }
            }
          );
        } else {
          putAction("PasMaestro/PutPasMaestro", form, userLoggedToken).then(
            (res) => {
              if (res.isSuccess) {
                return alert("El maestro fue actualizado con exito");
              } else {
                return alert("El maestro no fue actualizado");
              }
            }
          );
        }
      };

      return (
        <div>
          <Grid container justifyContent="center">
            <Paper elevation={3} className={styles.paper}>
              <Box container sx={{ maxWidth: "100%", "& button": { m: 1 } }}>
                <Grid container spacing={2} justifyContent="center" pl={5} pr={5}>
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    mt={5}
                    mb={5}
                  >
                    <Typography component="h1" variant="h6" noWrap>
                      Maestro
                    </Typography>
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="CodigoEmpresa"
                      name="CodigoEmpresa"
                      label="Empresa"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={userData.nombreEmpresa}
                      className={styles.inpuntEmpresa}
                      size="small"
                      disabled
                    ></TextField>
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <FormControl size="small" className={styles.listas}>
                      <SelectCross
                        form={form}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        title="Portafolio"
                        controller={"PasPortafolio/GetPasPortafolios"}
                        name="CodigoPortafolio"
                        field="Descripcion"
                      />
                    </FormControl>
                    {errors.CodigoPortafolio && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.CodigoPortafolio}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="NumeroInversion"
                      name="NumeroInversion"
                      label="Número Inversión"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.NumeroInversion}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                    {errors.NumeroInversion && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.NumeroInversion}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3}>
                <TextField
                  onClick={handleOpen}
                  id="CodigoAportante"
                  name="CodigoAportante"
                  label="Aportante"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoAportante}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  className={styles.inpunt}
                />
              </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <FormControl size="small" className={styles.listas}>
                      <SelectCross
                        form={form}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        title="Instrumento"
                        controller={"PasInstrumento/GetPasInstrumentos"}
                        name="CodigoInstrumento"
                        field="Descripcion"
                      />
                    </FormControl>
                    {errors.CodigoInstrumento && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.CodigoInstrumento}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <FormControl size="small" className={styles.listas}>
                      <SelectCross
                        form={form}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        title="Moneda"
                        controller={"ParMonedum/GetParMonedas"}
                        name="CodigoMoneda"
                        field="Descripcion"
                      />
                    </FormControl>
                    {errors.CodigoMoneda && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.CodigoMoneda}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="Isin"
                      name="Isin"
                      label="Isin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.Isin}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                    {errors.Isin && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.Isin}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="Serie"
                      name="Serie"
                      label="Serie"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.Serie}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                    {errors.Serie && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.Serie}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} className={styles.grid}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        id="FechaEmision"
                        inputFormat="dd/MM/yyyy"
                        label="Fecha Emisión"
                        onChange={(newvalue) => {
                          setValue(newvalue);
                          form.FechaEmision = newvalue;
                        }}
                        onBlur={handleBlur}
                        value={form.FechaEmision}
                        renderInput={(params) => (
                          <TextField
                            type="datetime-local"
                            size="small"
                            id="FechaEmision"
                            name="FechaEmision"
                            onBlur={handleBlur}
                            value={form.FechaEmision}
                            onChange={handleChange}
                            {...params}
                          />
                        )}
                      ></DesktopDatePicker>
                    </LocalizationProvider>
                    {errors.FechaEmision && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.FechaEmision}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} className={styles.grid}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        id="FechaVencimiento"
                        inputFormat="dd/MM/yyyy"
                        label="Fecha Vencimiento"
                        onChange={(newvalue) => {
                          setValue(newvalue);
                          form.FechaVencimiento = newvalue;
                        }}
                        onBlur={handleBlur}
                        value={form.FechaVencimiento}
                        renderInput={(params) => (
                          <TextField
                            type="datetime-local"
                            size="small"
                            id="FechaVencimiento"
                            name="FechaVencimiento"
                            onBlur={handleBlur}
                            value={form.FechaVencimiento}
                            onChange={handleChange}
                            {...params}
                          />
                        )}
                      ></DesktopDatePicker>
                    </LocalizationProvider>
                    {errors.FechaVencimiento && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.FechaVencimiento}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <FormControl size="small" className={styles.listas}>
                      <SelectCross
                        form={form}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        title="Periodicidad"
                        controller={"ParPeriodicidad/GetParPeriodicidades"}
                        name="CodigoPeriodicidad"
                        field="Descripcion"
                      />
                    </FormControl>
                    {errors.CodigoPeriodicidad && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.CodigoPeriodicidad}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} className={styles.grid}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        id="FechaUltimoPagoInteres"
                        inputFormat="dd/MM/yyyy"
                        label="Último Pago Interés"
                        onChange={(newvalue) => {
                          setValue(newvalue);
                          form.FechaUltimoPagoInteres = newvalue;
                        }}
                        onBlur={handleBlur}
                        value={form.FechaUltimoPagoInteres}
                        renderInput={(params) => (
                          <TextField
                            type="datetime-local"
                            size="small"
                            id="FechaUltimoPagoInteres"
                            name="FechaUltimoPagoInteres"
                            onBlur={handleBlur}
                            value={form.FechaUltimoPagoInteres}
                            onChange={handleChange}
                            {...params}
                          />
                        )}
                      ></DesktopDatePicker>
                    </LocalizationProvider>
                    {errors.FechaUltimoPagoInteres && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.FechaUltimoPagoInteres}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} className={styles.grid}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        id="FechaProximoPagoInteres"
                        inputFormat="dd/MM/yyyy"
                        label="Próximo Pago Interes"
                        onChange={(newvalue) => {
                          setValue(newvalue);
                          form.FechaProximoPagoInteres = newvalue;
                        }}
                        onBlur={handleBlur}
                        value={form.FechaProximoPagoInteres}
                        renderInput={(params) => (
                          <TextField
                            type="datetime-local"
                            size="small"
                            id="FechaProximoPagoInteres"
                            name="FechaProximoPagoInteres"
                            onBlur={handleBlur}
                            value={form.FechaProximoPagoInteres}
                            onChange={handleChange}
                            {...params}
                          />
                        )}
                      ></DesktopDatePicker>
                    </LocalizationProvider>
                    {errors.FechaProximoPagoInteres && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.FechaProximoPagoInteres}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} className={styles.grid}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        id="FechaUltimoInteresAcumulado"
                        inputFormat="dd/MM/yyyy"
                        label="Ultimo Interés Acumulado"
                        onChange={(newvalue) => {
                          setValue(newvalue);
                          form.FechaUltimoInteresAcumulado = newvalue;
                        }}
                        onBlur={handleBlur}
                        value={form.FechaUltimoInteresAcumulado}
                        renderInput={(params) => (
                          <TextField
                            type="datetime-local"
                            size="small"
                            id="FechaUltimoInteresAcumulado"
                            name="FechaUltimoInteresAcumulado"
                            onBlur={handleBlur}
                            value={form.FechaUltimoInteresAcumulado}
                            onChange={handleChange}
                            {...params}
                          />
                        )}
                      ></DesktopDatePicker>
                    </LocalizationProvider>
                    {errors.FechaUltimoInteresAcumulado && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.FechaUltimoInteresAcumulado}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <FormControl size="small" className={styles.listas}>
                      <SelectCross
                        form={form}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        title="Estado"
                        controller={"ParEstado/GetParEstados"}
                        name="CodigoEstado"
                        field="Descripcion"
                      />
                    </FormControl>
                    {errors.CodigoEstado && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.CodigoEstado}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="TasaBruta"
                      name="TasaBruta"
                      label="Tasa Bruta"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.TasaBruta}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                    {errors.TasaBruta && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.TasaBruta}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="SaldoValorNominal"
                      name="SaldoValorNominal"
                      label="Saldo Nominal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.SaldoValorNominal}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                    {errors.SaldoValorNominal && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.SaldoValorNominal}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="PorcentajeValorVenta"
                      name="PorcentajeValorVenta"
                      label="Porcentaje Valor Venta"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.PorcentajeValorVenta}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.PorcentajeValorVenta && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.PorcentajeValorVenta}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="PorcentajeValorMercado"
                      name="PorcentajeValorMercado"
                      label="Porcentaje Valor Mercado"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.PorcentajeValorMercado}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.PorcentajeValorMercado && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.PorcentajeValorMercado}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="AmortizacionAcumulada"
                      name="AmortizacionAcumulada"
                      label="Amortización Acumulada"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.AmortizacionAcumulada}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.AmortizacionAcumulada && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.AmortizacionAcumulada}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="ValuacionAcumulada"
                      name="ValuacionAcumulada"
                      label="Valoración Acumulada"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.ValuacionAcumulada}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.ValuacionAcumulada && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.ValuacionAcumulada}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="ValorMercado"
                      name="ValorMercado"
                      label="Valor Mercado"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.ValorMercado}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.ValorMercado && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.ValorMercado}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="ValorContable"
                      name="ValorContable"
                      label="Valor Contable"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.ValorContable}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.ValorContable && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.ValorContable}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="DiasInteresPorPagar"
                      name="DiasInteresPorPagar"
                      label="Días Acumulados"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.DiasInteresPorPagar}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.DiasInteresPorPagar && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.DiasInteresPorPagar}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="InteresPorPagar"
                      name="InteresPorPagar"
                      label="Interés Por Pagar"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.InteresPorPagar}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.InteresPorPagar && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.InteresPorPagar}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="Tir"
                      name="Tir"
                      label="TIR"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.Tir}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.Tir && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.Tir}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="DiasInteresVencimiento"
                      name="DiasInteresVencimiento"
                      label="Días al vencimiento"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.DiasInteresVencimiento}
                      className={styles.inpuntEmpresa}
                      size="small"
                    ></TextField>
                     {errors.DiasInteresVencimiento && (
                      <FormHelperText id="my-helper-text" error>
                        {errors.DiasInteresVencimiento}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={3} container justifyContent="center">
                    <TextField
                      id="NombreUsuario"
                      name="NombreUsuario"
                      label="Usuario"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={userData.userName}
                      className={styles.inpuntEmpresa}
                      size="small"
                      disabled
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} container justifyContent="end">
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => {
                        usehistory.push(`./PasMaestroView`);
                      }}
                    >
                      Regresar
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      disabled={errors.error ? true : false}
                    >
                      {rowUpdate ? "Actualizar" : "Agregar"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <MaterialTable
              title="Aportante"
              columns={columns}
              data={Data}
              options={{
                rowStyle: {
                  fontSize: 12,
                },
                headerStyle: {
                  backgroundColor: "#898883",
                  color: "#FFF",
                  fontSize: 13,
                },
              }}
              actions={[
                {
                  icon: "add",
                  tooltip: "Seleccionar Aportante",
                  onClick: (event, rowData) => selectItem(rowData, false),
                },
              ]}
            />
          </div>
        </Box>
      </Modal>
        </div>
      );
    };
    