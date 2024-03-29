import { Select, MenuItem } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectTipoComprobante({
  form,
  handleBlur,
  handleChange,
}) {
  const { Data, Error, setData } = useGetData(
    "FelTipoDocumento/GetFelTipoDocumentos"
  );

  if (Error) return null;
  if (!Data) return null;

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">Tipo Comprobante</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="CodigoTipoDocumento"
        name="CodigoTipoDocumento"
        label="CodigoTipoDocumento"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.CodigoTipoDocumento}
      >
        {Data &&
          options.map((item) => (
            <MenuItem
              key={item.codigoTipoDocumento}
              value={item.codigoTipoDocumento}
            >
              {item.descripcion}
            </MenuItem>
          ))}
      </Select>
    </>
  );
}
