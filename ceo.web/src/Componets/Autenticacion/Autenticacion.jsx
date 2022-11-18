import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import formJson from "./Data/autData.json";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectList } from "../CrossComponets/SelectList";
import { useAutentication } from "./Hooks/useAutentication";

const useStyles = makeStyles(() => ({
  iconos: {
    cursor: "pointer",
  },
  paper: {
    width: 500,
    height: 600,
  },
  textfield: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
  select: {
    width: 400,
    marginBottom: 15,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
}));

const initialValues = {};
const requiredFields = {};
export default function Autenticacion() {
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationshema),
  });

  const styles = useStyles();
  const { handleSubmitLogin } = useAutentication();

  const onSubmit = (data) => {
    handleSubmitLogin(data);
  };

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            CEO
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid mb={4} mt={20} container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box container sx={{ maxWidth: "100%" }}>
            <Grid>
              <Typography
                component="h1"
                variant="h6"
                noWrap
                sx={{
                  flexGrow: 1,
                  color: blue[600],
                  textAlign: "center",
                  fontSize: 16,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              >
                Autenticate
              </Typography>
            </Grid>
            <form
              className={styles.form}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container justifyContent="center" spacing={2} pl={5} pr={5}>
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
                              label={label}
                              {...register(name)}
                              type={typeInput}
                              placeholder={placeholder}
                              size="small"
                              className={styles.textfield}
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
                                errors={errors[name]}
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
                    variant="contained"
                    type="submit"
                    color="success"
                    className={styles.button}
                    disabled={errors.error}
                  >
                    Ingresar
                  </Button>
                </Grid>
                <Grid mt={5}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Versión 1.6 DMDIntersoft 2022
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
}
