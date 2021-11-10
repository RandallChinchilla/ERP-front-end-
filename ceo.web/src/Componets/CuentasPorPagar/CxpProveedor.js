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
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Link, NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
}));



export const CxpProveedor = () => {
  const styles = useStyles();

  const [CodigoTipoId, setCodigoTipoId] = React.useState('');
  const [CodigoPais, setCodigoPais] = React.useState('');
  const [CodigoEstado, setCodigoEstado] = React.useState('');

  const handleChangeCodigoTipoId = (event) => {
    setCodigoTipoId(event.target.value);
  };

  const handleChangeCodigoPais = (event) => {
    setCodigoPais(event.target.value);
  };

  const handleChangeCodigoEstado = (event) => {
    setCodigoEstado(event.target.value);
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
        Proveedores
      </Typography>

      <Grid mb={4} container alignItems="center">
          
        <Grid item xs={3} marginTop={1} marginBottom={1}>
        <Box sx={{width: 210}}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo Id</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChangeCodigoTipoId}
          >
             <MenuItem value={1}>1</MenuItem>
             <MenuItem value={2}>2</MenuItem>
             <MenuItem value={3}>3</MenuItem>
          </Select>
          </FormControl>
         </Box>
        </Grid>
          
          <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            className={styles.inputMaterial}
            id="outlined-basic"
            label="Número Id"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
          </Grid>
          
          <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
           </Grid>

          <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Primer Apellido"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
          </Grid>

          <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Segundo Apellido"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
           </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>
         
         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Teléfono Emergencias"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         <Box sx={{width: 210 }} >
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">País</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Pais"
          onChange={handleChangeCodigoPais}
          >
             <MenuItem value={1}>1</MenuItem>
             <MenuItem value={2}>2</MenuItem>
             <MenuItem value={3}>3</MenuItem>
          </Select>
          </FormControl>
         </Box>
         </Grid>
         
         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Dirección"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Contacto"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>
         
         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Celular"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Plazo de Pago"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Observaciones"
            minRows= {3}
            style={{ width: 210 }}
          />
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         <Box sx={{width: 210 }} >
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Estado"
          onChange={handleChangeCodigoEstado}
          >
             <MenuItem value={1}>1</MenuItem>
             <MenuItem value={2}>2</MenuItem>
             <MenuItem value={3}>3</MenuItem>
          </Select>
          </FormControl>
         </Box>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Usuario"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         </Grid>
         
         <Grid item xs={3} marginTop={1} marginBottom={1}>
         <Stack spacing={2} direction="row">
         <Button variant="contained" >Aceptar</Button>
         
         <NavLink tag={Link} to="/CxpProveedorView" 
           style={isActive => ({
            color: isActive ? "white" : "white"
          })}
         >
         <Button variant="outlined" color="error" >Cancelar</Button>
         </NavLink>
         
         </Stack>
         </Grid>

    </Grid>

    </Grid>

);
};