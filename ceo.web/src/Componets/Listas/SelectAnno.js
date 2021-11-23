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
    if (!form.Anno) {
        errors.Anno = "Debe ingresar un año";
        errors.error = true;
      }
    return errors;
  };

export default function SelectAnno(){
    const initialForm = {
        Anno: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
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
          {errors.Anno && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Anno}
                </FormHelperText>
              )}  
          </>
      )}