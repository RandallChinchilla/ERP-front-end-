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
    if (!form.CuentaUtilidadPeriodo) {
        errors.CuentaUtilidadPeriodo = "Debe ingresar el número de cuenta utilidad período";
        errors.error = true;
      }
    return errors;
  };

export default function SelectCuentaUtilidadPeriodo(){
    const initialForm = {
        CuentaUtilidadPeriodo: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ConParametro");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Cuenta Utilidad Período</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="CuentaUtilidadPeriodo"
            name="CuentaUtilidadPeriodo"
            label="Cuenta Utilidad Periodo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CuentaUtilidadPeriodo}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEmpresa}
             value={item.codigoEmpresa}
             >
               {item.numeroCuentaUtilidadPeriodo}
               </MenuItem>
             ))}
          </Select>
          {errors.CuentaUtilidadPeriodo && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CuentaUtilidadPeriodo}
                </FormHelperText>
              )}  
          </>
      )}