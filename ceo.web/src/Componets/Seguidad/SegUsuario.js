import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
}));

export const SegUsuario = () => {
  const styles = useStyles();

  const [CodigoEmpresa, setCodigoEmpresa] = React.useState('');
  const [CodigoEstado, setCodigoEstado] = React.useState('');

  const handleChangeCodigoEmpresa = (event) => {
    setCodigoEmpresa(event.target.value);
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
        Usuarios
      </Typography>

      <Grid mb={4} container alignItems="center">
          

      <Grid item xs={3} marginTop={1} marginBottom={1}>
         <Box sx={{width: 210 }} >
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Codigo Empresa</InputLabel>
          <Select
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
         </Box>
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
            label="Nombre"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
           </Grid>

           <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Descripcion"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
         </Grid>

         <Grid item xs={3} marginTop={1} marginBottom={1}>
         <Stack component="form" noValidate spacing={3}>
          <TextField
           id="date"
           label="Fecha Ingreso"
           type="date"
           sx={{ width: 210 }}
           InputLabelProps={{
           shrink: true,
           }}
          />
          </Stack>
          </Grid>

          <Grid item xs={3} marginTop={1} marginBottom={1}>
         <Stack component="form" noValidate spacing={3}>
          <TextField
           id="date"
           label="Fecha Salida"
           type="date"
           sx={{ width: 210 }}
           InputLabelProps={{
           shrink: true,
           }}
          />
          </Stack>
          </Grid>

          <Grid item xs={3} marginTop={1} marginBottom={1}>
         <Stack component="form" noValidate spacing={3}>
          <TextField
           id="date"
           label="Fecha Expiración Password"
           type="date"
           sx={{ width: 210 }}
           InputLabelProps={{
           shrink: true,
           }}
          />
          </Stack>
          </Grid>

          <Grid item xs={3} marginTop={1} marginBottom={1}>
          <TextField
            id="outlined-basic"
            label="Indicador Reinicio de Password"
            variant="outlined"
            size="small"
            name="Descripcion"
          ></TextField>
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

         <Grid item xs={3}></Grid>
         <Grid item xs={3}></Grid>
         <Grid item xs={3}></Grid>
         <Grid item xs={3}></Grid>
         <Grid item xs={3}></Grid>
         
         <Grid item xs={3} marginTop={1} marginBottom={1}>
         
         <Stack spacing={2} direction="row">
         <Button variant="contained" >Aceptar</Button>
         
         <NavLink tag={Link} to="/SegUsuarioView" 
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