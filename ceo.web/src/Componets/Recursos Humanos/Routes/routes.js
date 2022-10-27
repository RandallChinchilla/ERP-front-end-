import RRHCentroMedico from "../Components/RRHCentroMedico";
import RRHEstado from "../Components/RRHEstado";
import { RRHFormaPago } from "../Components/RRHFormaPago";
import RRHFormaPagoView from "../Components/RRHFormaPagoView";
import RRHGradoAcademico from "../Components/RRHGradoAcademico";
import RRHISR from "../Components/RRHISR";
import RRHISRView from "../Components/RRHISRView";
import RRHMotivoSalida from "../Components/RRHMotivoSalida";
import { RRHTipoDeduccion } from "../Components/RRHTipoDeduccion";
import RRHTipoDeduccionView from "../Components/RRHTipoDeduccionView";
import { RRHTipoPlanilla } from "../Components/RRHTipoPlanilla";
import RRHTipoPlanillaView from "../Components/RRHTipoPlanillaView";
import { RRHMaestro } from "../Components/RRHMaestro";
import RRHMaestroView from "../Components/RRHMaestroView";
import { RRHMaestroLog } from "../Components/RRHMaestroLog";
import RRHMaestroLogView from "../Components/RRHMaestroLogView";
import { RRHMaestroTab } from "../Components/RRHMaestroTab";

export const routes = [
  {
    path: "/Dashboard/RRHIndex/RRHCentroMedico",
    component: RRHCentroMedico,
  },
  {
    path: "/Dashboard/RRHIndex/RRHGradoAcademico",
    component: RRHGradoAcademico,
  },
  {
    path: "/Dashboard/RRHIndex/RRHMotivoSalida",
    component: RRHMotivoSalida,
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
    path: "/Dashboard/RRHIndex/RRHEstado",
    component: RRHEstado,
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
    path: "/Dashboard/RRHIndex/RRHMaestroTab",
    component: RRHMaestroTab,
  },
];
