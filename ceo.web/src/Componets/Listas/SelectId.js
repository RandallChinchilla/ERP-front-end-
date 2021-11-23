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
    if (!form.TipoId) {
        errors.TipoId = "Debe ingresar un tipo de identificación";
        errors.error = true;
      }
    return errors;
  };

export default function SelectId(){
    const initialForm = {
        TipoId: "",
        RememberMe: true,
      };
    
      const { form, errors, handleChange, handleBlur } = useForm(
        initialForm,
        validationsForm
      );
    
      const { Data, Error, setData } = useGetData("ParTipoIdentificacion");
    
      if (Error) return null;
      if (!Data) return null;

      let options = Data;
      console.log(options);
      return(
          <>
           <InputLabel id="demo-simple-select-label">Tipo ID</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="TipoId"
            name="TipoId"
            label="TipoId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.TipoId}
          >
            {Data &&
             options.map((item) => (
             <MenuItem
             key={item.codigoTipoIdentificacion}
             value={item.codigoTipoIdentificacion}
             >
               {item.descripcion}
               </MenuItem>
             ))}
          </Select>
          {errors.TipoId && (
                <FormHelperText id="my-helper-text" error>
                  {errors.TipoId}
                </FormHelperText>
              )}  
          </>
      )}