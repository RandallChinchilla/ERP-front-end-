import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  Grid,
  FormControl,
  FormHelperText,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { helpHttp } from "../../Helpers/HelpHttp";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  listas: {
    width: "100%",
  },
}));

export const SelectList = ({
  name,
  label,
  controller,
  fieldName,
  field,
  xs,
  errors,
  disabled,
  dataJson,
  getValues,
  selectFilterName,
}) => {
  const [data, setData] = useState(null);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let url = `${baseUrl}${controller}`;
  let options = null;
  const styles = useStyles();

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
  options = dataJson ? dataJson : data;
  return (
    <Grid item xs={xs} container justifyContent="center">
      <FormControl size="small" className={styles.listas}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          {...field}
          disabled={disabled}
        >
          <MenuItem value="0">Eliege una opción...</MenuItem>
          {data &&
            options.map((item) => (
              <MenuItem key={item[name]} value={item[name]}>
                {item[fieldName]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {errors && (
        <FormHelperText id="my-helper-text" error>
          {errors["message"]}
        </FormHelperText>
      )}
    </Grid>
  );
};
