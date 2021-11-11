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
            <ListItemText className={classes.text}>Reportes</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* <NavLink tag={Link} to="/Autenticacion">
      <ListItemButton >
        <ListItemText className={classes.text}>Prueba</ListItemText>
      </ListItemButton>
      </NavLink> */}

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
            <ListItemText className={classes.text}>Asientos</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Centros Costo</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>
              Catálogo Cuentas
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Notas EF</ListItemText>
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
            <ListItemText className={classes.text}>Tipos Cuenta</ListItemText>
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
            <ListItemText className={classes.text}>Maestro</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorCobrar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Clientes</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorCobrar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="/CliMaestro">
              <ListItemText className={classes.text}>
                Maetro Clientes
              </ListItemText>
            </Link>
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
            <ListItemText className={classes.text}>Maestro</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>
              Orden de Compra
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink
              tag={Link}
              to="/CxpProveedor"
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
            <NavLink tag={Link} to="/CxpProveedorView">
              <ListItemText className={classes.text}>Prueba</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Tipo Proveedor</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Tipo Servicio</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Tipo Contrato</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Reportes</ListItemText>
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
            <NavLink tag={Link} to="/CliMaestro">
              <ListItemText className={classes.text}>Reportes</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openClientes} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/CliMaestroView">
              <ListItemText className={classes.text}>
                Catálogo Clientes
              </ListItemText>
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
            <ListItemText className={classes.text}>Reportes</ListItemText>
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
            <ListItemText className={classes.text}>Maestro</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Grupo</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Sub Grupo</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink tag={Link} to="/Marca">
              <ListItemText className={classes.text}>Marca</ListItemText>
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>
              Forma Depreciación
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Estado</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Reportes</ListItemText>
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
            <ListItemText className={classes.text}>Reportes</ListItemText>
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
              to="/SegUsuario"
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
              to="/SegUsuarioView"
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
