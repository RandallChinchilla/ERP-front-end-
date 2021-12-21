import { Select, MenuItem } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectSucursal({ form, handleBlur, handleChange }) {
  const { Data, Error, setData } = useGetData("ParSucursal/GetParSucursales");

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">Sucursal</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="CodigoSucursal"
        name="CodigoSucursal"
        label="CodigoSucursal"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.CodigoSucursal}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item.CodigoSucursal} value={item.CodigoSucursal}>
              {item.NombreSucursal}
            </MenuItem>
          ))}
      </Select>
    </>
  );
}
