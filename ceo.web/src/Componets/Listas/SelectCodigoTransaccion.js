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
    if (!form.CodigoTransaccion) {
        errors.CodigoTransaccion = "Debe ingresar un código de transacción";
        errors.error = true;
      }
    return errors;
  };

export default function SelectCodigoTransaccion(){
    const initialForm = {
        CodigoTransaccion: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParCodigoTransaccion");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Código Transacción</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="CodigoTransaccion"
            name="CodigoTransaccion"
            label="CodigoTransaccion"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.CodigoTransaccion}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.CodigoEmpresa}
             value={item.CodigoEmpresa}
             >
               {item.Descripcion}
               </MenuItem>
             ))}
          </Select>
          {errors.CodigoTransaccion && (
                <FormHelperText id="my-helper-text" error>
                  {errors.CodigoTransaccion}
                </FormHelperText>
              )}  
          </>
      )}