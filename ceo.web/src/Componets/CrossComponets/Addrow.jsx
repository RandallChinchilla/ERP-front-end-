import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useHistory } from "react-router-dom";

export const Addrow = ({ routeRedirect, typeMode }) => {
  let usehistory = useHistory();
  return (
    <div>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={() => {
          usehistory.push(routeRedirect);
        }}
        disabled={typeMode.addButton}
      >
        Agregar
      </Button>
    </div>
  );
};
