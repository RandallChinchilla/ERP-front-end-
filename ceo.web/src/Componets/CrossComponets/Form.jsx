import React, { useState } from "react";
// import formJson from "../Cartera Pasiva/Data/pasDataAportante.json";
import * as Yup from "yup";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
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

export const Form = ({ formJson, title, urlApi }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state.alert;
  const styles = useStyles();
  const userData = JSON.parse(localStorage.getItem("userLogged"));
  const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));

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

  initialValues.nombreEmpresa = userData.nombreEmpresa;
  initialValues.Usuario = userData.userName;
  initialValues.CodigoEmpresa = userData.codigoEmpresa;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationschema),
  });

  const [date, setDate] = useState("");

  const onSubmit = (data) => {
    postAction(urlApi.post, data, userLoggedToken).then((res) => {
      if (res.IsSuccess) {
        dispatch(
          updateAlert({
            ...alert,
            open: true,
            severity: "success",
            message: res.Message,
          })
        );
      } else {
        console.log("Instrumento no pudo ser creado");
        console.log(res);
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
                      value,
                      xs,
                      controller,
                      fieldName,
                      data,
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
                              key={name}
                              item
                              xs={xs}
                              className={styles.grid}
                            >
                              <TextField
                                id={name}
                                label={label}
                                {...register(name)}
                                type="date"
                                className={styles.textfield}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                size="small"
                              />
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
                              <FormControl component="fieldset">
                                <FormGroup>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={initialValues[value]}
                                      />
                                    }
                                    label={label}
                                    {...register(name)}
                                    labelPlacement="start"
                                    className={styles.textfield}
                                    size="medium"
                                  />
                                </FormGroup>
                              </FormControl>
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
    </div>
  );
};
