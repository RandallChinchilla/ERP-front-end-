import { InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { postAction } from "../../../Helpers/postHelper";
import { putAction } from "../../../Helpers/putHelper";
import { SelectCross } from "../../Listas/SelectCross";
import { SelectAportanteModal } from "../../Modales/SelectAportanteModal";
import { SelectInstrumentoModal } from "../../Modales/SelectInstrumentoModal";
import * as Yup from "yup";
import formJson from "../Data/pasMaestroData.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { SelectList } from "../../CrossComponets/SelectList";

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
  textfield: { width: "100%" },
  gridContainer: { paddingRight: 5, paddingLeft: 5 },
  button: { margin: "1px" },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
}));

const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

const initialValues = {};
const requiredFields = {};

export const PasMaestro = () => {
  for (const input of formJson) {
    initialValues[input.name] = input.value;
    let shema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        shema = shema.required("Este campo es requerido");
      }
    }
    requiredFields[input.name] = shema;
  }

  const validationshema = Yup.object({ ...requiredFields });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationshema),
  });
  

  //const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const { rowUpdate } = useLocation();
  const [, setValue] = useState(new Date());
  let usehistory = useHistory();
  const [openAportante, setOpenAportante] = useState(false);
  const [openInstrumento, setOpenInstrumento] = useState(false);
  const handleOpenAportante = () => setOpenAportante(true);
  const handleCloseAportante = () => setOpenAportante(false);
  const handleOpenInstrumento = () => setOpenInstrumento(true);
  const handleCloseInstrumento = () => setOpenInstrumento(false);
  // useEffect(() => {
  //   if (rowUpdate) {
  //     console.log(rowUpdate);
  //     setForm(rowUpdate);
  //   } else {
  //     setForm(initialForm);
  //   }
  // }, [rowUpdate]);

  // const { form, handleChange, handleBlur, setForm } = useForm(
  //   initialForm,
  //   validationsForm
  // );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (form.NumeroInversion === 0) {
  //     postAction("PasMaestro/PostPasMaestro", form, userLoggedToken).then(
  //       (res) => {
  //         if (res.isSuccess) {
  //           setForm(initialForm);
  //           return alert("El maestro fue creado con exito");
  //         } else {
  //           return alert("El maestro no fue creado");
  //         }
  //       }
  //     );
  //   } else {
  //     putAction("PasMaestro/PutPasMaestro", form, userLoggedToken).then(
  //       (res) => {
  //         if (res.isSuccess) {
  //           return alert("El maestro fue actualizado con exito");
  //         } else {
  //           return alert("El maestro no fue actualizado");
  //         }
  //       }
  //     );
  //   }
  // };
  const onSubmit = (data) => {
    // handleSubmitLogin(data);
    console.log(data)
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
              <form
              className={styles.form}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              >
                 <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  pl={5}
                  pr={5}
                >
                  {formJson.map(
                    ({
                      type,
                      typeInput,
                      name,
                      placeholder,
                      label,
                      xs,
                      controller,
                      fieldName,
                      data,
                      inputFormat,
                    }) => {
                      switch(type) {
                        case "text":
                          return(
                            <Grid
                            key={name}
                            item
                            xs={xs}
                            container
                            justifyContent="center"
                            >
                              <TextField
                              label={label}
                              {...register(name)}
                              type={typeInput}
                              placeholder={placeholder}
                              size="small"
                              // fullWidth="true"
                              className={styles.textfield}
                              />
                              {errors[name] && (
                              <FormHelperText id="my-helper-text" error>
                                {errors[name]["message"]}
                              </FormHelperText>
                            )}
                            </Grid>
                          );
                          case "select":
                            return (
                              <Controller
                                key={name}
                                name={name}
                                control={control}
                                render={({ field }) => (
                                  <SelectList
                                  name={name}
                                  label={label}
                                  field={field}
                                  controller={controller}
                                  fieldName={fieldName}
                                  xs={xs}
                                  errors={errors}
                                  dataJson={data}/>
                                )}
                              ></Controller>
                            );
                            case "date":
                              return (
                                <Grid
                                  item
                                  xs={xs}
                                  className={styles.grid}
                                  key={name}
                                >
                                  <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                  >
                                    <Controller
                                      name={name}
                                      control={control}
                                      render={({ field }) => (
                                        <DesktopDatePicker
                                          label={label}
                                          inputFormat={inputFormat}
                                          {...field}
                                          renderInput={(params) => (
                                            <TextField size="small" {...params} />
                                          )}
                                        />
                                      )}
                                    ></Controller>
                                  </LocalizationProvider>
                                  {errors[name] && (
                                    <FormHelperText id="my-helper-text" error>
                                      {errors[name]["message"]}
                                    </FormHelperText>
                                  )}
                                </Grid>
                              );
                      }
                    })}
                  <Grid item xs={12} container justifyContent="end">
                    <Button color="secondary" variant="contained">
                      Regresar
                    </Button>
                    <Button color="primary" type="submit" variant="contained">
                      Agregar
                    </Button>
                  </Grid>
                </Grid>
                
              </form>
              {/* <Grid item xs={6} container justifyContent="center">
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
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth={true}
                  onClick={handleOpenAportante}
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
              <Grid item xs={3}>
                <TextField
                  fullWidth={true}
                  onClick={handleOpenInstrumento}
                  id="CodigoInstrumento"
                  name="CodigoInstrumento"
                  label="Instrumento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoInstrumento}
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
                    title="Moneda"
                    controller={"ParMonedum/GetParMonedas"}
                    name="CodigoMoneda"
                    field="Descripcion"
                    disabled
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
                  disabled
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
                  disabled
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
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
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
                <TextField
                  id="TasaNeta"
                  name="TasaNeta"
                  label="Tasa Neta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TasaNeta}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                ></TextField>
                {errors.TasaNeta && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TasaNeta}
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
                  disabled
                ></TextField>
                {errors.TasaBruta && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TasaBruta}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="ValorNominal"
                  name="ValorNominal"
                  label="Valor Nominal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.ValorNominal}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.ValorNominal && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.ValorNominal}
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
              <Grid item xs={6} container justifyContent="center">
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
                  Transacción
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./PasMaestroView`);
                  }}
                >
                  Interés
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./PasMaestroView`);
                  }}
                >
                  Enviar Tabla Interés
                </Button>
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
                  id="AgregarMaestro"
                  name="AgregarMaestro"
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={errors.error ? true : false}
                >
                  {rowUpdate ? "Actualizar" : "Agregar"}
                </Button>
              </Grid> */}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
