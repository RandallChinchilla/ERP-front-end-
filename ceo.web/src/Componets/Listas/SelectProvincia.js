import { Select, MenuItem, FormHelperText } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";

const validationsForm = (form) => {
  let errors = {};
  if (!form.CodigoProvincia) {
    errors.CodigoProvincia = "Debe ingresar una provincia";
    errors.error = true;
  }
  return errors;
};

export default function SelectProvincia(data) {
  const initialForm = {
    CodigoProvincia: data ? data.CodigoProvincia : "",
    RememberMe: true,
  };

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const { Data, Error, setData } = useGetData("ParProvincium");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;
  console.log(options);
  return (
    <>
      <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="CodigoProvincia"
        name="CodigoProvincia"
        label="Provincia"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.CodigoProvincia}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.CodigoProvincia} value={item.CodigoProvincia}>
              {item.Descripcion}
            </MenuItem>
          ))}
      </Select>
      {errors.CodigoProvincia && (
        <FormHelperText id="my-helper-text" error>
          {errors.CodigoProvincia}
        </FormHelperText>
      )}
    </>
  );
}
