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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
  if (!form.CodigoAportante) {
    errors.CodigoAportante = "Debe ingresar el código aportante";
    errors.error = true;
  }
  if (!form.CodigoTipoIdentificacion) {
    errors.CodigoTipoIdentificacion =
      "Debe ingresar el tipo de indentificación";
    errors.error = true;
  }
  if (!form.NumeroId) {
    errors.NumeroId = "Debe ingresar el número Id";
    errors.error = true;
  }
  if (!form.Nombre) {
    errors.Nombre = "Debe ingresar el nombre";
    errors.error = true;
  }
  if (!form.Apellido1) {
    errors.Apellido1 = "Debe ingresar el primer apellido";
    errors.error = true;
  }
  if (!form.Apellido2) {
    errors.Apellido2 = "Debe ingresar el segundo apellido";
    errors.error = true;
  }
  if (!form.FechaVencimientoId) {
    errors.FechaVencimientoId = "Debe seleccionar la fecha del vencimiento Id";
    errors.error = true;
  }
  if (!form.eMail) {
    errors.eMail = "Debe ingresar el correo electrónico";
    errors.error = true;
  }
  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debe ingresar el teléfono celular";
    errors.error = true;
  }
  if (!form.CodigoEstado) {
    errors.CodigoEstado = "Debe seleccionar el estado";
    errors.error = true;
  }
  if (!form.Usuario) {
    errors.Usuario = "Debe ingresar el usuario";
    errors.error = true;
  }
  return errors;
};

const PasAutorizado = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editPasAutorizado"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(rowEdit ? true : false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoAportante: rowEdit ? rowEdit.CodigoAportante : "",
    CodigoTipoIdentificacion: rowEdit ? rowEdit.CodigoTipoIdentificacion : "",
    NumeroId: rowEdit ? rowEdit.NumeroId : "",
    Nombre: rowEdit ? rowEdit.Nombre : "",
    Apellido1: rowEdit ? rowEdit.Apellido1 : "",
    Apellido2: rowEdit ? rowEdit.Apellido2 : "",
    FechaVencimientoId: rowEdit ? rowEdit.FechaVencimientoId : "",
    eMail: rowEdit ? rowEdit.eMail : "",
    TelefonoCelular: rowEdit ? rowEdit.TelefonoCelular : "",
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
      codigoEmpresa: userData.codigoEmpresa,
      codigoAportante: form.CodigoAportante,
      codigoTipoIdentificacion: form.CodigoTipoIdentificacion,
      numeroId: form.NumeroId,
      nombre: form.Nombre,
      apellido1: form.Apellido1,
      apellido2: form.Apellido2,
      fechaVencimientoId: form.FechaVencimientoId,
      eMail: form.eMail,
      telefonoCelular: form.TelefonoCelular,
      codigoEstado: form.CodigoEstado,
      id: userData.id,
    };

    console.log(addRowRequest);
    postAction(
      "PasAutorizado/PostPasAutorizado",
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
                  Autorizado
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
                <TextField
                  id="CodigoAportante"
                  name="CodigoAportante"
                  label="Código Aportante"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoAportante}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoAportante && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoAportante}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoTipoIdentificacion"
                  name="CodigoTipoIdentificacion"
                  label="Código Tipo Identificación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoTipoIdentificacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoTipoIdentificacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoTipoIdentificacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroId"
                  name="NumeroId"
                  label="Número Id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroId}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroId && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroId}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Nombre"
                  name="Nombre"
                  label="Nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Nombre}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Nombre && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Nombre}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Apellido1"
                  name="Apellido1"
                  label="Primer Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Apellido1}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Apellido1 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Apellido1}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Apellido2"
                  name="Apellido2"
                  label="Segundo Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Apellido2}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Apellido2 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Apellido2}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaVencimientoId"
                    label="Fecha Vencimiento Id"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaVencimientoId = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaVencimientoId}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
                        size="small"
                        id="FechaVencimientoId"
                        name="FechaVencimientoId"
                        onBlur={handleBlur}
                        value={form.FechaVencimientoId}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaVencimientoId && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaVencimientoId}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="eMail"
                  name="eMail"
                  label="Correo Electrónico"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.eMail}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.eMail && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.eMail}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="TelefonoCelular"
                  name="TelefonoCelular"
                  label="Teléfono Celular"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.TelefonoCelular}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.TelefonoCelular && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.TelefonoCelular}
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
              <Grid item xs={3} container justifyContent="center">
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
                <Button onClick={addRow} variant="contained">
                  Agregar
                </Button>
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
        <Box sx={style}></Box>
      </Modal>
    </div>
  );
};

export default PasAutorizado;
