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
  if (!form.CodigoActivo) {
    errors.CodigoActivo = "Debe ingresar el código activo";
    errors.error = true;
  }
  if (!form.FechaHora) {
    errors.FechaHora = "Debe seleccionar una fecha y hora";
    errors.error = true;
  }
  if (!form.NombreDocumento) {
    errors.NombreDocumento = "Debe ingresar el nombre del documento";
    errors.error = true;
  }
  if (!form.UrlDocumento) {
    errors.UrlDocumento = "Debe ingresar la URL del documento";
    errors.error = true;
  }
  return errors;
};

const ActDocumento = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editActDocumento"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(rowEdit ? true : false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    CodigoEmpresa: rowEdit ? rowEdit.CodigoEmpresa : userData.codigoEmpresa,
    NombreEmpresa: rowEdit ? rowEdit.NombreEmpresa : userData.nombreEmpresa,
    CodigoActivo: rowEdit ? rowEdit.CodigoActivo : "",
    FechaHora: rowEdit ? rowEdit.FechaHora : "",
    NombreDocumento: rowEdit ? rowEdit.NombreDocumento : "",
    UrlDocumento: rowEdit ? rowEdit.UrlDocumento : "",
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

  //+++++++add Encabezado de Factura+++++++++
  const addRow = () => {
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    const addRowRequest = {
      codigoEmpresa: form.CodigoEmpresa,
      codigoActivo: form.CodigoActivo,
      fechaHora: form.FechaHora,
      nombreDocumento: form.NombreDocumento,
      urldocumento: form.UrlDocumento,
      idUsuario: form.Usuario,
      id: userData.id,
    };

    console.log(addRowRequest);
    postAction(
      "ActDocumento/PostActDocumento",
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
                  Documentos
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="center">
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
                  id="CodigoActivo"
                  name="CodigoActivo"
                  label="Código Activo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoActivo}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoActivo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoActivo}
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
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="NombreDocumento"
                  name="NombreDocumento"
                  label="Nombre Documento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NombreDocumento}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.NombreDocumento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NombreDocumento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="UrlDocumento"
                  name="UrlDocumento"
                  label="URL"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.UrlDocumento}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.UrlDocumento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.UrlDocumento}
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

export default ActDocumento;
