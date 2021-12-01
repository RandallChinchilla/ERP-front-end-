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
    if (!form.CuentaGastoDiferencial) {
        errors.CuentaGastoDiferencial = "Debe ingresar el número de cuenta gasto diferencial";
        errors.error = true;
      }
    return errors;
  };

export default function SelectCuentaGastoDiferencial(){
    const initialForm = {
        CuentaGastoDiferencial: "",
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
           <InputLabel id="demo-simple-select-label">Cuenta Gasto Diferencial</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="CuentaGastoDiferencial"
            name="CuentaGastoDiferencial"
            label="Cuenta Gasto Diferencial"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CuentaGastoDiferencial}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEmpresa}
             value={item.codigoEmpresa}
             >
               {item.numeroCuentaGastoDiferencial}
               </MenuItem>
             ))}
          </Select>
          {errors.CuentaGastoDiferencial && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CuentaGastoDiferencial}
                </FormHelperText>
              )}  
          </>
      )}