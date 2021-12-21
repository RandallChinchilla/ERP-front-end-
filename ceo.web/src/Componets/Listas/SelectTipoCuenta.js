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
    if (!form.TipoCuenta) {
        errors.TipoCuenta = "Debe seleccionar un tipo de cuenta";
        errors.error = true;
      }
    return errors;
  };

export default function SelectTipoCuenta(){
    const initialForm = {
        TipoCuenta: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ConTipocuentum");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Tipo Cuenta</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="TipoCuenta"
            name="TipoCuenta"
            label="Tipo Cuenta"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TipoCuenta}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.CodigoTipoCuenta}
             value={item.CodigoTipoCuenta}
             >
               {item.Descripcion}
               </MenuItem>
             ))}
          </Select>
          {errors.TipoCuenta && (
                <FormHelperText id="my-helper-text" error>
                  {errors.TipoCuenta}
                </FormHelperText>
              )}  
          </>
      )}