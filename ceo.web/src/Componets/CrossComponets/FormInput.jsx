import { TextField, Grid } from "@mui/material";
import React from "react";

export const FormInput = ({ register, errors, label, ...props }) => {
  return (
    <>
      <Grid item xs={3} container justifyContent="center">
        <TextField
          ref={register}
          id={props.id}
          name={props.name}
          type={props.type}
        />
        {errors[props.name] && <div>{errors[props.name].message}</div>}
      </Grid>
    </>
  );
};
