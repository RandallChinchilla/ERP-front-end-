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
  if (!form.CodigoTipo) {
    errors.CodigoTipo = "Debe ingresar el código tipo";
    errors.error = true;
  }
  if (!form.FechaHora) {
    errors.FechaHora = "Debe seleccionar la fecha y hora";
    errors.error = true;
  }
  if (!form.Tasa) {
    errors.Tasa = "Debe ingresar la tasa";
    errors.error = true;
  }
  if (!form.TasaMaxima) {
    errors.TasaMaxima = "Debe ingresar la tasa máxima";
    errors.error = true;
  }
  if (!form.PorcentajeISR) {
    errors.PorcentajeISR = "Debe ingresar el porcentaje del ISR";
    errors.error = true;
  }
  if (!form.CodigoEstado) {
    errors.CodigoEstado = "Debe seleccionar el estado";
    errors.error = true;
  }
  return errors;
};

const PasTasaPlazo = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editPasTasaPlazo"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(rowEdit ? true : false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,     
    CodigoTipo: rowEdit ? rowEdit.CodigoTipo : "",
    FechaHora: rowEdit ? rowEdit.FechaHora : "",
    Tasa: rowEdit ? rowEdit.Tasa : "",
    TasaMaxima: rowEdit ? rowEdit.TasaMaxima : "",
    PorcentajeISR: rowEdit ? rowEdit.PorcentajeISR : "",
    CodigoEstado: rowEdit ? rowEdit.CodigoEstado : "",
    Usuario: userData.userName,
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
  //+++++++add Encabezado de Factura+++++++++
  const addRow = () => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    const addRowRequest = {
      codigoEmpresa: form.CodigoEmpresa,
      codigoTipo: form.CodigoTipo,
      fechaHora: form.FechaHora,
      tasa: form.Tasa,
      tasaMaxima: form.TasaMaxima,
      porcentajeISR: form.PorcentajeISR,
      codigoEstado: form.FechaVencimiento,
      usuario: form.Usuario,
      id: userData.id,
    };

    console.log(addRowRequest);
    postAction(
      "PasTasaPlazo/PostPasTasaPlazo",
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
                Tasa Plazo
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="center">
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
                <TextField
                  id="CodigoTipo"
                  name="CodigoTipo"
                  label="Código Tipo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoTipo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoTipo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoTipo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaHora"
                    label="Fecha Hora"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaHora = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaHora}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
                        size="small"
                        id="FechaHora"
                        name="FechaHora"
                        onBlur={handleBlur}
                        value={form.FechaHora}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaHora && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaHora}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Tasa"
                  name="Tasa"
                  label="Tasa Bruta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Tasa}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Tasa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Tasa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="TasaMaxima"
                  name="TasaMaxima"
                  label="Tasa Bruta Máxima"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TasaMaxima}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TasaMaxima && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TasaMaxima}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="PorcentajeISR"
                  name="PorcentajeISR"
                  label="Porcentaje ISR"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.PorcentajeISR}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.PorcentajeISR && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.PorcentajeISR}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectCross
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    title={"Código Estado"}
                    controller={"ParEstado/GetParEstados"}
                    name={"CodigoEstado"}
                    field={"Descripcion"}
                  />
                </FormControl>
                {errors.CodigoEstado && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEstado}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="Usuario"
                  name="Usuario"
                  label="Usuario"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={userData.userName}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                >
                  {userData.userName}
                </TextField>
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

export default PasTasaPlazo;