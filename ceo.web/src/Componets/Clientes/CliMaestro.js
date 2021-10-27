import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
}));

export const CliMaestro = () => {
  const styles = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      spacing={3}
    >
      <Typography
        variant="overline"
        style={{ marginTop: 10, alignSelf: "center", fontSize: 16 }}
      >
        Maestro Clientes
      </Typography>

      <Grid mb={4} container alignItems="center">
        <Grid item mr={1}>
          <TextField
            className={styles.inputMaterial}
            id="outlined-basic"
            label="Número Id"
            variant="outlined"
            size="small"
            name="Descripcion"
            // value={form.Descripcion}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // required
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Primer Apellido"
            variant="outlined"
            size="small"
            name="Descripcion"
            // value={form.Descripcion}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // required
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Segundo Apellido"
            variant="outlined"
            size="small"
            name="Descripcion"
            // value={form.Descripcion}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // required
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            size="small"
            name="Descripcion"
            // value={form.Descripcion}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // required
          ></TextField>
        </Grid>
        <Grid item mt={3}>
          <TextField
            id="outlined-basic"
            label="Contacto"
            variant="outlined"
            size="small"
            name="Descripcion"
            // value={form.Descripcion}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // required
          ></TextField>
        </Grid>
        {/* <Grid item>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddCircleOutlineIcon />}
            // onClick={handleaddMarca}
          >
            Agregar
          </Button>
        </Grid> */}
      </Grid>
    </Grid>
  );
};
