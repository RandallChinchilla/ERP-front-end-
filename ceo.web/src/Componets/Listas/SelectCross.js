import React from "react";
import { Select, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { useGetData } from "../../Hooks/useGetData";

export const SelectCross = ({
  form,
  handleBlur,
  handleChange,
  title,
  controller,
  name,
  field,
}) => {
  // const { Data, Error, setData } = useGetData("ActGrupo/GetActGrupos");

  const { Data, Error, setData } = useGetData(controller);

  if (Error) return null;
  if (!Data) return null;
  console.log(Data);

  let options = Data;

  return (
    <>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={name}
        name={name}
        label="CodigoGrupo"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form[name]}
      >
        {Data &&
          options.map((item) => (
            <MenuItem key={item[name]} value={item[name]}>
              {item[field]}
            </MenuItem>
          ))}
      </Select>
    </>
  );
};
