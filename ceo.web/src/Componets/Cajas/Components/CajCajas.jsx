import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import { boxTabSx } from "../../CrossComponets/Styles/crossStylesComponent";
import { tabMenuOptions } from "../Interfaces/interfaceCajCaja";

export const CajCajas = () => {
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={boxTabSx}>
          <TabList onChange={handleChange}>
            {tabMenuOptions &&
              tabMenuOptions.map((opt) => (
                <Tab key={opt.value} label={opt.headerName} value={opt.value} />
              ))}
          </TabList>
        </Box>
        {tabMenuOptions &&
          tabMenuOptions.map((opt) => (
            <TabPanel key={opt.value} value={opt.value}>
              {opt.component()}
            </TabPanel>
          ))}
      </TabContext>
    </Box>
  );
};
