import { makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { indigo } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { ActIndex } from "../ActivosFijos/ActIndex";
import Autenticacion from "../Autenticacion/Autenticacion";
import FacMaestro from "../Cajas/FacMaestro";
import FacMaestroView from "../Cajas/FacMaestroView";
import { PasIndex } from "../Cartera Pasiva/Routes/PasIndex";
import CliAportante from "../Clientes/CliAportante";
import { CliMaestro } from "../Clientes/CliMaestro";
import ClieMaestroView from "../Clientes/CliMaestroView";
import Catalogo from "../Contabilidad.js/Catalogo";
import ConCatalogo from "../Contabilidad.js/ConCatalogo";
import ConCentrosCosto from "../Contabilidad.js/ConCentrosCosto";
import ConCentrosCostoView from "../Contabilidad.js/ConCentrosCostoView";
import ConEncabezado from "../Contabilidad.js/ConEncabezado";
import ConEncabezadoView from "../Contabilidad.js/ConEncabezadoView";
import ConNotasEF from "../Contabilidad.js/ConNotasEF";
import ConNotasEFView from "../Contabilidad.js/ConNotasEFView";
import ConParametros from "../Contabilidad.js/ConParametros";
import ConParametrosView from "../Contabilidad.js/ConParametrosView";
import ConTipoCuenta from "../Contabilidad.js/ConTipoCuenta";
import ConTipoCuentaView from "../Contabilidad.js/ConTipoCuentaView";
import CxcConcepto from "../CuentasPorCobrar/CxcConcepto";
import CxpConcepto from "../CuentasPorPagar/CxpConcepto";
import CxpDependenciaOperativa from "../CuentasPorPagar/CxpDependenciaOperativa";
import CxpNivelAutorizacion from "../CuentasPorPagar/CxpNivelAutorizacion";
import { CxpProveedor } from "../CuentasPorPagar/CxpProveedor";
import CxpProveedorView from "../CuentasPorPagar/CxpProveedorView";
import CxpTipoContrato from "../CuentasPorPagar/CxpTipoContrato";
import CxpTipoProveedor from "../CuentasPorPagar/CxpTipoProveedor";
import CxpTipoServicio from "../CuentasPorPagar/CxpTipoServicio";
import FelCondicionVenta from "../FacturasElectronicas/FelCondicionVenta";
import FelCondicionVentaView from "../FacturasElectronicas/FelCondicionVentaView";
import FelMedioPago from "../FacturasElectronicas/FelMedioPago";
import FelMedioPagoView from "../FacturasElectronicas/FelMedioPagoView";
import FelTipoCodigo from "../FacturasElectronicas/FelTipoCodigo";
import FelTipoCodigoView from "../FacturasElectronicas/FelTipoCodigoView";
import FelTipoDocumento from "../FacturasElectronicas/FelTipoDocumento";
import FelTipoDocumentoView from "../FacturasElectronicas/FelTipoDocumentoView";
import FelTipoImpuesto from "../FacturasElectronicas/FelTipoImpuesto";
import FelTipoImpuestoView from "../FacturasElectronicas/FelTipoImpuestoView";
import FelUnidadMedida from "../FacturasElectronicas/FelUnidadMedida";
import FelUnidadMedidaView from "../FacturasElectronicas/FelUnidadMedidaView";
import InvMaestro from "../Inventarios/InvMaestro";
import InvMaestroView from "../Inventarios/InvMaestroView";
import InvActividadEconomica from "../Inversiones/InvActividadEconomica";
import InvEntidadCalificadora from "../Inversiones/InvEntidadCalificadora";
import InvPortafolio from "../Inversiones/InvPortafolio";
import InvSectorEconomico from "../Inversiones/InvSectorEconomico";
import InvTipo from "../Inversiones/InvTipo";
import InvTipoCustodia from "../Inversiones/InvTipoCustodia";
import InvTipoFondo from "../Inversiones/InvTipoFondo";
import { RRHIndex } from "../Recursos Humanos/Routes/RRHIndex";
import RegTipoDependenciaAcreedor from "../Regulador/RegTipoDependenciaAcreedor";
import RegTipoEmpresa from "../Regulador/RegTipoEmpresa";
import RegTipoOperacionObligaciones from "../Regulador/RegTipoOperacionObligaciones";
import RegTipoPersona from "../Regulador/RegTipoPersona";
import RegTipoRelacionComercial from "../Regulador/RegTipoRelacionComercial";
import RegTipoTasa from "../Regulador/RegTipoTasa";
import reportTest from "../Reportes/reportTest";
import NestedList from "./listItems";
import { AhoIndex } from "../Ahorros/Routes/AhoIndex";
import { SegIndex } from "../Seguidad/Routes/SegIndex";
import { ParIndex } from "../Parametros/Routes/ParIndex";
import { CajIndex } from "../Cajas/Routes/CajIndex";

const useStyles = makeStyles(() => ({
  iconos: { color: "white" },
  text: { color: "white" },
}));

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 270;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: indigo[900],
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  // palette: {
  //   mode: "light",
  //   background: {
  //     paper: indigo[900],
  //     defaul: "#fff",
  //   },
  // },
});

function DashboardContent() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: (theme) => theme.palette.grey[50],
        }}
      >
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              CEO
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              endIcon={<ExitToAppIcon />}
            >
              Salir
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              backgroundColor: indigo[900],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon className={classes.iconos} />
            </IconButton>
          </Toolbar>
          <Divider />
          <NestedList />
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[50],
            flexGrow: 1,
            height: "1200px",
            overflow: "auto",
            color: "#000",
            py: 10,
            px: 4,
          }}
        >
          <Switch>
            <Route
              exact
              path="/Dashboard/climaestro/:isNew"
              component={CliMaestro}
            ></Route>
            <Route
              exact
              path="/Dashboard/climaestroview"
              component={ClieMaestroView}
            ></Route>
            <Route
              exact
              path="/Dashboard/cxpproveedor"
              component={CxpProveedor}
            ></Route>
            <Route
              exact
              path="/Dashboard/cxpproveedorview"
              component={CxpProveedorView}
            ></Route>
            <Route
              exact
              path="/Dashboard/conencabezado"
              component={ConEncabezado}
            ></Route>
            <Route
              exact
              path="/Dashboard/conencabezadoview"
              component={ConEncabezadoView}
            ></Route>
            <Route
              exact
              path="/Dashboard/conparametros"
              component={ConParametros}
            ></Route>
            <Route
              exact
              path="/Dashboard/conparametrosview"
              component={ConParametrosView}
            ></Route>
            <Route
              exact
              path="/Dashboard/concentroscosto"
              component={ConCentrosCosto}
            ></Route>
            <Route
              exact
              path="/Dashboard/concentroscostoview"
              component={ConCentrosCostoView}
            ></Route>
            <Route
              exact
              path="/Dashboard/concatalogo"
              component={ConCatalogo}
            ></Route>
            <Route
              exact
              path="/Dashboard/contipocuenta"
              component={ConTipoCuenta}
            ></Route>
            <Route
              exact
              path="/Dashboard/contipocuentaview"
              component={ConTipoCuentaView}
            ></Route>
            <Route
              exact
              path="/Dashboard/connotasef"
              component={ConNotasEF}
            ></Route>
            <Route
              exact
              path="/Dashboard/connotasefview"
              component={ConNotasEFView}
            ></Route>
            <Route
              exact
              path="/Dashboard/felcondicionventa"
              component={FelCondicionVenta}
            ></Route>
            <Route
              exact
              path="/Dashboard/felcondicionventaview"
              component={FelCondicionVentaView}
            ></Route>
            <Route
              exact
              path="/Dashboard/felmediopago"
              component={FelMedioPago}
            ></Route>
            <Route
              exact
              path="/Dashboard/felmediopagoview"
              component={FelMedioPagoView}
            ></Route>
            <Route
              exact
              path="/Dashboard/feltipodocumento"
              component={FelTipoDocumento}
            ></Route>
            <Route
              exact
              path="/Dashboard/feltipodocumentoview"
              component={FelTipoDocumentoView}
            ></Route>
            <Route
              exact
              path="/Dashboard/feltipocodigo"
              component={FelTipoCodigo}
            ></Route>
            <Route
              exact
              path="/Dashboard/feltipocodigoview"
              component={FelTipoCodigoView}
            ></Route>
            <Route
              exact
              path="/Dashboard/felunidadmedida"
              component={FelUnidadMedida}
            ></Route>
            <Route
              exact
              path="/Dashboard/felunidadmedidaview"
              component={FelUnidadMedidaView}
            ></Route>
            <Route
              exact
              path="/Dashboard/feltipoimpuesto"
              component={FelTipoImpuesto}
            ></Route>
            <Route
              exact
              path="/Dashboard/feltipoimpuestoview"
              component={FelTipoImpuestoView}
            ></Route>
            <Route
              exact
              path="/autenticacion"
              component={Autenticacion}
            ></Route>
            <Route path="/Dashboard/ActIndex" component={ActIndex} />
            <Route path="/Dashboard/PasIndex" component={PasIndex} />
            <Route path="/Dashboard/RRHIndex" component={RRHIndex} />
            <Route path="/Dashboard/AhoIndex" component={AhoIndex} />
            <Route path="/Dashboard/SegIndex" component={SegIndex} />
            <Route path="/Dashboard/ParIndex" component={ParIndex} />
            <Route path="/Dashboard/CajIndex" component={CajIndex} />

            <Route
              exact
              path="/Dashboard/catalogo"
              component={Catalogo}
            ></Route>
            <Route
              exact
              path="/Dashboard/CxcConcepto"
              component={CxcConcepto}
            ></Route>
            <Route
              exact
              path="/Dashboard/CxpConcepto"
              component={CxpConcepto}
            ></Route>
            <Route
              exact
              path="/Dashboard/CxpDependenciaOperativa"
              component={CxpDependenciaOperativa}
            ></Route>
            <Route
              exact
              path="/Dashboard/CxpTipoContrato"
              component={CxpTipoContrato}
            ></Route>
            <Route
              exact
              path="/Dashboard/CxpTipoProveedor"
              component={CxpTipoProveedor}
            ></Route>
            <Route
              exact
              path="/Dashboard/CxpTipoServicio"
              component={CxpTipoServicio}
            ></Route>
            <Route
              exact
              path="/Dashboard/CxpNivelAutorizacion"
              component={CxpNivelAutorizacion}
            ></Route>
            <Route
              exact
              path="/Dashboard/invMaestroView"
              component={InvMaestroView}
            ></Route>
            <Route
              exact
              path="/Dashboard/FacMaestroView"
              component={FacMaestroView}
            ></Route>
            <Route
              exact
              path="/Dashboard/facMaestro/:isNew"
              component={FacMaestro}
            ></Route>
            <Route
              exact
              path="/Dashboard/InvMaestro/:isNew"
              component={InvMaestro}
            ></Route>
            <Route
              exact
              path="/Dashboard/CliAportante"
              component={CliAportante}
            ></Route>

            <Route
              exact
              path="/Dashboard/InvPortafolio"
              component={InvPortafolio}
            ></Route>
            <Route
              exact
              path="/Dashboard/InvEntidadCalificadora"
              component={InvEntidadCalificadora}
            ></Route>
            <Route exact path="/Dashboard/InvTipo" component={InvTipo}></Route>
            <Route
              exact
              path="/Dashboard/InvTipoFondo"
              component={InvTipoFondo}
            ></Route>
            <Route
              exact
              path="/Dashboard/InvTipoCustodia"
              component={InvTipoCustodia}
            ></Route>
            <Route
              exact
              path="/Dashboard/InvActividadEconomica"
              component={InvActividadEconomica}
            ></Route>
            <Route
              exact
              path="/Dashboard/InvSectorEconomico"
              component={InvSectorEconomico}
            ></Route>
            <Route
              exact
              path="/Dashboard/RegTipoDependenciaAcreedor"
              component={RegTipoDependenciaAcreedor}
            ></Route>
            <Route
              exact
              path="/Dashboard/RegTipoEmpresa"
              component={RegTipoEmpresa}
            ></Route>
            <Route
              exact
              path="/Dashboard/RegTipoPersona"
              component={RegTipoPersona}
            ></Route>
            <Route
              exact
              path="/Dashboard/RegTipoOperacionObligaciones"
              component={RegTipoOperacionObligaciones}
            ></Route>
            <Route
              exact
              path="/Dashboard/RegTipoRelacionComercial"
              component={RegTipoRelacionComercial}
            ></Route>
            <Route
              exact
              path="/Dashboard/RegTipoTasa"
              component={RegTipoTasa}
            ></Route>
            <Route
              exact
              path="/Dashboard/reportTest"
              component={reportTest}
            ></Route>
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
