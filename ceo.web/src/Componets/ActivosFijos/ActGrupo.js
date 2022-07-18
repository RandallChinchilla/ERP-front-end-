import { Divider, makeStyles, InputAdornment } from "@material-ui/core";
import {
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { postAction } from "../../Helpers/postHelper";
import { useForm } from "../../Hooks/useForm";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { putAction } from "../../Helpers/putHelper";
import { CatCuentasModal } from "../Modales/CatCuentasModal";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";

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
  button: { margin: "1px" },
}));

const validationsForm = (form) => {
  let errors = {};

  if (!form.Descripcion) {
    errors.Descripcion = "Debe escribir una descripcion";
    errors.error = true;
  }
  if (!form.AnnosDepreciacion) {
    errors.AnnosDepreciacion = "Debe ingresar los años de depreciación";
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
    errors.NumeroCuentaDepreciacion =
      "Debe ingresar el número de cuenta depreciación";
    errors.error = true;
  }
  if (!form.NumeroCuentaGastoDepreciacion) {
    errors.NumeroCuentaGastoDepreciacion =
      "Debe ingresar el número de cuenta de gasto depreciación";
    errors.error = true;
  }
  return errors;
};

const ActGrupo = () => {
  const userData = JSON.parse(localStorage.getItem("userLogged"));

  const initialForm = {
    CodigoEmpresa: userData.codigoEmpresa,
    NombreEmpresa: userData.nombreEmpresa,
    CodigoGrupo: 0,
    Descripcion: "",
    AnnosDepreciacion: "",
    FechaUltimaModificacion: new Date(),
    CantidadModificaciones: 0,
    CodigoFormaDepreciacion: "",
    NumeroCuentaActivo: "",
    NumeroCuentaDepreciacion: "",
    NumeroCuentaGastoDepreciacion: "",
    Usuario: userData.userName,
    UsuarioModifica: "",
  };
  const styles = useStyles();
  const { rowUpdate } = useLocation();

  const state = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  let usehistory = useHistory();

  const handleOpen = (e) => {
    setId(e.currentTarget.getAttribute("acountType"));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (rowUpdate) {
      setForm(rowUpdate);
    } else {
      setForm(initialForm);
    }
  }, [rowUpdate]);

  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

    if (form.CodigoGrupo === 0) {
      postAction("ActGrupo/PostActGrupo", form, userLoggedToken).then((res) => {
        if (res.isSuccess) {
          setForm(initialForm);
          return alert("El grupo fue creado con exito");
        } else {
          return alert("No se pudo crear el grupo");
        }
      });
    } else {
      putAction("ActGrupo/PutActGrupo", form, userLoggedToken).then((res) => {
        if (res.isSuccess) {
          return alert("El grupo fue actualizado con exito");
        } else {
          return alert("No se pudo actualizar el grupo");
        }
      });
    }
  };
  const model = {
    CodigoEmpresa: userData.codigoEmpresa,
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box container sx={{ maxWidth: "100%", "& button": { m: 1 } }}>
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
                  value={userData.nombreEmpresa}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="CodigoGrupo"
                  name="CodigoGrupo"
                  label="Código Grupo"
                  onChange={handleChange}
                  //onBlur={handleBlur}
                  value={form.CodigoGrupo}
                  className={styles.inpuntEmpresa}
                  size="small"
                  disabled
                ></TextField>
                {/* {errors.CodigoGrupo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.CodigoGrupo}
                  </FormHelperText>
                )} */}
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

              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="NumeroCuentaActivo"
                  name="NumeroCuentaActivo"
                  label="Número Cuenta Activo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCuentaActivo}
                  className={styles.inpuntEmpresa}
                  size="small"
                  acountType="NumeroCuentaActivo"
                  onClick={handleOpen}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                {errors.NumeroCuentaActivo && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCuentaActivo}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="NumeroCuentaDepreciacion"
                  name="NumeroCuentaDepreciacion"
                  label="Número Cuenta Depreciación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCuentaDepreciacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                  acountType="NumeroCuentaDepreciacion"
                  onClick={handleOpen}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                {errors.NumeroCuentaDepreciacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCuentaDepreciacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <TextField
                  id="NumeroCuentaGastoDepreciacion"
                  name="NumeroCuentaGastoDepreciacion"
                  label="Número Cuenta Gasto Depreciación"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.NumeroCuentaGastoDepreciacion}
                  className={styles.inpuntEmpresa}
                  size="small"
                  acountType="NumeroCuentaGastoDepreciacion"
                  onClick={handleOpen}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                {errors.NumeroCuentaGastoDepreciacion && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.NumeroCuentaGastoDepreciacion}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4} container justifyContent="center">
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
              <Grid item xs={4} container justifyContent="center">
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
              <Grid item xs={4} container justifyContent="center">
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
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    usehistory.push(`./ActGrupoView`);
                  }}
                >
                  Regresar
                </Button>
                <Button onClick={handleSubmit} variant="contained">
                  {rowUpdate ? "Actualizar" : "Agregar"}
                </Button>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Divider />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      {id && (
        <CatCuentasModal
          id={id}
          open={open}
          handleClose={handleClose}
          controller="ConCatalogo/GetConCatDetalle"
          model={model}
          setForm={setForm}
          form={form}
        />
      )}
    </div>
  );
};

export default ActGrupo;
