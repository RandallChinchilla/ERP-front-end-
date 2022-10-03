import { Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  inpunt: { width: "100%" },
}));

export const FormInput = ({
  register,
  errors,
  label,
  name,
  type,
  placeholder,
  ...props
}) => {
  const styles = useStyles();

  console.log(...props);

  return (
    <Grid item xs={3} container justifyContent="center">
      <TextField
        {...register(name)}
        label={label}
        type={type}
        className={styles.inpuntEmpresa}
        placeholder={placeholder}
        size="small"
      />
      {errors[props.name] && <div>{errors[props.name].message}</div>}
    </Grid>
  );
};
