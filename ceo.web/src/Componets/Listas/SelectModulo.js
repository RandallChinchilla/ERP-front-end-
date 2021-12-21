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
    if (!form.Modulo) {
        errors.Modulo = "Debe ingresar un módulo";
        errors.error = true;
      }
    return errors;
  };

export default function SelectModulo(){
    const initialForm = {
        Modulo: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParModulo");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Módulo</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Modulo"
            name="Modulo"
            label="Modulo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Modulo}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoModulo}
             value={item.codigoModulo}
             >
               {item.descripcion}
               </MenuItem>
             ))}
          </Select>
          {errors.Modulo && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Modulo}
                </FormHelperText>
              )}  
          </>
      )}