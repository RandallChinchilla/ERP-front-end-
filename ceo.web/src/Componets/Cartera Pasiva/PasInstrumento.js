import { Divider, InputAdornment, makeStyles } from "@material-ui/core";
import {
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { postAction } from "../../Helpers/postHelper";
import { useForm } from "../../Hooks/useForm";
import { SelectCross } from "../Listas/SelectCross";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"


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
}));

const validationsForm = (form) => {
  let errors = {};
  if (!form.CodigoEmpresa) {
    errors.CodigoEmpresa = "Debe ingresar una empresa";
    errors.error = true;
  }
  if (!form.CodigoInstrumento) {
    errors.CodigoInstrumento = "Debe ingresar el código instrumento";
    errors.error = true;
  }
  if (!form.Descripcion) {
    errors.Descripcion = "Debe escribir una descripcion";
    errors.error = true;
  }
  if (!form.Isin) {
    errors.Isin = "Debe ingresar el Isin";
    errors.error = true;
  }
  if (!form.Serie) {
    errors.Serie = "Debe ingresar la serie";
    errors.error = true;
  }
  if (!form.FechaEmision) {
    errors.FechaEmision = "Debe seleccionar la fecha de emisión";
    errors.error = true;
  }
  if (!form.FechaVencimiento) {
    errors.FechaVencimiento = "Debe seleccionar la fecha de vencimiento";
    errors.error = true;
  }
  if (!form.FechaUltimoPagoInteres) {
    errors.FechaUltimoPagoInteres = "Debe seleccionar la fecha del último pago de interés";
    errors.error = true;
  }
  if (!form.FechaProximoPagoInteres) {
    errors.FechaProximoPagoInteres = "Debe seleccionar la fecha del próximo pago de interés";
    errors.error = true;
  }
  if (!form.TasaBruta) {
    errors.TasaBruta = "Debe ingresar la tasa bruta";
    errors.error = true;
  }
  if (!form.TasaNeta) {
    errors.TasaNeta = "Debe ingresar la tasa neta";
    errors.error = true;
  }
  if (!form.Divisor) {
    errors.Divisor = "Debe ingresar el divisor tasa";
    errors.error = true;
  }
  if (!form.Multiplicador) {
    errors.Multiplicador = "Debe ingresar el multiplicador tasa";
    errors.error = true;
  }
  if (!form.CodigoMoneda) {
    errors.CodigoMoneda = "Debe seleccionar la moneda";
    errors.error = true;
  }
  if (!form.CodigoPeriodicidadPagoInteres) {
    errors.CodigoPeriodicidadPagoInteres = "Debe seleccionar la periodicidad del pago de interés";
    errors.error = true;
  }
  if (!form.CodigoPeriodicidadRevisionTasa) {
    errors.CodigoPeriodicidadRevisionTasa = "Debe seleccionar la periodicidad de la revisión de tasa";
    errors.error = true;
  }
  return errors;
};

const PasInstrumento = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editPasInstrumento"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(rowEdit ? true : false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    Consecutivo: rowEdit ? rowEdit.Consecutivo : "",
    CodigoEmpresa: rowEdit ? rowEdit.CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: rowEdit ? rowEdit.NombreEmpresa: userData.nombreEmpresa,     
    CodigoInstrumento: rowEdit ? rowEdit.CodigoInstrumento : "",
    Descripcion: rowEdit ? rowEdit.Descripcion : "",
    Isin: rowEdit ? rowEdit.Isin : "",
    Serie: rowEdit ? rowEdit.Serie : "",
    FechaEmision: rowEdit ? rowEdit.FechaEmision : "",
    FechaVencimiento: rowEdit ? rowEdit.FechaVencimiento : "",
    FechaUltimoPagoInteres: rowEdit ? rowEdit.FechaUltimoPagoInteres : "",
    FechaProximoPagoInteres: rowEdit ? rowEdit.FechaProximoPagoInteres : "",
    TasaBruta: rowEdit ? rowEdit.TasaBruta : "",
    TasaNeta: rowEdit ? rowEdit.TasaNeta : "",
    Divisor: rowEdit ? rowEdit.Divisor : "",
    Multiplicador: rowEdit ? rowEdit.Multiplicador : "",
    IndicadorTasaVariable: rowEdit ? rowEdit.IndicadorTasaVariable : "",
    IndicadorCapitalizable: rowEdit ? rowEdit.IndicadorCapitalizable : "",
    IndicadorGenerico: rowEdit ? rowEdit.IndicadorGenerico : "",
    CodigoMoneda: rowEdit ? rowEdit.CodigoMoneda : "",
    CodigoPeriodicidadPagoInteres: rowEdit ? rowEdit.CodigoPeriodicidadPagoInteres : "",
    CodigoPeriodicidadRevisionTasa: rowEdit ? rowEdit.CodigoPeriodicidadRevisionTasa : "",
    Usuario: rowEdit ? rowEdit.Usuario : userData.userName,
  };


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

  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );

//   const selectItem = (rowUpdate) => {
//     console.log(rowUpdate);
//     setForm({
//       ...form,
//       NumeroCliente: rowUpdate.NumeroCliente,
//       Nombre: rowUpdate.Nombre,
//       CorreoElectronico: rowUpdate.CorreoElectronico,
//       TelefonoCelular: rowUpdate.TelefonoCelular,
//       Direccion: rowUpdate.Direccion,
//     });
//     handleClose();
//   };

  //+++++++add Encabezado de Factura+++++++++
  const addRow = () => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    const addRowRequest = {
      codigoEmpresa: form.CodigoEmpresa,
      codigoInstrumento: form.CodigoInstrumento,
      descripcion: form.Descripcion,
      isin: form.Isin,
      serie: form.Serie,
      fechaEmision: form.FechaEmision,
      fechaVencimiento: form.FechaVencimiento,
      fechaUltimoPagoInteres: form.FechaUltimoPagoInteres,
      fechaProximoPagoInteres: form.FechaProximoPagoInteres,
      tasaBruta: form.TasaBruta,
      tasaNeta: form.TasaNeta,
      divisor: form.Divisor,
      multiplicador: form.Multiplicador,
      indicadorTasaVariable: form.IndicadorCapitalizable,
      indicadorCapitalizable: form.IndicadorCapitalizable,
      indicadorGenerico: form.IndicadorGenerico,
      observaciones: form.Observaciones,
      codigoMoneda: form.CodigoMoneda,
      codigoPeriodicidadPagoInteres: form.CodigoPeriodicidadPagoInteres,
      codigoPeriodicidadRevisionTasa: form.CodigoPeriodicidadRevisionTasa,
      id: userData.id,
    };

    console.log(addRowRequest);
    postAction(
      "PasInstrumento/PostPasInstrumento",
      addRowRequest,
      userLoggedToken
    ).then((response) => {
      if (response.status === 200) {
        setShow(true);
        // console.log("Registro agregado");
      } else {
        console.log("No se pudo agregar el registro");
      }
    });
  };

  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box container sx={{ maxWidth: "100%" }}>
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
                Instrumentos
                </Typography>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoEmpresa"
                  name="CodigoEmpresa"
                  label="Empresa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NombreEmpresa}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.CodigoEmpresa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEmpresa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoInstrumento"
                  name="CodigoInstrumento"
                  label="Código Instrumento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoInstrumento}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoInstrumento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoInstrumento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Descripcion"
                  name="Descripcion"
                  label="Descripción"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Descripcion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Descripcion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Descripcion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
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
              <Grid item xs={6} container justifyContent="center">
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
                    label="Fecha Emisión"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaEmision = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaEmision}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
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
                    label="Fecha Vencimiento"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaVencimiento = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaVencimiento}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
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
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaUltimoPagoInteres"
                    label="Fecha Último Pago Interés"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaUltimoPagoInteres = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaUltimoPagoInteres}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
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
                    label="Fecha Próximo Pago Interés"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaProximoPagoInteres = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaProximoPagoInteres}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
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
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TasaBruta"
                  name="TasaBruta"
                  label="TasaBruta"
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
                  id="TasaNeta"
                  name="TasaNeta"
                  label="Tasa Neta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TasaNeta}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TasaNeta && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TasaNeta}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Divisor"
                  name="Divisor"
                  label="Divisor Tasa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Divisor}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Divisor && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Divisor}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Multiplicador"
                  name="Multiplicador"
                  label="Multiplicador Tasa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Multiplicador}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Multiplicador && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Multiplicador}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
              <FormControl component="fieldset">
               <FormGroup>
               <FormControlLabel control={<Checkbox />} 
                  id="IndicadorTasaVariable"
                  name="IndicadorTasaVariable"
                  label="Indicador Tasa Variable"
                  labelPlacement="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorTasaVariable}
                  className={styles.inpuntEmpresa}
                  size="small" />
               </FormGroup>
               </FormControl>
                {errors.IndicadorTasaVariable && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorTasaVariable}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
              <FormControl component="fieldset">
               <FormGroup>
               <FormControlLabel control={<Checkbox />} 
                  id="IndicadorCapitalizable"
                  name="IndicadorCapitalizable"
                  label="Indicador Capitalizable"
                  labelPlacement="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorCapitalizable}
                  className={styles.inpuntEmpresa}
                  size="medium" />
               </FormGroup>
               </FormControl>
                {errors.IndicadorCapitalizable && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorCapitalizable}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
              <FormControl component="fieldset">
               <FormGroup>
               <FormControlLabel control={<Checkbox />} 
                  id="IndicadorGenerico"
                  name="IndicadorGenerico"
                  label="Indicador Génerico"
                  labelPlacement="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorGenerico}
                  className={styles.inpuntEmpresa}
                  size="medium" />
               </FormGroup>
               </FormControl>
                {errors.IndicadorGenerico && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorGenerico}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <TextField
                  id="Observaciones"
                  name="Observaciones"
                  label="Observaciones"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Observaciones}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Observaciones && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Observaciones}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Moneda"}
                    controller={"ParMonedum/GetParMonedas"}
                    name={"CodigoMoneda"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoMoneda && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoMoneda}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Periodicidad Pago Interés"}
                    controller={"ParPeriodicidad/GetParPeriodicidades"}
                    name={"CodigoPeriodicidad"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoPeriodicidadPagoInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPeriodicidadPagoInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Periodicidad Revisión Tasa"}
                    controller={"ParPeriodicidad/GetParPeriodicidades"}
                    name={"CodigoPeriodicidad"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoPeriodicidadRevisionTasa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPeriodicidadRevisionTasa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Usuario"
                  name="Usuario"
                  label="Usuario"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Usuario}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Usuario && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Usuario}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} container justifyContent="end">
                <Button onClick={addRow} variant="contained">Agregar</Button>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Divider />
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
        </Box>
      </Modal>
    </div>
  );
};

export default PasInstrumento;