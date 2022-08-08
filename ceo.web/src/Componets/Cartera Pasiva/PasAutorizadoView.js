import React, { useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import {
  FormControl,
  FormHelperText,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, StylesContext } from "@material-ui/styles";
import { SelectCross } from "../Listas/SelectCross";
import { useForm } from "../../Hooks/useForm";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { putAction } from "../../Helpers/putHelper";
import { Button } from "@material-ui/core";

const baseUrl = process.env.REACT_APP_BASE_URL;
const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

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
  btnprimary: { margin: "0px", color: "primary" },
}));

const validationsform = (form) => {
  let errors = {};
  if (form.CodigoPais === 0) {
    errors.CodigoPais = "debes seleccionar un pais";
    errors.error = true;
  }
  if (form.NumeroId === 0) {
    errors.NumeroId = "debes seleccionar un pais";
    errors.error = true;
  }
  if (!form.NombreAutorizado) {
    errors.NombreAutorizado = "debes ingresar un nombre";
    errors.error = true;
  }
  if (!form.ApellidoAut1) {
    errors.ApellidoAut1 = "debes ingresar el apellido";
    errors.error = true;
  }
  if (!form.ApellidoAut2) {
    errors.ApellidoAut2 = "debes ingresar el apellido";
    errors.error = true;
  }
  if (!form.FechaVencimientoIdAut) {
    errors.FechaVencimientoIdAut = "debes ingresar el apellido";
    errors.error = true;
  }
  if (!form.eMailAut) {
    errors.eMailAut = "Debes ingresar un correo";
    errors.error = true;
  }
  if (!form.TelefonoCelularAut) {
    errors.TelefonoCelularAut = "Debes ingresar un número de celular";
    errors.error = true;
  }
  if (form.CodigoEstadoAut === 0) {
    errors.CodigoEstadoAut = "Debese seleccionar un estadao";
    errors.error = true;
  }

  return errors;
};

const PasAutorizadoView = (props) => {
  const styles = useStyles();
  const { useState } = React;
  let usehistory = useHistory();
  window.localStorage.removeItem("editPasAutorizado");
  const [value, setValue] = useState(new Date());
  const userData = JSON.parse(localStorage.getItem("userLogged"));

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    CodigoAportante: props.Aportante,
    CodigoPais: 0,
    CodigoTipoIdentificacion: 0,
    NumeroId: 0,
    Nombre: "",
    Apellido1: "",
    Apellido2: "",
    FechaVencimientoId: "",
    EMail: "",
    TelefonoCelular: "",
    CodigoEstado: 0,
  };

  const [columns, setColumns] = useState([
    {
      title: "Tipo Identificación",
      field: "CodigoTipoIdentificacion",
    },
    {
      title: "Número Id",
      field: "NumeroId",
    },
    {
      title: "Nombre",
      field: "Nombre",
    },
    {
      title: "Pri. Apellido",
      field: "Apellido1",
    },
    {
      title: "Seg. Apellido",
      field: "Apellido2",
    },
    {
      title: "Estado",
      field: "CodigoEstado",
    },
  ]);

  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsform
  );

  // const { Data, Error, setData } = useGetData(
  //   "PasAutorizado/GetPasAutorizados"
  // );

  // if (Error) return null;
  // if (!Data) return null;

  //+++++++update row in the table+++++++++
  const updateState = (rowUpdate, isNew) => {
    if (isNew) {
      console.log(rowUpdate);

      // usehistory.push(`./PasAutorizado/1`);
    } else {
      console.log(rowUpdate);
      setForm(rowUpdate);

      // putAction("PasAutorizado/PutPasAutorizado",form,userLoggedToken).then((res) => {
      //   if (res.isSuccess) {
      //     console.log("Se actualizo autorizado")
      //   } else {
      //     console.log("Se actualizo autorizado")
      //   }
      // })
    }
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" pl={5} pr={5} mb={2}>
        <Grid item xs={12} container justifyContent="center" mt={5} mb={5}>
          <Typography component="h1" variant="h6" noWrap>
            Autorizado
          </Typography>
        </Grid>
        <Grid item xs={3} container justifyContent="center">
          <TextField
            id="CodigoAportante"
            name="CodigoAportante"
            label="Codigo Aportante"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CodigoAportante}
            className={styles.inpuntEmpresa}
            size="small"
            disabled
          ></TextField>
          {/* {errors.CodigoAportante && (
            <FormHelperText id="my-helper-text" error>
              {errors.CodigoAportante}
            </FormHelperText>
          )} */}
        </Grid>
        <Grid item xs={3} container justifyContent="center">
          <FormControl size="small" className={styles.listas}>
            <SelectCross
              form={form}
              handleBlur={handleBlur}
              handleChange={handleChange}
              title="Pais"
              controller="ParPais/GetParPaises"
              name="CodigoPais"
              field="Nombre"
            />
          </FormControl>
          {errors.CodigoPais && (
            <FormHelperText id="my-helper-text" error>
              {errors.CodigoPais}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={3} container justifyContent="center">
          <FormControl size="small" className={styles.listas}>
            <SelectCross
              form={form}
              handleBlur={handleBlur}
              handleChange={handleChange}
              title="Tipo Identificación"
              controller="ParTipoidentificacion/GetParTiposIdentificacion"
              name="CodigoTipoIdentificacion"
              field="Descripcion"
            />
          </FormControl>
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
              inputFormat="dd/MM/yyyy"
              label="Fecha vencimiento Id"
              onChange={(newvalue) => {
                setValue(newvalue);
                form.FechaVencimientoId = newvalue;
              }}
              onBlur={handleBlur}
              value={form.FechaVencimientoId}
              renderInput={(params) => (
                <TextField
                  type="datetime-local"
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
            id="EMail"
            name="EMail"
            label="Correo Electrónico"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.EMail}
            className={styles.inpuntEmpresa}
            size="small"
          ></TextField>
          {errors.EMail && (
            <FormHelperText id="my-helper-text" error>
              {errors.EMail}
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
              title="Código Estado"
              controller="ParEstado/GetParEstados"
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
          <Button
            id="btn-aut"
            name="btn-aut"
            size="small"
            color="primary"
            variant="contained"
            //onClick={handleSubmit}
            disabled={errors.error ? true : false}
            className={styles.btnprimary}
          >
            {form.CodigoTipoIdentificacion !== 0
              ? "Actualizar Autorizado"
              : "Agregar Autorizado"}
          </Button>
        </Grid>
      </Grid>

      <MaterialTable
        title="Catálogo Autorizados"
        columns={columns}
        data={props.DataAutorizados}
        options={{
          rowStyle: {
            fontSize: 12,
          },
          headerStyle: {
            backgroundColor: "#898883",
            color: "#FFF",
            fontSize: 13,
          },
          exportButton: true,
          tableLayout: "fixed",
        }}
        actions={[
          {
            icon: "edit",
            tooltip: "Editar Autorizado",
            onClick: (event, rowData) => updateState(rowData, false),
          },
          {
            icon: "delete",
            tooltip: "Borrar Autorizado",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Nuevo Autorizado",
            isFreeAction: true,
            onClick: (event, rowData) => updateState(rowData, true),
          },
        ]}
      />
    </div>
  );
};

export default PasAutorizadoView;
