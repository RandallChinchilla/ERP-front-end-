import { Select, MenuItem, FormHelperText } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";

const validationsForm = (form) => {
  let errors = {};
  if (!form.CodigoCanton) {
    errors.CodigoCanton = "Debe ingresar un cantón";
    errors.error = true;
  }
  return errors;
};

export default function SelectCanton(data) {
  const initialForm = {
    CodigoCanton: data ? data.CodigoCanton : "",
    RememberMe: true,
  };

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const { Data, Error, setData } = useGetData("ParCanton");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;
  console.log(options);
  return (
    <>
      <InputLabel id="demo-simple-select-label">Cantón</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="CodigoCanton"
        name="CodigoCanton"
        label="Canton"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.CodigoCanton}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.CodigoCanton} value={item.CodigoCanton}>
              {item.Descripcion}
            </MenuItem>
          ))}
      </Select>
      {errors.CodigoCanton && (
        <FormHelperText id="my-helper-text" error>
          {errors.CodigoCanton}
        </FormHelperText>
      )}
    </>
  );
}
