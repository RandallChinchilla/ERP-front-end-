import { Select, MenuItem, FormHelperText } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";

const validationsForm = (form) => {
  let errors = {};
  if (!form.codigoEstado) {
    errors.codigoEstado = "Debe ingresar un estado";
    errors.error = true;
  }
  return errors;
};

export default function SelectEstado(data) {
  const initialForm = {
    codigoEstado: data ? data.CodigoEstado : "",
    RememberMe: true,
  };

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const { Data, Error, setData } = useGetData("ParEstado");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">Estado</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="codigoEstado"
        name="codigoEstado"
        label="Estado"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.codigoEstado}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.codigoEstado} value={item.codigoEstado}>
              {item.descripcion}
            </MenuItem>
          ))}
      </Select>
      {errors.Estado && (
        <FormHelperText id="my-helper-text" error>
          {errors.Estado}
        </FormHelperText>
      )}
    </>
  );
}
