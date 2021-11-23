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
    if (!form.Pais) {
        errors.Pais = "Debe ingresar un país";
        errors.error = true;
      }
    return errors;
  };

export default function SelectPais(){
    const initialForm = {
        Pais: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParPais");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">País</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Pais"
            name="Pais"
            label="Pais"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Pais}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoPais}
             value={item.codigoPais}
             >
               {item.nombre}
               </MenuItem>
             ))}
          </Select>
          {errors.Pais && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Pais}
                </FormHelperText>
              )}  
          </>
      )}