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
import { postAction } from "../../../Helpers/postHelper";
import { useForm } from "../../../Hooks/useForm";
import { useGetData } from "../../../Hooks/useGetData";
import SelectEstado from "../../Listas/SelectEstado";


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

const RRHFormaDePago = () => {
  const rowEdit = JSON.parse(localStorage.getItem("editRRHFormaDePago"));
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const styles = useStyles();
  const [show, setShow] = useState(rowEdit ? true : false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialForm = {
    Consecutivo: rowEdit ? rowEdit.Consecutivo : "",
    CodigoEmpresa: rowEdit ? rowEdit.CodigoEmpresa : "",
    CodigoFormaDePago: rowEdit ? rowEdit.CodigoFormaDePago : "",
    Descripcion: rowEdit ? rowEdit.Descripcion : "",
    IndicadorMensual: rowEdit ? rowEdit.IndicadorMensual : "",
    IndicadorQuincenal: rowEdit ? rowEdit.IndicadorQuincenal : "",
    IndicadorSemanal: rowEdit ? rowEdit.IndicadorSemanal : "",
    IndicadorHora: rowEdit ? rowEdit.IndicadorHora : "",
    IndicadorServiciosProfesionales: rowEdit ? rowEdit.IndicadorServiciosProfesionales : "",
    IndicadorVisible: rowEdit ? rowEdit.IndicadorVisible : "",
    IdUsuario: rowEdit ? rowEdit.IdUsuario : "",
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
      CodigoFormaDePago: form.CodigoFormaDePago,
      Descripcion: form.Descripcion,
      IndicadorMensual: form.IndicadorMensual,
      IndicadorQuincenal: form.IndicadorQuincenal,
      IndicadorSemanal: form.IndicadorSemanal,
      IndicadorHora: form.IndicadorHora,
      IndicadorServiciosProfesionales: form.IndicadorServiciosProfesionales,
      IndicadorVisible: form.IndicadorVisible,
      IdUsuario: form.IdUsuario,
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
                  Forma De Pago
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
              <Grid item xs={6} container justifyContent="center">
                <TextField
                  id="CodigoFormaDePago"
                  name="CodigoFormaDePago"
                  label="CodigoFormaDePago"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoFormaDePago}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.CodigoFormaDePago && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoFormaDePago}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Descripcion"
                  name="Descripcion"
                  label="Descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Descripcion}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.Descripcion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Descripcion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IndicadorMensual"
                  name="IndicadorMensual"
                  label="Indicador Mensual"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorMensual}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorMensual && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorMensual}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IndicadorQuincenal"
                  name="IndicadorQuincenal"
                  label="Indicador Quincenal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorQuincenal}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorQuincenal && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorQuincenal}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IndicadorSemanal"
                  name="IndicadorSemanal"
                  label="Indicador Semanal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorSemanal}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorSemanal && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorSemanal}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IndicadorHora"
                  name="IndicadorHora"
                  label="Indicador por Hora"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorHora}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorHora && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorHora}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IndicadorServiciosProfesionales"
                  name="IndicadorServiciosProfesionales"
                  label="Indicador Servicios Profesionales"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorServiciosProfesionales}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorServiciosProfesionales && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorServiciosProfesionales}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="IndicadorVisible"
                  name="IndicadorVisible"
                  label="Indicador Visible"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorVisible}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorVisible && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorVisible}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
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

export default RRHFormaDePago;