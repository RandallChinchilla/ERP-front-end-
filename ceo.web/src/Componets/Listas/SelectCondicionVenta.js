import { Select, MenuItem } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectCondicionVenta({
  form,
  handleBlur,
  handleChange,
}) {
  const { Data, Error, setData } = useGetData(
    "FelCondicionVentum/GetFelCondicionVentas"
  );

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">Condición Venta</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="CodigoCondicionVenta"
        name="CodigoCondicionVenta"
        label="CodigoCondicionVenta"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.CodigoCondicionVenta}
      >
        {Data &&
          options.map((item) => (
            <MenuItem
              key={item.codigoCondicionVenta}
              value={item.codigoCondicionVenta}
            >
              {item.descripcion}
            </MenuItem>
          ))}
      </Select>
    </>
  );
}
