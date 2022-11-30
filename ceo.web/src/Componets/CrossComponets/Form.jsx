import React, { useState } from "react";
import * as Yup from "yup";
import { Box, Grid, InputAdornment, Paper, Typography } from "@mui/material";
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
import { postAction } from "../../Helpers/postHelper";
import { useDispatch, useSelector } from "react-redux";
import { updateAlert, updateModal } from "../../Actions/Index";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useHistory } from "react-router-dom";
import { putAction } from "../../Helpers/putHelper";
import { useStyles } from "./Styles/crossStylesComponent";
import SearchIcon from "@mui/icons-material/Search";
import { TableModal } from "./TableModal";

const initialValues = {};
const requiredFields = {};

export const Form = ({ formJson, title, urlApi, rowUpdate, typeMode }) => {
  const userLogged = JSON.parse(localStorage.getItem("myuser"));
  const userLoggedToken = localStorage.getItem("mytoken");
  const [date, setDate] = useState(new Date());
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state.alert;
  const styles = useStyles();
  let usehistory = useHistory();
  const [update, setUpdate] = useState(false);
  const [openModal, setOpenModal] = useState([
    { open: false, columnsModa: [], apiRoute: "", name: "", nameId: "" },
  ]);
  const handleClose = () => setOpenModal(false);

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
  initialValues.Id = userLogged.Id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: rowUpdate ? rowUpdate : initialValues,
    resolver: yupResolver(validationschema),
  });

  const onSubmit = (data) => {
    let response = rowUpdate
      ? putAction(urlApi.update, data)
      : postAction(urlApi.post, data, userLoggedToken);
    response.then((res) => {
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

  const handleOpenModal = (
    columnsModal,
    apiRoute,
    name,
    nameId,
    setModalFields
  ) => {
    console.log(setModalFields);
    setOpenModal({
      open: true,
      columnsModal,
      apiRoute: apiRoute,
      name: name,
      nameId: nameId,
      setModalFields,
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
                      columnsModal,
                      apiRouteModal,
                      setModalFields,
                    }) => {
                      switch (type) {
                        case "textSearch":
                          return (
                            <Grid
                              key={nameId}
                              item
                              xs={xs}
                              container
                              justifyContent="center"
                            >
                              <Controller
                                key={nameId}
                                name={nameId}
                                control={control}
                                render={({ field }) => (
                                  <TextField
                                    className={styles.textfield}
                                    onClick={() =>
                                      handleOpenModal(
                                        columnsModal,
                                        apiRouteModal,
                                        name,
                                        nameId,
                                        setModalFields
                                      )
                                    }
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
                                  ></TextField>
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
                                //key={name}
                                label={label}
                                {...register(name)}
                                type={type}
                                className={styles.textfield}
                                placeholder={placeholder}
                                size="small"
                                disabled={
                                  typeMode.onlyread && rowUpdate
                                    ? typeMode.onlyread
                                    : disabled
                                }
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
                                      className={styles.textfield}
                                      inputFormat={inputFormat}
                                      onChange={(newvalue) => {
                                        field.onChange(
                                          new Date(newvalue).toISOString()
                                        );
                                      }}
                                      value={field.value ? field.value : date}
                                      renderInput={(params) => (
                                        <TextField size="small" {...params} />
                                      )}
                                      disabled={
                                        typeMode.onlyread && rowUpdate
                                          ? typeMode.onlyread
                                          : disabled
                                      }
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
                                        checked={Boolean(field.value)}
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
                                  disabled={
                                    typeMode.onlyread && rowUpdate
                                      ? typeMode.onlyread
                                      : disabled
                                  }
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
                    {typeMode.onlyread && rowUpdate ? null : (
                      <Button color="primary" type="submit" variant="contained">
                        {rowUpdate ? "Actualizar" : "Agregar"}
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      {openModal.open && (
        <TableModal
          columnsModal={openModal.columnsModal}
          routeApi={openModal.apiRoute}
          open={openModal.open}
          handleClose={handleClose}
          setValue={setValue}
          field={openModal.nameId}
          name={openModal.name}
          setModalFields={openModal.setModalFields}
        />
      )}
    </div>
  );
};
