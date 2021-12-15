import { Select, MenuItem, FormHelperText } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";

const validationsForm = (form) => {
  let errors = {};
  if (!form.Banco) {
    errors.Banco = "Debe ingresar un banco";
    errors.error = true;
  }
  return errors;
};

export default function SelectBanco(editValue) {
  const initialForm = {
    NumeroBanco: "",
    RememberMe: true,
  };

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const { Data, Error, setData } = useGetData("ParBanco");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;
  console.log(options);
  return (
    <>
      <InputLabel id="demo-simple-select-label">Banco</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="Banco"
        name="Banco"
        label="Banco"
        onChange={handleChange}
        onBlur={handleBlur}
        value={editValue.value != "" ? editValue.value : form.NumeroBanco}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.CodigoEmpresa} value={item.CodigoEmpresa}>
              {item.Descripcion}
            </MenuItem>
          ))}
      </Select>
      {errors.Banco && (
        <FormHelperText id="my-helper-text" error>
          {errors.Banco}
        </FormHelperText>
      )}
    </>
  );
}
