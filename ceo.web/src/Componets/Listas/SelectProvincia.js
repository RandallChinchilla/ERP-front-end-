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
    if (!form.Provincia) {
        errors.Provincia = "Debe ingresar una provincia";
        errors.error = true;
      }
    return errors;
  };

export default function SelectProvincia(){
    const initialForm = {
        Provincia: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParProvincium");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Provincia"
            name="Provincia"
            label="Provincia"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Provincia}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.CodigoPais}
             value={item.CodigoPais}
             >
               {item.Descripcion}
               </MenuItem>
             ))}
          </Select>
          {errors.Provincia && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Provincia}
                </FormHelperText>
              )}  
          </>
      )}