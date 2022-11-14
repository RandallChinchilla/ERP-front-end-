import React, { useState } from "react";
// import formJson from "../Cartera Pasiva/Data/pasDataAportante.json";
import * as Yup from "yup";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectList } from "./SelectList";
import { makeStyles } from "@material-ui/core";
import { postAction } from "../../Helpers/postHelper";
import { useDispatch, useSelector } from "react-redux";
import { updateAlert } from "../../Actions/Index";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useHistory } from "react-router-dom";

const initialValues = {};
const requiredFields = {};

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

export const Form = ({ formJson, title, urlApi, rowUpdate }) => {
  const userLogged = JSON.parse(localStorage.getItem("myuser"));
  const userLoggedToken = localStorage.getItem("mytoken");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state.alert;
  const styles = useStyles();
  let usehistory = useHistory();
  // const [value, setValue] = useState(new Date().toISOString().slice(0, 10));

  for (const input of formJson) {
    initialValues[input.nameId ? input.nameId : input.name] = input.value;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required("Este campo es requerido");
      }
    }
    requiredFields[input.nameId ? input.nameId : input.name] = schema;
  }
  const validationschema = Yup.object({ ...requiredFields });

  initialValues.nombreEmpresa = userLogged.NombreEmpresa;
  initialValues.Usuario = userLogged.UserName;
  initialValues.CodigoEmpresa = userLogged.CodigoEmpresa;

  console.log(rowUpdate);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: rowUpdate ? rowUpdate : initialValues,
    resolver: yupResolver(validationschema),
  });

  const [date, setDate] = useState("");

  const onSubmit = (data) => {
    postAction(urlApi.post, data, userLoggedToken).then((res) => {
      console.log(res);
      if (res.IsSuccess) {
        usehistory.push(urlApi.navigationBack);
      } else {
        dispatch(
          updateAlert({
            ...alert,
            open: true,
            severity: "error",
            message: res.Message,
          })
        );
      }
    });
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
                  {title}
                </Typography>
              </Grid>
              <form
                className={styles.form}
                noValidate
                // onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
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
                      name,
                      nameId,
                      placeholder,
                      label,
                      disabled,
                      xs,
                      controller,
                      fieldName,
                      data,
                      inputFormat,
                    }) => {
                      switch (type) {
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
                                //key={name}
                                label={label}
                                {...register(name)}
                                type={type}
                                className={styles.textfield}
                                placeholder={placeholder}
                                size="small"
                                disabled={disabled}
                              />
                              {errors[name] && (
                                <FormHelperText id="my-helper-text" error>
                                  {errors[name]["message"]}
                                </FormHelperText>
                              )}
                            </Grid>
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
                                          // .slice(0, 10)
                                        );
                                      }}
                                      value={field.value}
                                      // {...field}
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
                        case "checkbox":
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
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        onChange={(e) =>
                                          field.onChange(e.target.checked)
                                        }
                                        checked={field.value}
                                      />
                                    }
                                    label={label}
                                    labelPlacement="start"
                                    className={styles.textfield}
                                    size="medium"
                                  />
                                )}
                              ></Controller>
                            </Grid>
                          );
                        case "select":
                          return (
                            <Controller
                              key={nameId ? nameId : name}
                              name={nameId ? nameId : name}
                              control={control}
                              render={({ field }) => (
                                <SelectList
                                  name={name}
                                  label={label}
                                  field={field}
                                  controller={controller}
                                  fieldName={fieldName}
                                  xs={xs}
                                  errors={errors[nameId ? nameId : name]}
                                  dataJson={data}
                                />
                              )}
                            ></Controller>
                          );
                        default:
                          break;
                      }
                    }
                  )}
                  <Grid item xs={12} container justifyContent="end">
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => {
                        usehistory.push(urlApi.navigationBack);
                      }}
                    >
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
    </div>
  );
};
