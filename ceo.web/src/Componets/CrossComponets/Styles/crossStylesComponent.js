import { makeStyles } from "@material-ui/core";

export const datagridSx = {
  borderRadius: 2,
  "& .MuiDataGrid-main": { borderRadius: 2 },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#898883",
    color: "#FFF",
    fontSize: 13,
  },
};

export const useStyles = makeStyles(() => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
  paper: {
    width: 1200,
  },
  listas: {
    width: "100%",
  },
  textfield: { width: "100%" },
  gridContainer: { paddingRight: 5, paddingLeft: 5 },
  button: { margin: "1px" },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
}));
