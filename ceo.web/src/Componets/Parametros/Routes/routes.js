import ParDiocesis from "../Components/ParDiocesis";
import ParDistrito from "../Components/ParDistrito";
import ParEmisorTarjeta from "../Components/ParEmisorTarjeta";
import ParEstadoCivil from "../Components/ParEstadoCivil";
import ParParentezco from "../Components/ParParentezco";
import ParPeriodicidad from "../Components/ParPeriodicidad";
import { ParTipoCambio } from "../Components/ParTipoCambio";
import ParTipoCambioView from "../Components/ParTipoCambioView";
import { ParMoneda } from "../Components/ParMoneda";
import ParMonedaView from "../Components/ParMonedaView";
import { ParTipoIdentificacion } from "../Components/ParTipoIdentificacion";
import ParTipoIdentificacionView from "../Components/ParTipoIdentificacionView";
import { ParCodigoTransaccion } from "../Components/ParCodigoTransaccion";
import ParCodigoTransaccionView from "../Components/ParCodigoTransaccionView";
import { ParEmpresa } from "../Components/ParEmpresa";
import ParEmpresaView from "../Components/ParEmpresaView";


export const routes =[
    {
        path: "/Dashboard/ParIndex/ParParentezco",
        component: ParParentezco,
    },
    {
        path: "/Dashboard/ParIndex/ParTipoCambio",
        component: ParTipoCambio,
    },
    {
        path: "/Dashboard/ParIndex/ParTipoCambioView",
        component: ParTipoCambioView,
    },
    {
        path: "/Dashboard/ParIndex/ParEmisorTarjeta",
        component: ParEmisorTarjeta,
    },
    {
        path: "/Dashboard/ParIndex/ParPeriodicidad",
        component: ParPeriodicidad,
    },
    {
        path: "/Dashboard/ParIndex/ParDiocesis",
        component: ParDiocesis,
    },
    {
        path: "/Dashboard/ParIndex/ParDistrito",
        component: ParDistrito,
    },
    {
        path: "/Dashboard/ParIndex/ParEstadoCivil",
        component: ParEstadoCivil,
    },
    {
        path: "/Dashboard/ParIndex/ParMoneda",
        component: ParMoneda,
    },
    {
        path: "/Dashboard/ParIndex/ParMonedaView",
        component: ParMonedaView,
    },
    {
        path: "/Dashboard/ParIndex/ParTipoidentificacion",
        component: ParTipoIdentificacion,
    },
    {
        path: "/Dashboard/ParIndex/ParTipoidentificacionView",
        component: ParTipoIdentificacionView,
    },
    {
        path: "/Dashboard/ParIndex/ParCodigoTransaccion",
        component: ParCodigoTransaccion,
    },
    {
        path: "/Dashboard/ParIndex/ParCodigoTransaccionView",
        component: ParCodigoTransaccionView,
    }, 
    {
        path: "/Dashboard/ParIndex/ParEmpresa",
        component: ParEmpresa,
    },
    {
        path: "/Dashboard/ParIndex/ParEmpresaView",
        component: ParEmpresaView,
    },                              
]