import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import StorageIcon from "@material-ui/icons/Storage";
import WorkIcon from "@material-ui/icons/Work";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import GroupIcon from "@material-ui/icons/Group";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BusinessIcon from "@mui/icons-material/Business";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/core";
import { indigo, white } from "@mui/material/colors";
import { Link, NavLink } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";

const useStyles = makeStyles(() => ({
  iconos: { color: "white" },
  text: { color: "white" },
}));

export default function NestedList() {
  const [openCajas, setOpenCajas] = React.useState(false);
  const [openContabilidad, setOpenContabilidad] = React.useState(false);
  const [openBancos, setOpenBancos] = React.useState(false);
  const [openCuentasPorCobrar, setOpenCuentasPorCobrar] = React.useState(false);
  const [openCuentasPorPagar, setOpenCuentasPorPagar] = React.useState(false);
  const [openClientes, setOpenClientes] = React.useState(false);
  const [openInventarios, setOpenInventarios] = React.useState(false);
  const [openActivosFijos, setOpenActivosFijos] = React.useState(false);
  const [openRecursosHumanos, setOpenRecursosHumanos] = React.useState(false);
  const [openPresupuesto, setOpenPresupuesto] = React.useState(false);
  const [openParametros, setOpenParametros] = React.useState(false);
  const [openSeguridad, setOpenSeguridad] = React.useState(false);
  const [openFacturaElectronica, setOpenFacturaElectronica] =
    React.useState(false);

  const handleClickCajas = () => {
    setOpenCajas(!openCajas);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickContabilidad = () => {
    setOpenContabilidad(!openContabilidad);
    setOpenCajas(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickBancos = () => {
    setOpenBancos(!openBancos);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickCuentasPorCobrar = () => {
    setOpenCuentasPorCobrar(!openCuentasPorCobrar);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickCuentasPorPagar = () => {
    setOpenCuentasPorPagar(!openCuentasPorPagar);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickClientes = () => {
    setOpenClientes(!openClientes);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickInventarios = () => {
    setOpenInventarios(!openInventarios);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickActivosFijos = () => {
    setOpenActivosFijos(!openActivosFijos);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickRecursosHumanos = () => {
    setOpenRecursosHumanos(!openRecursosHumanos);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickPresupuesto = () => {
    setOpenPresupuesto(!openPresupuesto);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickParametros = () => {
    setOpenParametros(!openParametros);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenSeguridad(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickSeguridad = () => {
    setOpenSeguridad(!openSeguridad);
    setOpenCajas(false);
    setOpenContabilidad(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenFacturaElectronica(false);
  };

  const handleClickFacturaElectronica = () => {
    setOpenFacturaElectronica(!openFacturaElectronica);
    setOpenContabilidad(false);
    setOpenCajas(false);
    setOpenBancos(false);
    setOpenCuentasPorCobrar(false);
    setOpenCuentasPorPagar(false);
    setOpenClientes(false);
    setOpenInventarios(false);
    setOpenActivosFijos(false);
    setOpenRecursosHumanos(false);
    setOpenPresupuesto(false);
    setOpenParametros(false);
    setOpenSeguridad(false);
  };

  const classes = useStyles();

  return (
    <List sx={{ bgcolor: indigo[900] }}>
      <ListItemButton onClick={handleClickCajas}>
        <ListItemIcon>
          <AttachMoneyIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Cajas</ListItemText>
        {openCajas ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openCajas} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/FacMaestroView">
              <ListItemText className={classes.text}>
                Maestro Facturas
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickContabilidad}>
        <ListItemIcon>
          <AppRegistrationIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Contabilidad</ListItemText>
        {openContabilidad ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ConEncabezadoView">
              <ListItemText className={classes.text}>Asientos</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ConParametrosView">
              <ListItemText className={classes.text}>Parámetros</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ConCentrosCostoView">
              <ListItemText className={classes.text}>
                Centros Costo
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/concatalogo">
              <ListItemText className={classes.text}>
                Catálogo Cuentas
              </ListItemText>
            </NavLink>
            {/* <ListItemText className={classes.text}>
              Catálogo Cuentas
            </ListItemText> */}
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ConNotasEFView">
              <ListItemText className={classes.text}>Notas EF</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Periodos</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ConTipoCuentaView">
              <ListItemText className={classes.text}>Tipos Cuenta</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>
              Cuentas Transitorias
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Reportes</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickBancos}>
        <ListItemIcon>
          <AccountBalanceIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Bancos</ListItemText>
        {openBancos ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openBancos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Reportes</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickCuentasPorCobrar}>
        <ListItemIcon>
          <WorkIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Cuentas por Cobrar</ListItemText>
        {openCuentasPorCobrar ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openCuentasPorCobrar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CxcConcepto">
              <ListItemText className={classes.text}>Concepto</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openCuentasPorCobrar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Maestro</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickCuentasPorPagar}>
        <ListItemIcon>
          <WorkOutlineIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Cuentas por Pagar</ListItemText>
        {openCuentasPorPagar ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CxpConcepto">
              <ListItemText className={classes.text}>Concepto</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CxpDependenciaOperativa">
              <ListItemText className={classes.text}>
                Dependencia Operativa
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink
              tag={Link}
              to="/Dashboard/CxpProveedorView"
              style={(isActive) => ({
                color: isActive ? "inherit" : "inherit",
              })}
            >
              <ListItemText className={classes.text}>Proveedores</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CxpTipoProveedor">
              <ListItemText className={classes.text}>
                Tipo Proveedor
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CxpTipoServicio">
              <ListItemText className={classes.text}>
                Tipo Servicio
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CxpTipoContrato">
              <ListItemText className={classes.text}>
                Tipo Contrato
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CxpNivelAutorizacion">
              <ListItemText className={classes.text}>
                Nivel Autorización
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickClientes}>
        <ListItemIcon>
          <AccountBoxIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Clientes</ListItemText>
        {openClientes ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openClientes} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/CliMaestroView">
              <ListItemText className={classes.text}>Clientes</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickInventarios}>
        <ListItemIcon>
          <StorageIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Inventarios</ListItemText>
        {openInventarios ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openInventarios} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/InvMaestroView">
              <ListItemText className={classes.text}>Maestro</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickFacturaElectronica}>
        <ListItemIcon>
          <PostAddIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>
          Factura Electrónica
        </ListItemText>
        {openFacturaElectronica ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openFacturaElectronica} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/FelTipoDocumentoView">
              <ListItemText className={classes.text}>
                Tipo Documento
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openFacturaElectronica} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/FelCondicionVentaView">
              <ListItemText className={classes.text}>
                Condición Venta
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openFacturaElectronica} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/FelMedioPagoView">
              <ListItemText className={classes.text}>Medio Pago</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openFacturaElectronica} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/FelTipoCodigoView">
              <ListItemText className={classes.text}>Tipo Código</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openFacturaElectronica} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/FelUnidadMedidaView">
              <ListItemText className={classes.text}>
                Unidad Medida
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openFacturaElectronica} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/FelTipoImpuestoView">
              <ListItemText className={classes.text}>
                Tipo Impuesto
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickActivosFijos}>
        <ListItemIcon>
          <BusinessIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Activos Fijos</ListItemText>
        {openActivosFijos ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ActMaestroView">
              <ListItemText className={classes.text}>Maestro</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ActGrupoView">
              <ListItemText className={classes.text}>Grupo</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ActSubGrupoView">
              <ListItemText className={classes.text}>Sub Grupo</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/Marca">
              <ListItemText className={classes.text}>Marca</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ActFormaDepreciacionView">
              <ListItemText className={classes.text}>
                Forma Depreciación
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ActEstadoView">
              <ListItemText className={classes.text}>Estado</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ActDocumentoView">
              <ListItemText className={classes.text}>Documento</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickRecursosHumanos}>
        <ListItemIcon>
          <GroupIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Recursos Humanos</ListItemText>
        {openRecursosHumanos ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openRecursosHumanos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>
              Aplicar Planilla
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openRecursosHumanos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>
              Configurar Planilla
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openRecursosHumanos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Funcionario</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openRecursosHumanos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>
              Acción Personal
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openRecursosHumanos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Tipo Planilla</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openRecursosHumanos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Forma Pago</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openRecursosHumanos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Tipo Deducción</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickPresupuesto}>
        <ListItemIcon>
          <StackedLineChartIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Presupuesto</ListItemText>
        {openPresupuesto ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openPresupuesto} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Reportes</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickParametros}>
        <ListItemIcon>
          <SettingsIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Parámetros</ListItemText>
        {openParametros ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>
      <Collapse in={openParametros} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ParEmpresaView">
              <ListItemText className={classes.text}>Empresa</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openParametros} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ParMonedaView">
              <ListItemText className={classes.text}>Moneda</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openParametros} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ParTipoIdentificacionView">
              <ListItemText className={classes.text}>
                Tipo de Identificación
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openParametros} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Dashboard/ParCodigoTransaccionView">
              <ListItemText className={classes.text}>
                Códigos Transacción
              </ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickSeguridad}>
        <ListItemIcon>
          <LockIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Seguridad</ListItemText>
        {openSeguridad ? (
          <ExpandLess style={{ color: "white" }} />
        ) : (
          <ExpandMore style={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={openSeguridad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink
              tag={Link}
              to="/Dashboard/SegUsuario"
              style={(isActive) => ({
                color: isActive ? "inherit" : "inherit",
              })}
            >
              <ListItemText className={classes.text}>Seguridad</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openSeguridad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink
              tag={Link}
              to="/Dashboard/SegUsuarioView"
              style={(isActive) => ({
                color: isActive ? "inherit" : "inherit",
              })}
            >
              <ListItemText className={classes.text}>Prueba</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
