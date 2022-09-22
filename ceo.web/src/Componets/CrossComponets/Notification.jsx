import { PortraitSharp } from "@material-ui/icons";
import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateAlert } from "../../Actions/Index";

export const Notification = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state.alert;

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    dispatch(updateAlert({ ...alert, open: false }));
  };

  return (
    <div>
      <Snackbar
        open={alert.open}
        autoHideDuration={alert.autoHideDuration}
        anchorOrigin={{ vertical: alert.posV, horizontal: alert.posH }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{ with: "100" }}
          variant={alert.variant}
          elevation={6}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};
