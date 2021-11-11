import {
  Grid,
  Typography,
  Paper,
  Input,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@material-ui/core";

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
    marginBottom: 15,
  },
  button: {
    width: 400,
  },
  select: {
    width: 400,
    marginBottom: 15,
  },
}));

export default function Autenticacion() {
  const styles = useStyles();

  const [CodigoEmpresa, setCodigoEmpresa] = React.useState("");

  const handleChangeCodigoEmpresa = (event) => {
    setCodigoEmpresa(event.target.value);
  };

  return (
    <Grid mb={4} container justifyContent="center">
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
              <Input id="email" className={styles.inpunt} type="email" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Contaseña</InputLabel>
              <Input id="password" className={styles.inpunt} type="password" />
            </FormControl>

            <div>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
                <Select
                  className={styles.select}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Estado"
                  onChange={handleChangeCodigoEmpresa}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </div>

            <FormControl>
              <Button
                variant="contained"
                color="success"
                className={styles.button}
              >
                Ingresar
              </Button>
            </FormControl>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
