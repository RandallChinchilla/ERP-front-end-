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
import { indigo, white} from "@mui/material/colors";

const useStyles = makeStyles(() => ({
  iconos: { color: "white" },
  text: { color: "white" },
}));

export default function NestedList() {

const[openContabilidad, setOpenContabilidad] = React.useState(false);
const[openActivosFijos, setOpenActivosFijos] = React.useState(false);
const[openCuentasPorPagar, setOpenCuentasPorPagar] = React.useState(false);

const handleClickContabilidad = () => {
  setOpenContabilidad(!openContabilidad);
  setOpenActivosFijos(false);
  setOpenCuentasPorPagar(false);
};

const handleClickActivosFijos = () => {
  setOpenActivosFijos(!openActivosFijos);
  setOpenContabilidad(false);
  setOpenCuentasPorPagar(false);
};

const handleClickCuentasPorPagar = () => {
  setOpenCuentasPorPagar(!openCuentasPorPagar);
  setOpenContabilidad(false);
  setOpenActivosFijos(false);
};

const classes = useStyles();
  
  return (
    <List
    sx={{bgcolor: indigo[900],
      height: 1500}}
      
      >
      <ListItemButton>
        <ListItemIcon>
          <AttachMoneyIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Cajas</ListItemText>
      </ListItemButton>
      
      <ListItemButton onClick={handleClickContabilidad}>
      <ListItemIcon>
        <AppRegistrationIcon className={classes.iconos} />
      </ListItemIcon>
      <ListItemText className={classes.text}>Contabilidad</ListItemText>
      {openContabilidad ? (<ExpandLess style={{ color: 'white' }} />
        ) : (
          <ExpandMore style={{ color: 'white' }} />
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
          <ListItemButton  sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Catálogo Cuentas</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text} >Notas EF</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      
      <Collapse in={openContabilidad} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text} >Periodos</ListItemText>
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
            <ListItemText className={classes.text}>Cuentas Transitorias</ListItemText>
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


      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Bancos</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WorkIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Cuentas por Cobrar</ListItemText>
      </ListItemButton>
      
      <ListItemButton onClick={handleClickCuentasPorPagar}>
        <ListItemIcon>
          <WorkOutlineIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Cuentas por Pagar</ListItemText>
        {openCuentasPorPagar ? (<ExpandLess style={{ color: 'white' }} />
        ) : (
          <ExpandMore style={{ color: 'white' }} />
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
            <ListItemText className={classes.text}>Orden de Compra</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openCuentasPorPagar} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Proveedor</ListItemText>
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
      
      <ListItemButton>
        <ListItemIcon>
          <AccountBoxIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Clientes</ListItemText>
      </ListItemButton>
      
      <ListItemButton>
        <ListItemIcon>
          <StorageIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Inventarios</ListItemText>
      </ListItemButton>

      <ListItemButton onClick={handleClickActivosFijos}>
      <ListItemIcon>
        <BusinessIcon className={classes.iconos}/>
      </ListItemIcon>
      <ListItemText className={classes.text}>Activos Fijos</ListItemText>
      {openActivosFijos ? (<ExpandLess style={{ color: 'white' }} />
        ) : (
          <ExpandMore style={{ color: 'white' }} />
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
            <ListItemText className={classes.text}>Sub Grupo"</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Marca</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={openActivosFijos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText className={classes.text}>Forma Depreciación</ListItemText>
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

      <ListItemButton>
        <ListItemIcon>
          <GroupIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Recursos Humanos</ListItemText>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <StackedLineChartIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Presupuesto</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Parámetros</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LockIcon className={classes.iconos} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Seguridad</ListItemText>
      </ListItemButton>
    </List>
  );
}
