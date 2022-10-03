import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Button,
  FormHelperText,
  Grid,
  Input,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";
import React from "react";
import { useData } from "../../Hooks/useData";
import { useForm } from "../../Hooks/useForm";
import { useGetData } from "../../Hooks/useGetData";

const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  paper: {
    width: 500,
    height: 600,
  },
  inpunt: {
    width: 400,
    marginBottom: 30,
  },
  button: {
    width: 400,
  },
  select: {
    width: 400,
    marginBottom: 15,
  },
}));

const validationsForm = (form) => {
  let errors = {};
  if (!form.Username) {
    errors.Username = "Debes ingresa un usuario";
    errors.error = true;
  }
  if (!form.Password) {
    errors.Password = "Debes ingresar contraseña";
    errors.error = true;
  }
  if (!form.codigoEmpresa) {
    errors.codigoEmpresa = "Debe seleccionar una empresa";
    errors.error = true;
  }
  return errors;
};

export default function Autenticacion() {
  const initialForm = {
    Username: "",
    Password: "",
    codigoEmpresa: "",
    RememberMe: true,
  };

  const styles = useStyles();
  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );
  const { response, handleSubmitLogin } = useData(form);

  const { Data, Error } = useGetData("ParEmpresa/GetParEmpresas");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

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
            <Grid container justifyContent="center">
              <FormControl>
                <InputLabel htmlFor="my-input">Usuario</InputLabel>
                <Input
                  id="username"
                  name="Username"
                  className={styles.inpunt}
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.Username && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Username}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Contaseña</InputLabel>
                <Input
                  id="password"
                  name="Password"
                  className={styles.inpunt}
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.Password && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Password}
                  </FormHelperText>
                )}
              </FormControl>
              <div>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
                  <Select
                    className={styles.select}
                    labelId="demo-simple-select-label"
                    id="codigoEmpresa"
                    name="codigoEmpresa"
                    label="Estado"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.codigoEmpresa}
                  >
                    {Data &&
                      options.map((item) => (
                        <MenuItem
                          key={item.CodigoEmpresa}
                          value={item.CodigoEmpresa}
                        >
                          {item.Nombre}
                        </MenuItem>
                      ))}
                  </Select>
                  {errors.codigoEmpresa && (
                    <FormHelperText id="my-helper-text" error>
                      {errors.codigoEmpresa}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <FormControl>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmitLogin}
                  className={styles.button}
                  disabled={errors.error}
                >
                  Ingresar
                </Button>
              </FormControl>
              <Grid mt={5}>
                <Typography variant="caption" display="block" gutterBottom>
                  Versión 1.2 DMDIntersoft 2022
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
}
