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
    if (!form.CuentaUtilidadNoDistribuida) {
        errors.CuentaUtilidadNoDistribuida = "Debe ingresar el número de cuenta utilidad no distribuida";
        errors.error = true;
      }
    return errors;
  };

export default function SelectCuentaUtilidadNoDis(){
    const initialForm = {
        CuentaUtilidadNoDistribuida: "",
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
           <InputLabel id="demo-simple-select-label">Cuenta Utilidad No Distribuida</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="CuentaUtilidadNoDistribuida"
            name="CuentaUtilidadNoDistribuida"
            label="Cuenta Utilidad No Distribuida"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CuentaUtilidadNoDistribuida}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoEmpresa}
             value={item.codigoEmpresa}
             >
               {item.numeroCuentaUtilidadNoDistribuida}
               </MenuItem>
             ))}
          </Select>
          {errors.CuentaUtilidadNoDistribuida && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CuentaUtilidadNoDistribuida}
                </FormHelperText>
              )}  
          </>
      )}