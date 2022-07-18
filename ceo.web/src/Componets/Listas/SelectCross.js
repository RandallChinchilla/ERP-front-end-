import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { helpHttp } from "../../Helpers/HelpHttp";

export const SelectCross = ({
  form,
  handleBlur,
  handleChange,
  title,
  controller,
  name,
  field,
  nameId,
  disabled,
}) => {
  const [data, setData] = useState(null);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let url = `${baseUrl}${controller}`;
  let options = null;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setData(res);
        } else {
          return null;
        }
      });
  }, [url]);

  if (!data) return null;
  options = data;
  return (
    <>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={nameId ? nameId : name}
        name={nameId ? nameId : name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={nameId ? form[nameId] : form[name]}
        disabled={disabled}
      >
        <MenuItem value={0}>Eliege una opción...</MenuItem>
        {data &&
          options.map((item) => (
            <MenuItem key={item[name]} value={item[name]}>
              {item[field]}
            </MenuItem>
          ))}
      </Select>
    </>
  );
};
