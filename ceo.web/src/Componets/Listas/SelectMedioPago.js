import {
    Select,
    MenuItem,
  } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectMedioPago({form, handleBlur, handleChange}){

      const { Data, Error, setData } = useGetData("FelMediopago/GetFelMedioPagos");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;

      return(
          <>
           <InputLabel id="demo-simple-select-label">Medio Pago</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="codigoMedioPago"
            name="codigoMedioPago"
            label="codigoMedioPago"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.codigoMedioPago}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoMedioPago}
             value={item.codigoMedioPago}
             >
               {item.descripcion}
               </MenuItem>
             ))}
          </Select>
          </>
      )}