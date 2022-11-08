import {
  AppBar,
  Grid,
  Paper,
  Tab,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import { CrudTable } from "../../CrossComponets/CrudTable";
import { Form } from "../../CrossComponets/Form";
import {
  columnsRRHAplicaAccionesPersonales,
  routesRRHAplicaAccionesPersonales,
} from "../Interfaces/interfaceRRHAplicaAccionesPersonales";
import {
  columnsRRHTabempleados,
  routesRRHMaestroApi,
} from "../Interfaces/interfaceRRHMaestro";
import { themeCustom, useStyles } from "../Styles/styleRHHMaestroTab";
import formJson from "../Data/rrhDeduccionesTab.json";
import {
  columnsRRHAplicaDeducciones,
  routesRRHAplicaDeducciones,
} from "../Interfaces/interfaceRRHAplicaDeducciones";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const styles = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={styles.divcontainer}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const RRHMaestroTab = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styles = useStyles();

  return (
    <Grid container justifyContent="center">
      <Paper elevation={3} sx={{ width: "inherit" }}>
        <Box container sx={{ maxWidth: "100%", "& button": { m: 1 } }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} container justifyContent="center" mt={5} mb={5}>
              <Typography component="h1" variant="h6" noWrap>
                Aplicar Planilla
              </Typography>
            </Grid>
            <Grid item xs={12} container>
              <ThemeProvider theme={themeCustom}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                  >
                    <Tab label="Empleados" {...a11yProps(0)} />
                    <Tab label="Horas Extras" {...a11yProps(1)} />
                    <Tab label="Deducciones" {...a11yProps(2)} />
                    <Tab label="Bonificaciones" {...a11yProps(3)} />
                    <Tab label="Planilla" {...a11yProps(4)} />
                  </Tabs>
                </AppBar>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} container>
              <TabPanel value={value} index={0}>
                <CrudTable
                  columns={columnsRRHTabempleados}
                  apiRoutes={routesRRHMaestroApi}
                  title="Empleados"
                  isEditable={true}
                  isDeletable={false}
                  isAdd={false}
                  field="NumeroEmpleado"
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CrudTable
                  columns={columnsRRHAplicaAccionesPersonales}
                  apiRoutes={routesRRHAplicaAccionesPersonales}
                  title="Horas Extras"
                  isEditable={true}
                  isDeletable={false}
                  isAdd={false}
                  field="NumeroEmpleado"
                />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CrudTable
                  columns={columnsRRHAplicaDeducciones}
                  apiRoutes={routesRRHAplicaDeducciones}
                  title="Deducciones"
                  isEditable={true}
                  isDeletable={false}
                  isAdd={false}
                  field="NumeroEmpleado"
                />
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Three
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};
