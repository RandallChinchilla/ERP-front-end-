import { makeStyles } from "@material-ui/core";
import { createTheme } from "@mui/material";

export const themeCustom = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
    },
  },
});

export const useStyles = makeStyles(() => ({
  divcontainer: {
    width: "90%",
    margin: "auto",
    marginBottom: "30px",
  },
}));
