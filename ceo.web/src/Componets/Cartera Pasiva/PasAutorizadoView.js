import React, { useEffect, useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import MaterialTable from "material-table";
import { useHistory } from "react-router";
import {
  fabClasses,
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
import { postAction } from "../../Helpers/postHelper";
import { useDispatch, useSelector } from "react-redux";
import {
  createAction,
  delAction,
  noAction,
  readAllAction,
  updateAction,
} from "../../Actions/Index";
import { initializeConnect } from "react-redux/es/components/connect";
import { deleteAction } from "../../Helpers/deleteHelper";

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
  if (form.CodigoTipoIdentificacion === 0) {
    errors.CodigoTipoIdentificacion =
      "debes seleccionar un tipo de identificación";
    errors.error = true;
  }
  if (form.CodigoPais === 0) {
    errors.CodigoPais = "debes seleccionar un pais";
    errors.error = true;
  }
  if (form.NumeroId === 0) {
    errors.NumeroId = "debes seleccionar un pais";
    errors.error = true;
  }
  if (!form.Nombre) {
    errors.Nombre = "debes ingresar un nombre";
    errors.error = true;
  }
  if (!form.Apellido1) {
    errors.Apellido1 = "debes ingresar el apellido";
    errors.error = true;
  }
  if (!form.Apellido2) {
    errors.Apellido2 = "debes ingresar el apellido";
    errors.error = true;
  }
  if (!form.FechaVencimientoId) {
    errors.FechaVencimientoId = "debes ingresar el apellido";
    errors.error = true;
  }
  if (!form.EMail) {
    errors.EMail = "Debes ingresar un correo";
    errors.error = true;
  }
  if (!form.TelefonoCelular) {
    errors.TelefonoCelular = "Debes ingresar un número de celular";
    errors.error = true;
  }
  if (form.CodigoEstado === 0) {
    errors.CodigoEstado = "Debese seleccionar un estadao";
    errors.error = true;
  }

  return errors;
};

const PasAutorizadoView = (props) => {
  const styles = useStyles();
  let usehistory = useHistory();
  window.localStorage.removeItem("editPasAutorizado");
  const [value, setValue] = useState(new Date());
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const [autData, setAutData] = useState([]);
  const [showbtn, setShowbtn] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

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

  useEffect(() => {
    if (props.DataAutorizados) {
      // setAutData(props.DataAutorizados);
      dispatch(readAllAction(props.DataAutorizados));
    } else {
      setAutData([]);
    }
  }, [props.DataAutorizados]);

  const [columns] = useState([
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showbtn) {
      putAction("PasAutorizado/PutPasAutorizado", form, userLoggedToken).then(
        (res) => {
          if (res.isSuccess) {
            dispatch(updateAction(form, "NumeroId"));
            return alert(res.message);
          } else {
            return alert(res.message);
          }
        }
      );
    } else {
      postAction("PasAutorizado/PostPasAutorizado", form, userLoggedToken).then(
        (res) => {
          if (res.IsSuccess) {
            dispatch(createAction(res.Result));
            return alert(res.Message);
          } else {
            return alert(res.Message);
          }
        }
      );
    }
  };

  const deleteAut = (rowDelete) => {
    deleteAction(
      "PasAutorizado/DeletePasAutorizado",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.NumeroId, "NumeroId"));
        return alert(res.message);
      } else {
        dispatch(noAction());
        return alert(res.message);
      }
    });
  };

  //+++++++update or add row in the table+++++++++
  const updateAut = (rowUpdate, isUpdate) => {
    if (isUpdate) {
      setShowbtn(true);
      setForm(rowUpdate);
    } else {
      setShowbtn(false);
      setForm(initialForm);
    }
  };

  const deleteItem = (rowDelete) => {
    deleteAction(
      "PasAutorizado/DeletePasAutorizado",
      rowDelete,
      userLoggedToken
    ).then((res) => {
      if (res.isSuccess) {
        dispatch(delAction(rowDelete.CodigoAportante, "CodigoAportante"));
        alert("El autorizado fue eliminado");
      } else {
        alert("El autorizado no fue eliminado");
      }
    });
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
            onClick={handleSubmit}
            disabled={errors.error ? true : false}
            className={styles.btnprimary}
          >
            {showbtn ? "Actualizar Autorizado" : "Agregar Autorizado"}
          </Button>
        </Grid>
      </Grid>

      <MaterialTable
        title="Catálogo Autorizados"
        columns={columns}
        data={db}
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
            onClick: (event, rowData) => updateAut(rowData, true),
          },
          {
            icon: "delete",
            tooltip: "Borrar Autorizado",
            onClick: (event, rowData) => deleteAut(rowData),
          },
          {
            icon: "add",
            tooltip: "Agregar Autorizado",
            isFreeAction: true,
            onClick: (event, rowData) => updateAut(false),
          },
        ]}
      />
    </div>
  );
};
export default PasAutorizadoView;
