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
    Modal,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useGetData } from "../../Hooks/useGetData";
  import { Delete, Edit, Visibility } from "@material-ui/icons";
  import { makeStyles } from "@material-ui/core";
  import { red, blue, green } from "@mui/material/colors";
  import { Link, NavLink } from "react-router-dom";
import { borderColor, Box } from "@mui/system";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";  
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Autenticacion(){

  const [CodigoEmpresa, setCodigoEmpresa] = React.useState('');

  const handleChangeCodigoEmpresa = (event) => {
    setCodigoEmpresa(event.target.value);
  };

    return(
        <Grid mb={4} container alignItems="center">
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Box 
                container alignItems="center"
                >
                <Grid>
                <Grid item xs={12}>
                <Typography
                 component="h1"
                 variant="h6"
                 noWrap
                 sx={{ flexGrow: 1, color: blue[600], alignSelf: "center", fontSize: 16}}
            >
              Autenticacion
            </Typography>
            <br></br>
            </Grid>
                <Grid item xs={12} sx={{alignContent:"center"}}>
                <TextField id="outlined-basic" label="Usuario" variant="outlined" />
                </Grid>
                <br></br>
                <Grid item xs={12}>
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
                </Grid>
                <br></br>

                <Grid item xs={3} marginTop={1} marginBottom={1}>
                <Box sx={{width: 210 }} >
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
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
                <br></br>  
                <Grid item xs={12}>
                <Stack spacing={2} direction="row">
                <Button variant="contained" color="success"
                >Ingresar</Button>
                </Stack>
                </Grid>
                <br></br>            
                </Grid>
                </Box>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
      )
  }


