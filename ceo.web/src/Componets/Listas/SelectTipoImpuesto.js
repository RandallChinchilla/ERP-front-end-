import {
    Select,
    MenuItem,
  } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectTipoImpuesto({form, handleBlur, handleChange}){

      const { Data, Error, setData } = useGetData("FelTipoImpuesto/GetFelTipoImpuestos");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;

      return(
          <>
           <InputLabel id="demo-simple-select-label">Tipo Impuesto</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="codigoTipoImpuesto"
            name="codigoTipoImpuesto"
            label="codigoTipoImpuesto"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.codigoTipoImpuesto}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoTipoImpuesto}
             value={item.codigoTipoImpuesto}
             >
               {item.descripcion}
               </MenuItem>
             ))}
          </Select>
          </>
      )}