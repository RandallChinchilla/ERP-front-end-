import React from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteAction } from "../../Helpers/deleteHelper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delAction, noAction, updateAlert } from "../../Actions/Index";

export const Deleterow = ({ rowDelete, deleteApi, field, setData, data }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state.alert;

  const deleteRow = () => {
    deleteAction(deleteApi, rowDelete).then((res) => {
      if (res.IsSuccess) {
        setData(data.filter((el) => el[field] !== rowDelete[field]));
        dispatch(
          updateAlert({
            ...alert,
            open: true,
            severity: "success",
            message: res.Message,
          })
        );
      } else {
        dispatch(noAction());
        dispatch(
          updateAlert({
            ...alert,
            open: true,
            severity: "error",
            message: res.Message,
          })
        );
      }
    });
  };
  return (
    <GridActionsCellItem
      color="error"
      icon={<DeleteIcon />}
      label="Delete"
      onClick={deleteRow}
    />
  );
};
