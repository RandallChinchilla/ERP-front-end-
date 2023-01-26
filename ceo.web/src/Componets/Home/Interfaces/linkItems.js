import {
  Addchart,
  Settings,
  AccountBalanceWallet,
  AttachMoney,
  Report,
  DocumentScanner,
  Lock
} from "@mui/icons-material";
import Group from "@mui/icons-material/Group";
import { styleSx } from "../Styles/homeStyles";
export const links = [
  {
    nameItem: "Catera Pasiva",
    state: false,
    icon: () => <AccountBalanceWallet sx={styleSx.icon} />,
    subItems: [
      {
        name: "Aportantes",
        route: "/Dashboard/PasIndex/PasAportanteView",
      },
      {
        name: "Autorizado",
        route: "/Dashboard/PasIndex/PasAutorizadoView",
      },
      {
        name: "Aportes a Plazo",
        route: "/Dashboard/PasIndex/PasTipoInstrumentoView",
      },
      {
        name: "Configuración Aportes",
        route: "/Dashboard/PasIndex/PasInstrumentoView",
      },
      {
        name: "Origen Fondos",
        route: "/Dashboard/PasIndex/PasOrigenFondosView",
      },
      {
        name: "Origen Aportante",
        route: "/Dashboard/PasIndex/PasOrigenAportanteView",
      },
      { name: "Tasa Plazo", route: "/Dashboard/PasIndex/PasTasaPlazoView" },
      { name: "Maestro", route: "/Dashboard/PasIndex/PasMaestroView " },
      {
        name: "Transacciones",
        route: "/Dashboard/PasIndex/PasTransaccionView",
      },
      {
        name: "Persona Jurídica Canónica",
        route: "/Dashboard/PasIndex/PasPersonaJuridicaCanonicaView",
      },
      {
        nameItem: "Reportes",
        state: false,
        icon: () => <DocumentScanner sx={styleSx.icon} />,
        subItems: [{ name: "Rep. Aportantes", route: "/Dashboard/reportTest" }],
      },
    ],
  },
  {
    nameItem: "Recursos humanos",
    state: false,
    icon: () => <Group sx={styleSx.icon} />,
    subItems: [
      { name: "Aplicar Planilla", route: "/Dashboard/RRHIndex/RRHMaestroTab" },
      { name: "ISR", route: "/Dashboard/RRHIndex/RRHISRView" },
      { name: "Estado", route: "/Dashboard/RRHIndex/RRHEstadoView" },
      { name: "Forma de Pago", route: "/Dashboard/RRHIndex/RRHFormaPagoView" },
      {
        name: "Tipo Planilla",
        route: "/Dashboard/RRHIndex/RRHTipoPlanillaView",
      },
      {
        name: "Centro Medico",
        route: "/Dashboard/RRHIndex/RRHCentroMedicoView",
      },
      {
        name: "Grado Académico",
        route: "/Dashboard/RRHIndex/RRHGradoAcademicoView",
      },
      {
        name: "Tipo Deducción",
        route: "/Dashboard/RRHIndex/RRHTipoDeduccionView",
      },
      {
        name: "Motivo Salida",
        route: "/Dashboard/RRHIndex/RRHMotivoSalidaView",
      },
      { name: "Maestro", route: "/Dashboard/RRHIndex/RRHMaestroView" },
      { name: "Pariente", route: "/Dashboard/RRHIndex/RRHParienteView" },
      {
        name: "Configuración",
        route: "/Dashboard/RRHIndex/RRHConfiguracionView",
      },
      {
        name: "Acción Persona",
        route: "/Dashboard/RRHIndex/RRHAccionPersonalView",
      },
      {
        name: "Deducción Empleado",
        route: "/Dashboard/RRHIndex/RRHDeduccionEmpleadoView",
      },
      { name: "Maestro Log", route: "/Dashboard/RRHIndex/RRHMaestroLogView" },
    ],
  },
  {
    nameItem: "Ahorros",
    state: false,
    icon: () => <Addchart sx={styleSx.icon} />,
    subItems: [
      { name: "Tipo Ahorro", route: "/Dashboard/AhoIndex/AhoTipoView" },
      { name: "Producto", route: "/Dashboard/AhoIndex/AhoProductoView" },
      { name: "Maestro", route: "/Dashboard/AhoIndex/AhoMaestroView" },
      {
        name: "Transacciones",
        route: "/Dashboard/AhoIndex/AhoTransaccionView",
      },
      {
        name: "Tasa",
        route: "/Dashboard/AhoIndex/AhoTasaView",
      },
      {
        name: "Producto Log",
        route: "/Dashboard/AhoIndex/AhoProductoLogView",
      },
    ],
  },
  {
    nameItem: "Parámetros",
    state: false,
    icon: () => <Settings sx={styleSx.icon} />,
    subItems: [
      { name: "Empresa", route: "/Dashboard/ParIndex/ParEmpresaView" },
      { name: "Moneda", route: "/Dashboard/ParIndex/ParMonedaView" },
      {
        name: "Tipo Identificación",
        route: "/Dashboard/ParIndex/ParTipoIdentificacionView",
      },
      {
        name: "Códigos Transacción",
        route: "/Dashboard/ParIndex/ParCodigoTransaccionView",
      },
      {
        name: "Estado civil",
        route: "/Dashboard/ParIndex/ParEstadoCivilView",
      },
      {
        name: "Distrito",
        route: "/Dashboard/ParIndex/ParDistritoView",
      },
      {
        name: "Periodicidad",
        route: "/Dashboard/ParIndex/ParPeriodicidadView",
      },
      {
        name: "Diocesis",
        route: "/Dashboard/ParIndex/ParDiocesisView",
      },
      {
        name: "Emisor Tarjeta",
        route: "/Dashboard/ParIndex/ParEmisorTarjetaView",
      },
      {
        name: "Parentezco",
        route: "/Dashboard/ParIndex/ParParentezcoView",
      },
      {
        name: "Tipo Cambio",
        route: "/Dashboard/ParIndex/ParTipoCambioView",
      },
      {
        name: "Tipo Cambio",
        route: "/Dashboard/ParIndex/ParTipoCambioView",
      },
    ],
  },
  {
    nameItem: "Cajas",
    state: false,
    icon: () => <AttachMoney sx={styleSx.icon} />,
    subItems: [
      { name: "Configuración", route: "/Dashboard/CajaIndex/ParEmpresaView" },
      { name: "Caja", route: "/Dashboard/CajaIndex/ParMonedaView" },
      {
        name: "Tipo Documento",
        route: "/Dashboard/CajaIndex/ParTipoIdentificacionView",
      },
      {
        name: "Efectivo Mil",
        route: "/Dashboard/CajaIndex/ParCodigoTransaccionView",
      },
      {
        name: "Esfectivo USD",
        route: "/Dashboard/CajaIndex/ParEstadoCivilView",
      },
      {
        name: "Efectivo EURO",
        route: "/Dashboard/CajaIndex/ParDistritoView",
      },
      {
        name: "Facturación",
        route: "/Dashboard/CajaIndex/ParPeriodicidadView",
      },
    ],
  },
  {
    nameItem: "Seguridad",
    state: false,
    icon: () => <Lock sx={styleSx.icon} />,
    subItems: [
      { name: "Evento", route: "/Dashboard/SegIndex/SegEventoView" },
      { name: "Configuracion", route: "/Dashboard/SegIndex/SegConfiguracionView" },
    ],
  },
];
