import { AhoMaestro } from "../Componentes/AhoMaestro";
import AhoMaestroView from "../Componentes/AhoMaestroView";
import { AhoProducto } from "../Componentes/AhoProducto";
import { AhoProductoLog } from "../Componentes/AhoProductoLog";
import AhoProductoLogView from "../Componentes/AhoProductoLogView";
import AhoProductoView from "../Componentes/AhoProductoView";
import { AhoTasa } from "../Componentes/AhoTasa";
import AhoTasaView from "../Componentes/AhoTasaView";
import { AhoTipo } from "../Componentes/AhoTipo";
import AhoTipoView from "../Componentes/AhoTipoView";
import { AhoTransaccion } from "../Componentes/AhoTransaccion";
import AhoTransaccionView from "../Componentes/AhoTransaccionView";

export const routes =[
    {
        path: "/Dashboard/AhoIndex/AhoMaestro",
        component: AhoMaestro,
    },
    {
        path: "/Dashboard/AhoIndex/AhoMaestroView",
        component: AhoMaestroView,
    },
    {
        path: "/Dashboard/AhoIndex/AhoTransaccion",
        component: AhoTransaccion,
    },
    {
        path: "/Dashboard/AhoIndex/AhoTransaccionView",
        component: AhoTransaccionView,
    },
    {
        path: "/Dashboard/AhoIndex/AhoProducto",
        component: AhoProducto,
    },
    {
        path: "/Dashboard/AhoIndex/AhoProductoView",
        component: AhoProductoView,
    },
    {
        path: "/Dashboard/AhoIndex/AhoProductoLog",
        component: AhoProductoLog,
    },
    {
        path: "/Dashboard/AhoIndex/AhoProductoLogView",
        component: AhoProductoLogView,
    },
    {
        path: "/Dashboard/AhoIndex/AhoTipo",
        component: AhoTipo,
    },
    {
        path: "/Dashboard/AhoIndex/AhoTipoView",
        component: AhoTipoView,
    },
    {
        path: "/Dashboard/AhoIndex/AhoTasa",
        component: AhoTasa,
    },
    {
        path: "/Dashboard/AhoIndex/AhoTasaView",
        component: AhoTasaView,
    },                   
]