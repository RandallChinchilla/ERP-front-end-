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
    if (!form.Empresa) {
        errors.Empresa = "Debe ingresar una empresa";
        errors.error = true;
      }
    return errors;
  };

export default function SelectEmpresa(){
    const initialForm = {
        Estado: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParEmpresa");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Código Empresa</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Empresa"
            name="Empresa"
            label="Empresa"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Empresa}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.CodigoEmpresa}
             value={item.CodigoEmpresa}
             >
               {item.Nombre}
               </MenuItem>
             ))}
          </Select>
          {errors.Empresa && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Empresa}
                </FormHelperText>
              )}  
          </>
      )}