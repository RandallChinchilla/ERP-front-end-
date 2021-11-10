import React from "react"
import {
    Grid,
    TextField,
    Typography,
    Button,
  } from "@mui/material";
  import Stack from '@mui/material/Stack';
  import { Link, NavLink } from "react-router-dom";

export default function Registro(){
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
            Registro
          </Typography>
            
          <Grid item xs={4}></Grid>
          
          <Grid item xs={4}>
          
          <Grid item xs={12} marginTop={1} marginBottom={1}>
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                size="small"
                name="Descripcion"
              ></TextField>
               </Grid>
              
              <Grid item xs={12} marginTop={1} marginBottom={1}>
              <TextField
                id="outlined-basic"
                label="Primer Apellido"
                variant="outlined"
                size="small"
                name="Descripcion"
              ></TextField>
              </Grid>
    
              <Grid item xs={12} marginTop={1} marginBottom={1}>
              <TextField
                id="outlined-basic"
                label="Segundo Apellido"
                variant="outlined"
                size="small"
                name="Descripcion"
              ></TextField>
               </Grid>
             
             <Grid item xs={12}>
             <Stack spacing={2} direction="row">
             
             <Button variant="outlined" color="success" >Aceptar</Button>  
             <NavLink tag={Link} to="/Autenticacion" 
               style={isActive => ({
                color: isActive ? "white" : "white"
              })}
             >
             <Button variant="outlined" color="error" >Cancelar</Button>
             </NavLink>
             </Stack>
             </Grid>
             
             </Grid>
             <Grid item xs={4} marginTop={1} marginBottom={1}></Grid>
    
        </Grid>
    
    );
}