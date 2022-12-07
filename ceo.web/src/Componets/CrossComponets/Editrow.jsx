import React from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

export const Editrow = ({ rowUpdate, navigation, typeMode }) => {
  let usehistory = useHistory();
  return (
    <GridActionsCellItem
      icon={<EditIcon />}
      onClick={() => {
        usehistory.push({ pathname: navigation, rowUpdate });
      }}
      disabled={typeMode.editeButton}
    />
  );
};
