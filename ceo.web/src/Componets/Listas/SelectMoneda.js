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
    if (!form.Moneda) {
        errors.Moneda = "Debe ingresar una moneda";
        errors.error = true;
      }
    return errors;
  };

export default function SelectMoneda(){
    const initialForm = {
        Estado: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParMonedum");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Moneda"
            name="Moneda"
            label="Moneda"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Moneda}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEmpresa}
             value={item.codigoEmpresa}
             >
               {item.descripcion}
               </MenuItem>
             ))}
          </Select>
          {errors.Moneda && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Moneda}
                </FormHelperText>
              )}  
          </>
      )}