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
    if (!form.Periodo) {
        errors.Periodo = "Debe ingresar un período";
        errors.error = true;
      }
    return errors;
  };

export default function SelectPeriodo(){
    const initialForm = {
        Periodo: "",
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
           <InputLabel id="demo-simple-select-label">Período</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="Periodo"
            name="Periodo"
            label="Periodo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.Periodo}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEmpresa}
             value={item.codigoEmpresa}
             >
               {item.periodo}
               </MenuItem>
             ))}
          </Select>
          {errors.Periodo && (
                <FormHelperText id="my-helper-text" error>
                  {errors.Periodo}
                </FormHelperText>
              )}  
          </>
      )}