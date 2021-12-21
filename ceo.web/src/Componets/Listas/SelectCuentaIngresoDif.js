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
    if (!form.CuentaIngresoDiferencial) {
        errors.CuentaIngresoDiferencial = "Debe ingresar el número de cuenta ingreso diferencial";
        errors.error = true;
      }
    return errors;
  };

export default function SelectCuentraIngresoDiferencial(){
    const initialForm = {
        CuentaIngresoDiferencial: "",
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
           <InputLabel id="demo-simple-select-label">Cuenta Ingreso Diferencial</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="CuentaIngresoDiferencial"
            name="CuentaIngresoDiferencial"
            label="Cuenta Ingreso Diferencial"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CuentaIngresoDiferencial}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEmpresa}
             value={item.codigoEmpresa}
             >
               {item.numeroCuentaIngresoDiferencial}
               </MenuItem>
             ))}
          </Select>
          {errors.CuentaIngresoDiferencial && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CuentaIngresoDiferencial}
                </FormHelperText>
              )}  
          </>
      )}