import { SegConfiguracion } from "../Components/SegConfiguracion";
import { SegConfiguracionView } from "../Components/SegConfiguracionView";
import { SegEvento } from "../Components/SegEvento";
import { SegEventoView } from "../Components/SegEventoView";
import SegProceso from "../Components/SegProceso";

export const routes =[
    {
        path: "/Dashboard/SegIndex/SegProceso",
        component: SegProceso,
    },
    {
        path: "/Dashboard/SegIndex/SegConfiguracion",
        component: SegConfiguracion,
    },
    {
        path: "/Dashboard/SegIndex/SegConfiguracionView",
        component: SegConfiguracionView,
    },
    {
        path: "/Dashboard/SegIndex/SegEvento",
        component: SegEvento,
    },
    {
        path: "/Dashboard/SegIndex/SegEventoView",
        component: SegEventoView,
    },
]