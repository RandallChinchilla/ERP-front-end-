import {
    Select,
    MenuItem,
  } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectId({form, handleBlur, handleChange}){

      const { Data, Error, setData } = useGetData("FelTipoDocumento");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;

      return(
          <>
           <InputLabel id="demo-simple-select-label">Tipo Comprobante</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="codigoTipoDocumento"
            name="codigoTipoDocumento"
            label="codigoTipoDocumento"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.codigoTipoDocumento}
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
      )}