import { InputAdornment, makeStyles, Divider } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  AlertTitle,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import MaterialTable from "material-table";
import React, { useState } from "react";
import { postAction } from "../../Helpers/postHelper";
import { useForm } from "../../Hooks/useForm";
import { useGetData, useGetDataProps } from "../../Hooks/useGetData";
import SelectTipoImpuesto from "../Listas/SelectTipoImpuesto";
import { FacTableDetalle } from "./FacTableDetalle";

let table;

const validationsForm = (form) => {
  let errors = {};
  if (!form.Descripcion) {
    errors.Descripcion = "Debe ingresar una empresa";
    errors.error = true;
  }
  return errors;
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
const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  listas: {
    width: "100%",
  },
  inpunt: { width: "100%" },
  gridContainer: { paddingRight: 5, paddingLeft: 5 },
}));

export const FacMaestroDetalle = (props) => {
  const [openAlert, setopenAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [columns, setColumns] = useState([
    { title: "Codigo Articulo", field: "CodigoArticulo" },
    {
      title: "Descripción",
      field: "Descripcion",
    },
  ]);

  const modelRequest = {
    codigoEmpresa: props.data.CodigoEmpresa,
    consecutivo: props.data.Consecutivo,
  };

  const { DataDet, ErrorDet, setDataDet } = useGetDataProps(
    "IvtEncabezadoFactura/GetIvtEncabezadoFactura",
    modelRequest
  );

  console.log(DataDet);
  const { Data, Error, setData } = useGetData("IvtMaestro/GetIvtMaestros");
  const styles = useStyles();

  const [totales, setTotales] = useState({
    SubTotal: 0,
  });

  const initialForm = {
    CodigoArticulo: "",
    Descripcion: "",
    precioUnitario: "",
    porcentajeDescuento: 0,
    cantidad: 0,
    CantidadInv: 0,
    CodigoTipoImpuesto: "",
    montoImpuesto: "",
    Arancel: 0,
    MontoExport: 0,
    Total: 0,
  };

  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );

  const updateTotales = (p) => {
    switch (p) {
      case 1:
        const subtotalsinimpuestos = DataDet.reduce(
          (preValue, currentValue) =>
            preValue + currentValue.Cantidad * currentValue.PrecioUnitario,
          0
        );
        return subtotalsinimpuestos;
      case 2:
        const impuesto1 = DataDet.reduce(
          (preValue, currentValue) =>
            preValue +
            currentValue.Cantidad *
              currentValue.PrecioUnitario *
              (currentValue.MontoImpuesto / 100),
          0
        );
        return impuesto1;
      case 3:
        const subtotal = DataDet.reduce(
          (preValue, currentValue) =>
            preValue + currentValue.Cantidad * currentValue.PrecioUnitario,
          0
        );

        const descuento2 = DataDet.reduce(
          (preValue, currentValue) =>
            preValue +
            currentValue.Cantidad *
              currentValue.PrecioUnitario *
              (currentValue.PorcentajeDescuento / 100),
          0
        );

        const impuesto2 = DataDet.reduce(
          (preValue, currentValue) =>
            preValue +
            currentValue.Cantidad *
              currentValue.PrecioUnitario *
              (currentValue.MontoImpuesto / 100),
          0
        );
        const total = subtotal + impuesto2 - descuento2;
        return total;

      case 4:
        const descuento = DataDet.reduce(
          (preValue, currentValue) =>
            preValue +
            currentValue.Cantidad *
              currentValue.PrecioUnitario *
              (currentValue.PorcentajeDescuento / 100),
          0
        );
        console.log(descuento);
        return descuento;

      default:
        break;
    }
  };

  const selectItem = (rowUpdate, isNew) => {
    console.log(rowUpdate);
    setForm({
      codigoEmpresa: props.data.CodigoEmpresa,
      consecutivo: props.data.Consecutivo,
      codigoArticulo: rowUpdate.CodigoArticulo,
      Descripcion: rowUpdate.Descripcion,
      precioUnitario: rowUpdate.PrecioVenta,
      porcentajeDescuento: 0,
      cantidad: 0,
      CantidadInv: rowUpdate.Cantidad,
      CodigoTipoImpuesto: rowUpdate.CodigoTipoImpuesto,
      montoImpuesto: rowUpdate.CodigoTipoImpuestoNavigation.Porcentaje,
      Arancel: 0,
      MontoExport: 0,
      Total: 0,
    });
    handleClose();
  };

  //+++++++add row in the table+++++++++
  const addRow = () => {
    if (form.CantidadInv >= form.cantidad) {
      setopenAlert(false);
      const userLoggedToken = JSON.parse(
        localStorage.getItem("userLoggedToken")
      );
      const addRowRequest = {
        CodigoEmpresa: form.codigoEmpresa,
        Consecutivo: form.consecutivo,
        CodigoArticulo: form.codigoArticulo,
        Cantidad: form.cantidad,
        PrecioUnitario: form.precioUnitario,
        PorcentajeDescuento: form.porcentajeDescuento,
        MontoImpuesto: form.montoImpuesto,
        Total: form.cantidad * form.precioUnitario,
      };
      console.log(addRowRequest);
      postAction(
        "IvtDetalleFactura/PostIvtDetalleFactura",
        addRowRequest,
        userLoggedToken
      ).then((response) => {
        if (response.status === 200) {
          setDataDet([...DataDet, addRowRequest]);
          //setForm([]);
          setForm({
            codigoEmpresa: "",
            consecutivo: "",
            codigoArticulo: "",
            Descripcion: "",
            precioUnitario: "",
            porcentajeDescuento: 0,
            cantidad: 0,
            CodigoTipoImpuesto: "",
            montoImpuesto: "",
            Arancel: 0,
            MontoExport: 0,
          });
          console.log("Registro agregado");
        } else {
          console.log("No se pudo agregar el registro");
        }
      });
    } else {
      setopenAlert(true);
    }
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} container justifyContent="center" mt={1} mb={2}>
          <Typography component="h1" variant="h6" noWrap>
            Totales
          </Typography>
        </Grid>
        <Grid item xs={3} container justifyContent="center">
          <TextField
            id="SubTotal"
            name="SubTotal"
            label="SubTotal"
            onChange={handleChange}
            onBlur={handleBlur}
            value={updateTotales(1)}
            className={styles.inpuntEmpresa}
            size="small"
            disabled
          ></TextField>
        </Grid>
        <Grid item xs={3} container justifyContent="center">
          <TextField
            type="number"
            id="descuento"
            name="descuento"
            label="Descuento"
            value={updateTotales(4)}
            className={styles.inpuntEmpresa}
            size="small"
            disabled
          ></TextField>
        </Grid>
        <Grid item xs={3} container justifyContent="center">
          <TextField
            id="Impuesto"
            name="Impuesto"
            label="Impuesto"
            value={updateTotales(2)}
            className={styles.inpuntEmpresa}
            size="small"
            disabled
          ></TextField>
        </Grid>
        <Grid item xs={3} container justifyContent="center">
          <TextField
            id="Total"
            name="Total"
            label="Total"
            value={updateTotales(3)}
            className={styles.inpuntEmpresa}
            size="small"
            disabled
          ></TextField>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Divider />
        </Grid>
        {openAlert && (
          <Alert
            severity="error"
            onClose={() => {
              setopenAlert(false);
            }}
          >
            <AlertTitle>Error</AlertTitle>
            No existe la cantidad en inventrio{" "}
            <strong>Revisa el inventrio para este articulo!</strong>
          </Alert>
        )}

        <Grid item xs={12} container justifyContent="center" mt={1} mb={3}>
          <Typography component="h1" variant="h6" noWrap>
            Detalle Factura
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <TextField
            onClick={handleOpen}
            id="codigoArticulo"
            name="codigoArticulo"
            label="Código"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.codigoArticulo}
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
        <Grid item xs={4} container justifyContent="center">
          <TextField
            id="Descripcion"
            name="Descripcion"
            label="Descripción"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Descripcion}
            size="small"
            className={styles.inpunt}
          ></TextField>
          {errors.Descripcion && (
            <FormHelperText id="my-helper-text" error>
              {errors.Descripcion}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <TextField
            id="precioUnitario"
            name="precioUnitario"
            label="Precio Unitario"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.precioUnitario}
            className={styles.inpunt}
            size="small"
            className={styles.inpunt}
          ></TextField>
          {errors.precioUnitario && (
            <FormHelperText id="my-helper-text" error>
              {errors.precioUnitario}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <TextField
            id="porcentajeDescuento"
            name="porcentajeDescuento"
            label="% Descuento"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.porcentajeDescuento}
            size="small"
            className={styles.inpunt}
          ></TextField>
          {errors.porcentajeDescuento && (
            <FormHelperText id="my-helper-text" error>
              {errors.porcentajeDescuento}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <TextField
            id="cantidad"
            name="cantidad"
            label="cantidad"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.cantidad}
            size="small"
            className={styles.inpunt}
          ></TextField>
          {errors.cantidad && (
            <FormHelperText id="my-helper-text" error>
              {errors.cantidad}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <FormControl size="small" className={styles.listas}>
            <SelectTipoImpuesto
              form={form}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <TextField
            id="montoImpuesto"
            name="montoImpuesto"
            label="% Iva"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.montoImpuesto}
            size="small"
            className={styles.inpunt}
            disabled
          ></TextField>
          {errors.montoImpuesto && (
            <FormHelperText id="my-helper-text" error>
              {errors.montoImpuesto}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={4} container justifyContent="center">
          <TextField
            id="Arancel"
            name="Arancel"
            label="Partida Arancelaria"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Arancel}
            size="small"
            className={styles.inpunt}
            disabled
          ></TextField>
          {errors.Arancel && (
            <FormHelperText id="my-helper-text" error>
              {errors.Arancel}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <TextField
            id="MontoExport"
            name="MontoExport"
            label="Monto Exportación"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.MontoExport}
            className={styles.inpuntEmpresa}
            size="small"
            className={styles.inpunt}
            disabled
          ></TextField>
          {errors.MontoExport && (
            <FormHelperText id="my-helper-text" error>
              {errors.MontoExport}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <Button onClick={addRow}>Agregar</Button>
        </Grid>
        <Grid item xs={12} mb={5}>
          <FacTableDetalle DataDet={DataDet} />
        </Grid>
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
          <div>
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
          </div>
        </Box>
      </Modal>
    </div>
  );
};
