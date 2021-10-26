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
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useForm } from "../../Hooks/useForm";
import { useGetData } from "../../Hooks/useGetData";
import { Delete, Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { red, blue } from "@mui/material/colors";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  barra: {
    backgroundColor: blue[100] ,
  },
}));

const columns = [
  { id: "acciones", label: "Acciones", minWidth: 100 },
  { id: "code", label: "Código", minWidth: 170 },
  { id: "name", label: "Descripción", minWidth: 100 },
];

const initialForm = {
  Descripcion: "",
};

const validationsForm = (form) => {
  let errors = {};
  if (!form.Descripcion <= 0) {
    errors.Descripcion = "Debe ingresar una marca";
  }
  return errors;
};

const Marca = () => {
  const styles = useStyles();
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );
  const { Data, Error } = useGetData("ActMarca");

  if (Error) return null;
  if (!Data) return null;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
        Marca Activo
      </Typography>

      <Grid mb={4} container alignItems="center">
        <Grid item mr={1}>
          <TextField
            id="outlined-basic"
            label="Ingresa tu marca"
            variant="outlined"
            size="small"
            name="Descripcion"
            value={form.Descripcion}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></TextField>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddCircleOutlineIcon />}
          >
            Agregar
          </Button>
        </Grid>
      </Grid>

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={12}>
                  Lista de Marcas
                </TableCell>
              </TableRow>
              <TableRow >
                {columns.map((column) => (
                  <TableCell className={styles.barra}
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.map((row) => (
                <TableRow key={row.codigoMarca}>
                  <TableCell>
                    <Edit style={{ color: blue[600], width:40}} />
                    
                    <Delete style={{ color: red[700] }} />
                  </TableCell>
                  <TableCell>{row.codigoMarca}</TableCell>
                  <TableCell>{row.descripcion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={Data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
};

export default Marca;
