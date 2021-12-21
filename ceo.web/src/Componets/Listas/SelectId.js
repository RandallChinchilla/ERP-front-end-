import {
    Select,
    MenuItem,
  } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectId({form, handleBlur, handleChange}){

      const { Data, Error, setData } = useGetData("ParTipoIdentificacion");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;

      return(
          <>
           <InputLabel id="demo-simple-select-label">Tipo ID</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="TipoId"
            name="TipoId"
            label="TipoId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TipoId}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoTipoIdentificacion}
             value={item.codigoTipoIdentificacion}
             >
               {item.descripcion}
               </MenuItem>
             ))}
          </Select>
          </>
      )}