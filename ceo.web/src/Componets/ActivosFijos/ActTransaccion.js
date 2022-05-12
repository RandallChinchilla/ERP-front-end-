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
import MaterialTable from "material-table";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postAction } from "../../Helpers/postHelper";
import { useForm } from "../../Hooks/useForm";
import { useGetData } from "../../Hooks/useGetData";
import SelectEstado from "../Listas/SelectEstado";


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
  if (!form.codigoTipoDocumento) {
    errors.codigoTipoDocumento = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.Nombre) {
    errors.Nombre = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.NumeroCliente) {
    errors.NumeroCliente = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.CorreoElectronico) {
    errors.CorreoElectronico = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }

  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debe seleccionar el tipo de documento";
    errors.error = true;
  }
  if (!form.Direccion) {
    errors.Direccion = "Debe ingresar la dirección";
    errors.error = true;
  }
  if (!form.Observaciones) {
    errors.Observaciones = "Debe ingresar sus observaciones";
    errors.error = true;
  }
  return errors;
};

const ActTransaccion = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editRRHISR"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(rowEdit ? true : false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    Consecutivo: rowEdit ? rowEdit.Consecutivo : "",
    CodigoEmpresa: rowEdit ? rowEdit.CodigoEmpresa : "",
    FechaHora: rowEdit ? rowEdit.FechaHora : "",
    LimiteInicial1: rowEdit ? rowEdit.LimiteInicial1 : "",
    LimiteFinal1: rowEdit ? rowEdit.LimiteFinal1 : "",
    Porcentaje1: rowEdit ? rowEdit.Porcentaje1 : "",
    LimiteInicial2: rowEdit ? rowEdit.LimiteInicial2 : "",
    LimiteFinal2: rowEdit ? rowEdit.LimiteFinal2 : "",
    LimiteFinal2: rowEdit ? rowEdit.LimiteFinal2 : "",
    Porcentaje2: rowEdit ? rowEdit.Porcentaje2 : "",
    LimiteInicial3: rowEdit ? rowEdit.LimiteInicial3 : "",
    LimiteFinal3: rowEdit ? rowEdit.LimiteFinal3 : "",
    Porcentaje3: rowEdit ? rowEdit.Porcentaje3 : "",
    LimiteInicial4: rowEdit ? rowEdit.LimiteInicial4 : "",
    LimiteFinal4: rowEdit ? rowEdit.LimiteFinal4 : "",
    Porcentaje4: rowEdit ? rowEdit.Porcentaje4 : "",
    LimiteInicial5: rowEdit ? rowEdit.LimiteInicial5 : "",
    LimiteFinal5: rowEdit ? rowEdit.LimiteFinal5 : "",
    Porcentaje5: rowEdit ? rowEdit.Porcentaje5 : "",
    LimiteInicial6: rowEdit ? rowEdit.LimiteInicial6 : "",
    LimiteFinal6: rowEdit ? rowEdit.LimiteFinal6 : "",
    Porcentaje6: rowEdit ? rowEdit.Porcentaje6 : "",
    LimiteInicial7: rowEdit ? rowEdit.LimiteInicial7 : "",
    LimiteFinal7: rowEdit ? rowEdit.LimiteFinal7 : "",
    Porcentaje7: rowEdit ? rowEdit.Porcentaje7 : "",
    LimiteInicial8: rowEdit ? rowEdit.LimiteInicial8 : "",
    LimiteFinal8: rowEdit ? rowEdit.LimiteFinal8 : "",
    Porcentaje8: rowEdit ? rowEdit.Porcentaje8 : "",
    IdUsuario: rowEdit ? rowEdit.IdUsuario : "",
    CodigoEstado: rowEdit ? rowEdit.CodigoEstado : "",
  };
//   const { Data } = useGetData("CliMaestro/GetCliMaestros");
//   const [columns, setColumns] = useState([
//     { title: "Codigo Cliente", field: "NumeroCliente" },
//     {
//       title: "Nombre",
//       field: "Nombre",
//     },
//   ]);

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
      consecutivo: 0,
      FechaHora: form.FechaHora,
      LimiteInicial1: form.LimiteInicial1,
      LimiteFinal1: form.LimiteFinal1,
      Porcentaje1: form.Porcentaje1,
      codigoMedioPago: form.CodigoMedioPago,
      numeroCliente: form.NumeroCliente,
      observaciones: form.Observaciones,
      CodigoEstado: form.CodigoEstado,
      comprobanteElectronico: "0",
      comprobanteElectronicoReversa: "0",
      id: userData.id,
      userName: userData.userName,
    };

    console.log(addRowRequest);
    postAction(
      "RrhIsr/PostRrhIsr",
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
                 Transacción
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="CodigoEmpresa"
                  name="CodigoEmpresa"
                  label="Empresa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoEmpresa}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoEmpresa && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoEmpresa}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Consecutivo"
                  name="Consecutivo"
                  label="Consecutivo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Consecutivo}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Consecutivo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Consecutivo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="FechaHora"
                  name="FechaHora"
                  label="Fecha y Hora"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.FechaHora}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.FechaHora && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaHora}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial1"
                  name="LimiteInicial1"
                  label="Limite Inicial 1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial1}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial1 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial1}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal1"
                  name="LimiteFinal1"
                  label="Limite Final 1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal1}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal1 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal1}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje1"
                  name="Porcentaje1"
                  label="Porcentaje 1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje1}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje1 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje1}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial2"
                  name="LimiteInicial2"
                  label="Limite Inicial 2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial2}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial2 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial2}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal2"
                  name="LimiteFinal2"
                  label="Limite Final 2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal2}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal2 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal2}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje2"
                  name="Porcentaje2"
                  label="Porcentaje 2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje2}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje2 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje2}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial3"
                  name="LimiteInicial3"
                  label="Limite Inicial 3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial3}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial3 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial3}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal3"
                  name="LimiteFinal3"
                  label="Limite Final 3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal3}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal3 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal3}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje3"
                  name="Porcentaje3"
                  label="Porcentaje 3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje3}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje3 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje3}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial4"
                  name="LimiteInicial4"
                  label="Limite Inicial 4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial4}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial4 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial4}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal4"
                  name="LimiteFinal4"
                  label="Limite Final 4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal4}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal4 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal4}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje4"
                  name="Porcentaje4"
                  label="Porcentaje 4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje4}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje4 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje4}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial5"
                  name="LimiteInicial5"
                  label="Limite Inicial 5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial5}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial5 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial5}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal5"
                  name="LimiteFinal5"
                  label="Limite Final 5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal5}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal5 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal5}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje5"
                  name="Porcentaje5"
                  label="Porcentaje 5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje5}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje5 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje5}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial6"
                  name="LimiteInicial6"
                  label="Limite Inicial 6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial6}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial6 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial6}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal6"
                  name="LimiteFinal6"
                  label="Limite Final 6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal6}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal6 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal6}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje6"
                  name="Porcentaje6"
                  label="Porcentaje 6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje6}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje6 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje6}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial7"
                  name="LimiteInicial7"
                  label="Limite Inicial 7"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial7}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial7 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial7}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal7"
                  name="LimiteFinal7"
                  label="Limite Final 7"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal7}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal7 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal7}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje7"
                  name="Porcentaje7"
                  label="Porcentaje 7"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje7}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje7 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje7}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteInicial8"
                  name="LimiteInicial8"
                  label="Limite Inicial 8"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteInicial8}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteInicial8 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteInicial8}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="LimiteFinal8"
                  name="LimiteFinal8"
                  label="Limite Final 8"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.LimiteFinal8}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.LimiteFinal8 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.LimiteFinal8}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="Porcentaje8"
                  name="Porcentaje8"
                  label="Porcentaje 8"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Porcentaje8}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Porcentaje8 && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Porcentaje8}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="IdUsuario"
                  name="IdUsuario"
                  label="Usuario"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IdUsuario}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IdUsuario && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IdUsuario}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <FormControl size="small" className={styles.listas}>
                  <SelectEstado
                    form={form}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} container justifyContent="end">
                <Button onClick={addRow}>Agregar</Button>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Divider />
              </Grid>
              {/* {show && (
                <FacMaestroDetalle data={initialForm} />
                // <Grid container spacing={2} justifyContent="center">
                //   <Grid item xs={12}>
                //     <FacMaestroDetalle data={initialForm} />
                //   </Grid>
                // </Grid>
              )} */}
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
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccione un producto
          </Typography> */}
          {/* <div>
            <MaterialTable
              title="Articulo"
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
                  tooltip: "Seleccionar Articulo",
                  onClick: (event, rowData) => selectItem(rowData, false),
                },
              ]}
            />
          </div> */}
        </Box>
      </Modal>
    </div>
  );
};

export default ActTransaccion;