import { Grid, TextField, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import React from "react";

const Marca = () => {
  return (
    <Grid container direction="column" justify="center" alignContent="center">
      <Typography
        variant="overline"
        style={{ marginTop: 10, alignSelf: "center", fontSize: 16 }}
      >
        {" "}
        Agregar Marca
      </Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="ingrese su marca"
      />
    </Grid>
  );
};

export default Marca;
