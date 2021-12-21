import { Select, MenuItem } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectUnidadMedida({ form, handleBlur, handleChange }) {
  const { Data, Error, setData } = useGetData("FelUnidadmedidum/GetFelUnidadMedidas");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">Unidad de Medida</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="UnidadMedida"
        name="UnidadMedida"
        label="UnidadMedida"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.CodigoUnidadMedida}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.codigoUnidadMedida} value={item.codigoUnidadMedida}>
              {item.descripcion}
            </MenuItem>
          ))}
      </Select>
    </>
  );
}
