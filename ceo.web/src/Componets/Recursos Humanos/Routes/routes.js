import { RRHFormaPago } from "../Components/RRHFormaPago";
import RRHFormaPagoView from "../Components/RRHFormaPagoView";
import RRHGradoAcademico from "../Components/RRHGradoAcademico";
import { RRHTipoDeduccion } from "../Components/RRHTipoDeduccion";
import RRHTipoDeduccionView from "../Components/RRHTipoDeduccionView";
import { RRHTipoPlanilla } from "../Components/RRHTipoPlanilla";
import RRHTipoPlanillaView from "../Components/RRHTipoPlanillaView";
import { RRHMaestro } from "../Components/RRHMaestro";
import RRHMaestroView from "../Components/RRHMaestroView";
import { RRHMaestroLog } from "../Components/RRHMaestroLog";
import RRHMaestroLogView from "../Components/RRHMaestroLogView";
import { RRHPariente } from "../Components/RRHPariente";
import RRHParienteView from "../Components/RRHParienteView";
import RRHISRView from "../Components/RRHISRView";
import { RRHISR } from "../Components/RRHISR";
import { RRHAccionPersonal } from "../Components/RRHAccionPersonal";
import RRHAccionPersonalView from "../Components/RRHAccionPersonalView";
import { RRHConfiguracion } from "../Components/RRHConfiguracion";
import RRHConfiguracionView from "../Components/RRHConfiguracionView";
import { RRHDeduccionEmpleado } from "../Components/RRHDeduccionEmpleado";
import RRHDeduccionEmpleadoView from "../Components/RRHDeduccionEmpleadoView";
import { RRHMaestroTab } from "../Components/RRHMaestroTab";
import { RRHMotivoSalida } from "../Components/RRHMotivoSalida";
import RRHMotivoSalidaView from "../Components/RRHMotivoSalidaView";
import { RRHEstado } from "../Components/RRHEstado";
import RRHEstadoView from "../Components/RRHEstadoView";
import { RRHCentroMedico } from "../Components/RRHCentroMedico";
import RRHCentroMedicoView from "../Components/RRHCentroMedicoView";

export const routes = [
  {
    path: "/Dashboard/RRHIndex/RRHGradoAcademico",
    component: RRHGradoAcademico,
  },
  {
    path: "/Dashboard/RRHIndex/RRHTipoDeduccionView",
    component: RRHTipoDeduccionView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHTipoDeduccion",
    component: RRHTipoDeduccion,
  },
  {
    path: "/Dashboard/RRHIndex/RRHFormaPago",
    component: RRHFormaPago,
  },
  {
    path: "/Dashboard/RRHIndex/RRHFormaPagoView",
    component: RRHFormaPagoView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHTipoPlanilla",
    component: RRHTipoPlanilla,
  },
  {
    path: "/Dashboard/RRHIndex/RRHTipoPlanillaView",
    component: RRHTipoPlanillaView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHISRView",
    component: RRHISRView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHISR",
    component: RRHISR,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMaestro",
    component: RRHMaestro,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMaestroView",
    component: RRHMaestroView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMaestroLog",
    component: RRHMaestroLog,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMaestroLogView",
    component: RRHMaestroLogView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHPariente",
    component: RRHPariente,
  },
  {
    path: "/Dashboard/RRHIndex/RRHParienteView",
    component: RRHParienteView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHAccionPersonal",
    component: RRHAccionPersonal,
  },
  {
    path: "/Dashboard/RRHIndex/RRHAccionPersonalView",
    component: RRHAccionPersonalView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHConfiguracion",
    component: RRHConfiguracion,
  },
  {
    path: "/Dashboard/RRHIndex/RRHConfiguracionView",
    component: RRHConfiguracionView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHDeduccionEmpleado",
    component: RRHDeduccionEmpleado,
  },
  {
    path: "/Dashboard/RRHIndex/RRHDeduccionEmpleadoView",
    component: RRHDeduccionEmpleadoView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMaestroTab",
    component: RRHMaestroTab,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMotivoSalida",
    component: RRHMotivoSalida,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMotivoSalidaView",
    component: RRHMotivoSalidaView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHEstado",
    component: RRHEstado,
  },
  {
    path: "/Dashboard/RRHIndex/RRHEstadoView",
    component: RRHEstadoView,
  },
  {
    path: "/Dashboard/RRHIndex/RRHCentroMedico",
    component: RRHCentroMedico,
  },
  {
    path: "/Dashboard/RRHIndex/RRHCentroMedicoView",
    component: RRHCentroMedicoView,
  },
];
