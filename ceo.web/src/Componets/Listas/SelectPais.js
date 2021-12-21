import { Select, MenuItem, FormHelperText } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";

// const validationsForm = (form) => {
//   let errors = {};
//   if (!form.CodigoPais) {
//     errors.CodigoPais = "Debe ingresar un país";
//     errors.CodigoPais = true;
//   }
//   return errors;
// };

export default function SelectPais({ form, handleBlur, handleChange }) {
  // const initialForm = {
  //   codigoPais: form ? form.codigoPais : "",
  // };

  // const { form, errors, handleChange, handleBlur } = useForm(
  //   initialForm,
  //   validationsForm
  // );

  const { Data, Error, setData } = useGetData("ParPais");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">País</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="codigoPais"
        name="codigoPais"
        label="Pais"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.codigoPais}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.codigoPais} value={item.codigoPais}>
              {item.nombre}
            </MenuItem>
          ))}
      </Select>
      {/* {errors.CodigoPais && (
        <FormHelperText id="my-helper-text" error>
          {errors.CodigoPais}
        </FormHelperText>
      )} */}
    </>
  );
}
