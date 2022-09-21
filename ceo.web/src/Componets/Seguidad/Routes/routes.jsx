import SegEvento from "../Components/SegEvento";
import SegProceso from "../Components/SegProceso";

export const routes =[
    {
        path: "/Dashboard/SegIndex/SegProceso",
        component: SegProceso,
    },
    {
        path: "/Dashboard/SegIndex/SegEvento",
        component: SegEvento,
    }            
]