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
    if (!form.Canton) {
        errors.Canton = "Debe ingresar un cantón";
        errors.error = true;
      }
    return errors;
  };

export default function SelectCanton(){
    const initialForm = {
        Canton: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParCanton");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Cantón</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Canton"
            name="Canton"
            label="Canton"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Canton}
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
          {errors.Canton && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Canton}
                </FormHelperText>
              )}  
          </>
      )}