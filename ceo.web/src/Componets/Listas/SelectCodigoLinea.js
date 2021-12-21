import { Select, MenuItem } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectCodigoLinea({ form, handleBlur, handleChange }) {
  const { Data, Error, setData } = useGetData("IvtLinea/GetIvtLineas");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">Código Linea</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="CodigoLinea"
        name="CodigoLinea"
        label="CodigoLinea"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.CodigoLinea}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.CodigoEmpresa} value={item.CodigoEmpresa}>
              {item.Descripcion}
            </MenuItem>
          ))}
      </Select>
    </>
  );
}
