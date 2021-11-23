import {
    Select,
    MenuItem,
    FormHelperText,
  } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";
import { useForm } from "../../Hooks/useForm";

  const validationsForm = (form) => {
    let errors = {};
    if (!form.Estado) {
        errors.Estado = "Debe ingresar un estado";
        errors.error = true;
      }
    return errors;
  };

export default function SelectEstado(){
    const initialForm = {
        Estado: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParEstado");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Estado</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Estado"
            name="Estado"
            label="Estado"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Estado}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEstado}
             value={item.codigoEstado}
             >
               {item.descripcion}
               </MenuItem>
             ))}
          </Select>
          {errors.Estado && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Estado}
                </FormHelperText>
              )}  
          </>
      )}