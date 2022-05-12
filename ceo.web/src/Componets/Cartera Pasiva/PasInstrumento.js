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
      CodigoInstrumento: form.CodigoInstrumento,
      Descripcion: form.Descripcion,
      Isin: form.Isin,
      Serie: form.Serie,
      FechaEmision: form.FechaEmision,
      FechaVencimiento: form.FechaVencimiento,
      FechaUltimoPagoInteres: form.FechaUltimoPagoInteres,
      FechaProximoPagoInteres: form.FechaProximoPagoInteres,
      TasaBruta: form.TasaBruta,
      TasaNeta: form.TasaNeta,
      Divisor: form.Divisor,
      Multiplicador: form.Multiplicador,
      IndicadorTasaVariable: form.IndicadorCapitalizable,
      IndicadorCapitalizable: form.IndicadorCapitalizable,
      IndicadorGenerico: form.IndicadorGenerico,
      Observaciones: form.Observaciones,
      CodigoMoneda: form.CodigoMoneda,
      CodigoPeriodicidadPagoInteres: form.CodigoPeriodicidadPagoInteres,
      CodigoPeriodicidadRevisionTasa: form.CodigoPeriodicidadRevisionTasa,
      Usuario: form.Usuario,
      id: userData.id,
      userName: userData.userName,
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
                  value={form.CodigoEmpresa}
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
                ></TextField>
                {errors.Serie && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Serie}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="FechaEmision"
                  name="FechaEmision"
                  label="Fecha Emisión"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.FechaEmision}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.FechaEmision && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaEmision}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="FechaUltimoPagoInteres"
                  name="FechaUltimoPagoInteres"
                  label="Fecha Último Pago Interés"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.FechaUltimoPagoInteres}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.FechaUltimoPagoInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.FechaUltimoPagoInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="FechaProximoPagoInteres"
                  name="FechaProximoPagoInteres"
                  label="Fecha Próximo Pago Interés"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.FechaProximoPagoInteres}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
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
                  disabled="true"
                ></TextField>
                {errors.Multiplicador && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Multiplicador}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="IndicadorTasaVariable"
                  name="IndicadorTasaVariable"
                  label="Indicador Tasa Variable"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorTasaVariable}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorTasaVariable && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorTasaVariable}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="IndicadorCapitalizable"
                  name="IndicadorCapitalizable"
                  label="Indicador Capitalizable"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorCapitalizable}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.IndicadorCapitalizable && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.IndicadorCapitalizable}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="IndicadorGenerico"
                  name="IndicadorGenerico"
                  label="Indicador Génerico"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.IndicadorGenerico}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
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
                  disabled="true"
                ></TextField>
                {errors.Observaciones && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Observaciones}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoMoneda"
                  name="CodigoMoneda"
                  label="Moneda"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoMoneda}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.CodigoMoneda && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoMoneda}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoPeriodicidadPagoInteres"
                  name="CodigoPeriodicidadPagoInteres"
                  label="Código Periodicidad Pago Interés"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoPeriodicidadPagoInteres}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
                {errors.CodigoPeriodicidadPagoInteres && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoPeriodicidadPagoInteres}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoPeriodicidadRevisionTasa"
                  name="CodigoPeriodicidadRevisionTasa"
                  label="Código Periodicidad Revisión Tasa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.CodigoPeriodicidadRevisionTasa}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled="true"
                ></TextField>
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

export default PasInstrumento;