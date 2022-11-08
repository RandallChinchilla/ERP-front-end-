import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useGetData } from "../../../Hooks/useGetData";

export const RRHSelectTipoDeduccion = ({ name, field, value, onChange }) => {
  //   const [initialValue, setInitialValue] = useState("");
  const { Data, Error } = useGetData("RrhTipoDeduccion/GetRrhTiposDeduccion");
  return (
    <Select
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoWidth
    >
      <MenuItem value={value}>Seleccione un tipo</MenuItem>
      {Data &&
        Data.map((item) => (
          <MenuItem key={item[name]} value={item[name]}>
            {" "}
            {item[field]}
          </MenuItem>
        ))}
    </Select>
  );
};
