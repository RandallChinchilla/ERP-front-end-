import { Divider, InputAdornment, makeStyles } from "@material-ui/core";
import {
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { postAction } from "../../Helpers/postHelper";
import { useForm } from "../../Hooks/useForm";
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
  if (!form.CodigoGrupo) {
    errors.CodigoGrupo = "Debe ingresar el código grupo";
    errors.error = true;
  }
  if (!form.Descripcion) {
    errors.Descripcion = "Debe escribir una descripcion";
    errors.error = true;
  }
  if (!form.AnnosDepreciacion) {
    errors.AnnosDepreciacion = "Debe ingresar los años de depreciación";
    errors.error = true;
  }
  if (!form.FechaUltimaModificacion) {
    errors.FechaUltimaModificacion = "Debe seleccionar la fecha de la última modificación";
    errors.error = true;
  }
  if (!form.CodigoFormaDepreciacion) {
    errors.CodigoFormaDepreciacion = "Debe ingresar la forma de depreciacion";
    errors.error = true;
  }
  if (!form.NumeroCuentaActivo) {
    errors.NumeroCuentaActivo = "Debe ingresar el número de cuenta activo";
    errors.error = true;
  }
  if (!form.NumeroCuentaDepreciacion) {
    errors.NumeroCuentaDepreciacion = "Debe ingresar el número de cuenta depreciación";
    errors.error = true;
  }
  if (!form.NumeroCuentaGastoDepreciacion) {
    errors.NumeroCuentaGastoDepreciacion = "Debe ingresar el número de cuenta de gasto depreciación";
    errors.error = true;
  }
  return errors;
};

const ActGrupo = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editActGrupo"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(rowEdit ? true : false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    CodigoEmpresa: rowEdit ? rowEdit.CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: rowEdit ? rowEdit.NombreEmpresa: userData.nombreEmpresa, 
    CodigoGrupo: rowEdit ? rowEdit.CodigoGrupo: "",     
    Descripcion: rowEdit ? rowEdit.Descripcion : "",
    AnnosDepreciacion: rowEdit ? rowEdit.AnnosDepreciacion : "",
    FechaUltimaModificacion: rowEdit ? rowEdit.FechaUltimaModificacion : "",
    CantidadModificaciones: rowEdit ? rowEdit.CantidadModificaciones : "",
    CodigoFormaDepreciacion: rowEdit ? rowEdit.CodigoFormaDepreciacion : "",
    NumeroCuentaActivo: rowEdit ? rowEdit.NumeroCuentaActivo : "",
    NumeroCuentaDepreciacion: rowEdit ? rowEdit.NumeroCuentaDepreciacion : "",
    NumeroCuentaGastoDepreciacion: rowEdit ? rowEdit.NumeroCuentaGastoDepreciacion : "",
    Usuario: rowEdit ? rowEdit.Usuario : userData.userName,
    UsuarioModifica: rowEdit ? rowEdit.UsuarioModifica : "",
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
      codigoGrupo: form.CodigoGrupo,
      descripcion: form.Descripcion,
      annosDepreciacion: form.AnnosDepreciacion,
      fechaUltimaModificacion: form.FechaUltimaModificacion,
      cantidadModificaciones: form.CantidadModificaciones,
      codigoFormaDepreciacion: form.CodigoFormaDepreciacion,
      numeroCuentaActivo: form.NumeroCuentaActivo,
      numeroCuentaDepreciacion: form.NumeroCuentaDepreciacion,
      numeroCuentaGastoDepreciacion: form.NumeroCuentaGastoDepreciacion,
      idUsuario: form.Usuario,
      id: userData.id,
    };

    console.log(addRowRequest);
    postAction(
      "ActGrupo/PostActGrupo",
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
                Grupos
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
                  id="CodigoGrupo"
                  name="CodigoGrupo"
                  label="Código Grupo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoGrupo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoGrupo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoGrupo}
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
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="AnnosDepreciacion"
                  name="AnnosDepreciacion"
                  label="Años Depreciación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.AnnosDepreciacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.AnnosDepreciacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.AnnosDepreciacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="FechaUltimaModificacion"
                    label="Fecha Última Modificación"
                    inputFormat="MM/dd/yyyy"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.FechaUltimaModificacion = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.FechaUltimaModificacion}
                    renderInput={(params) => (
                      <TextField
                        inputFormat="yyyy/MM/dd"
                        size="small"
                        id="FechaUltimaModificacion"
                        name="FechaUltimaModificacion"
                        onBlur={handleBlur}
                        value={form.FechaUltimaModificacion}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.FechaUltimaModificacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaUltimaModificacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CantidadModificaciones"
                  name="CantidadModificaciones"
                  label="Cantidad Modificaciones"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CantidadModificaciones}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CantidadModificaciones && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CantidadModificaciones}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoFormaDepreciacion"
                  name="CodigoFormaDepreciacion"
                  label="Código Forma Depreciación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoFormaDepreciacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoFormaDepreciacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoFormaDepreciacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroCuentaActivo"
                  name="NumeroCuentaActivo"
                  label="Número Cuenta Activo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCuentaActivo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroCuentaActivo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCuentaActivo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroCuentaDepreciacion"
                  name="NumeroCuentaDepreciacion"
                  label="Número Cuenta Depreciación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCuentaDepreciacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroCuentaDepreciacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCuentaDepreciacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NumeroCuentaGastoDepreciacion"
                  name="NumeroCuentaGastoDepreciacion"
                  label="Número Cuenta Gasto Depreciación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCuentaGastoDepreciacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NumeroCuentaGastoDepreciacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCuentaGastoDepreciacion}
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

export default ActGrupo;