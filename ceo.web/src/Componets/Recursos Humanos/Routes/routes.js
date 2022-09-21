import RRHCentroMedico from "../Components/RRHCentroMedico";
import RRHGradoAcademico from "../Components/RRHGradoAcademico";
import { RRHMaestro } from "../Components/RRHMaestro";
import { RRHMaestroLog } from "../Components/RRHMaestroLog";
import { RRHMaestroLogView } from "../Components/RRHMaestroLogView";
import { RRHMaestroView } from "../Components/RRHMaestroView";
import RRHMotivoSalida from "../Components/RRHMotivoSalida";
import { RRHTipoDeduccion } from "../Components/RRHTipoDeduccion";
import { RRHTipoDeduccionView } from "../Components/RRHTipoDeduccionView";


export const routes =[
    {
        path: "/Dashboard/RRHIndex/RRHCentroMedico",
        component: RRHCentroMedico,
    },
    {
        path:"/Dashboard/RRHIndex/RRHGradoAcademico",
        component: RRHGradoAcademico,
    },
    {
        path:"/Dashboard/RRHIndex/RRHMotivoSalida",
        component: RRHMotivoSalida,
    },
    {
        path:"/Dashboard/RRHIndex/RRHTipoDeduccionView",
        component: RRHTipoDeduccionView,
    },
    {
        path:"/Dashboard/RRHIndex/RRHTipoDeduccion",
        component: RRHTipoDeduccion,
    },
    {
        path:"/Dashboard/RRHIndex/RRHMaestroView",
        component: RRHMaestroView,
    },
    {
        path:"/Dashboard/RRHIndex/RRHMaestro",
        component: RRHMaestro,
    },
    {
        path:"/Dashboard/RRHIndex/RRHMaestroLog",
        component: RRHMaestroLog,
    },
    {
        path:"/Dashboard/RRHIndex/RRHMaestroLogView",
        component: RRHMaestroLogView,
    },              
]