import {
    Select,
    MenuItem,
  } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export default function SelectAnno({ form, handleBlur, handleChange }){
    
      const { Data, Error, setData } = useGetData("ConPeriodo");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Año</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Anno"
            name="Anno"
            label="Anno"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Anno}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEmpresa}
             value={item.codigoEmpresa}
             >
               {item.anno}
               </MenuItem>
             ))}
          </Select>
          </>
      )}