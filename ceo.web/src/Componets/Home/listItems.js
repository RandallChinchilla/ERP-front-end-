import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StorageIcon from '@material-ui/icons/Storage';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import GroupIcon from '@material-ui/icons/Group';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BusinessIcon from '@mui/icons-material/Business';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

  export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
    return (
      <List>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Cajas" />
    </ListItem>
    
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <AppRegistrationIcon />
      </ListItemIcon>
      <ListItemText primary="Contabilidad" />
      {open ? <ExpandLess /> : <ExpandMore/>}
    </ListItemButton>    
    
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Asientos" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Centros Costo" />
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Catálogo Cuentas" />
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Notas EF" />
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Periodos" />
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Tipos Cuenta" />
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Cuentas Transitorias" />
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Reportes" />
          </ListItemButton>
        </List>
      </Collapse>

    <ListItem button>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Bancos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Cuentas por Cobrar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Cuentas por Pagar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Inventarios" />
    </ListItem>
    
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Activos Fijos" />
      {open ? <ExpandLess /> : <ExpandMore/>}
    </ListItemButton>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Maestro" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Grupo" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Sub Grupo" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Marca" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Forma Depreciación" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Estado" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Reportes" />
          </ListItemButton>
        </List>
      </Collapse>

    <ListItem button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Recursos Humanos" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <StackedLineChartIcon />
      </ListItemIcon>
      <ListItemText primary="Presupuesto" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Parámetros" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Seguridad" />
    </ListItem>
    
  </List>
    )
  }
