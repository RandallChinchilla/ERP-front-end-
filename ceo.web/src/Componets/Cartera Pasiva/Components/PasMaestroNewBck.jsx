import { makeStyles } from "@material-ui/core";
import {
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import formJson from "../Data/pasMaestroData.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { SelectList } from "../../CrossComponets/SelectList";
import SearchIcon from "@mui/icons-material/Search";
//import { SelectAportanteModal } from "../../Modales/SelectAportanteModal";
import {
  columnsPasAportanteModal,
  routesPasAportanteApi,
} from "../Interfaces/interfacePasAportante";

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
  textfield: { width: "100%" },
  gridContainer: { paddingRight: 5, paddingLeft: 5 },
  button: { margin: "1px" },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
}));

const initialValues = {};
const requiredFields = {};

export const PasMaestroNewBck = () => {
  const userLogged = JSON.parse(localStorage.getItem("myuser"));
  const userLoggedToken = localStorage.getItem("mytoken");
  for (const input of formJson) {
    initialValues[input.name] = input.value;
    let shema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        shema = shema.required("Este campo es requerido");
      }
    }
    requiredFields[input.name] = shema;
  }

  const validationshema = Yup.object({ ...requiredFields });
  initialValues.nombreEmpresa = userLogged.NombreEmpresa;
  initialValues.Usuario = userLogged.UserName;
  initialValues.CodigoEmpresa = userLogged.CodigoEmpresa;
  initialValues.Id = userLogged.Id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationshema),
  });

  const styles = useStyles();
  const { rowUpdate } = useLocation();
  let usehistory = useHistory();
  const [open, setOpen] = useState(false);
  const [openInstrumento, setOpenInstrumento] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleOpenInstrumento = () => setOpenInstrumento(true);
  const handleOpenInstrumento = () => {
    console.log("modal open");
  };
  const handleCloseInstrumento = () => setOpenInstrumento(false);

  const onSubmit = (data) => {
    // handleSubmitLogin(data);
    console.log(data);
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
                  Maestro
                </Typography>
              </Grid>
              <form
                className={styles.form}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  pl={5}
                  pr={5}
                >
                  {formJson.map(
                    ({
                      type,
                      typeInput,
                      name,
                      placeholder,
                      label,
                      xs,
                      controller,
                      fieldName,
                      data,
                      inputFormat,
                      disabled,
                    }) => {
                      switch (type) {
                        case "textSearch":
                          return (
                            <Grid
                              key={name}
                              item
                              xs={xs}
                              container
                              justifyContent="center"
                            >
                              <Controller
                                key={name}
                                name={name}
                                control={control}
                                render={({ field }) => (
                                  <TextField
                                    className={styles.textfield}
                                    onClick={handleOpen}
                                    label={label}
                                    {...field}
                                    value={field.value}
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="start">
                                          <SearchIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                    size="small"
                                  />
                                )}
                              ></Controller>
                            </Grid>
                          );

                        case "text":
                          return (
                            <Grid
                              key={name}
                              item
                              xs={xs}
                              container
                              justifyContent="center"
                            >
                              <TextField
                                label={label}
                                {...register(name)}
                                type={typeInput}
                                placeholder={placeholder}
                                size="small"
                                className={styles.textfield}
                                disabled={disabled}
                              />
                              {errors[name] && (
                                <FormHelperText id="my-helper-text" error>
                                  {errors[name]["message"]}
                                </FormHelperText>
                              )}
                            </Grid>
                          );
                        case "select":
                          return (
                            <Controller
                              key={name}
                              name={name}
                              control={control}
                              render={({ field }) => (
                                <SelectList
                                  name={name}
                                  label={label}
                                  field={field}
                                  controller={controller}
                                  fieldName={fieldName}
                                  xs={xs}
                                  errors={errors}
                                  dataJson={data}
                                />
                              )}
                            ></Controller>
                          );
                        case "date":
                          return (
                            <Grid
                              item
                              xs={xs}
                              className={styles.grid}
                              key={name}
                            >
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <Controller
                                  name={name}
                                  control={control}
                                  render={({ field }) => (
                                    <DesktopDatePicker
                                      label={label}
                                      inputFormat={inputFormat}
                                      onChange={(newvalue) => {
                                        field.onChange(
                                          new Date(newvalue).toISOString()
                                        );
                                      }}
                                      value={field.value}
                                      renderInput={(params) => (
                                        <TextField size="small" {...params} />
                                      )}
                                    />
                                  )}
                                ></Controller>
                              </LocalizationProvider>
                              {errors[name] && (
                                <FormHelperText id="my-helper-text" error>
                                  {errors[name]["message"]}
                                </FormHelperText>
                              )}
                            </Grid>
                          );
                      }
                    }
                  )}
                  <Grid item xs={12} container justifyContent="end">
                    <Button color="secondary" variant="contained">
                      Regresar
                    </Button>
                    <Button color="primary" type="submit" variant="contained">
                      Agregar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      {/* <SelectAportanteModal
        columns={columnsPasAportanteModal}
        routeApi={routesPasAportanteApi.get}
        open={open}
        handleClose={handleClose}
        setValue={setValue}
        field="CodigoAportante"
      /> */}
    </div>
  );
};
