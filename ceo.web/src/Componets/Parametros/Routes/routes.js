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
import { ParDistrito } from "../Components/ParDistrito";
import ParDistritoView from "../Components/ParDistritoView";
import { ParDiocesis } from "../Components/ParDiocesis";
import ParDiocesisView from "../Components/ParDiocesisView";
import { ParEmisorTarjeta } from "../Components/ParEmisorTarjeta";
import ParEmisorTarjetaView from "../Components/ParEmisorTarjetaView";
import { ParEstadoCivil } from "../Components/ParEstadoCivil";
import ParEstadoCivilView from "../Components/ParEstadoCivilView";
import { ParPeriodicidad } from "../Components/ParPeriodicidad";
import ParPeriodicidadView from "../Components/ParPeriodicidadView";
import { ParParentezco } from "../Components/ParParentezco";
import ParParetezcoView from "../Components/ParParentezcoView";


export const routes =[
    {
        path: "/Dashboard/ParIndex/ParTipoCambio",
        component: ParTipoCambio,
    },
    {
        path: "/Dashboard/ParIndex/ParTipoCambioView",
        component: ParTipoCambioView,
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
    {
        path: "/Dashboard/ParIndex/ParDiocesis",
        component: ParDiocesis,
    },
    {
        path: "/Dashboard/ParIndex/ParDistrito",
        component: ParDistrito,
    },
    {
        path: "/Dashboard/ParIndex/ParEmisorTarjeta",
        component: ParEmisorTarjeta,
    },
    {
        path: "/Dashboard/ParIndex/ParDiocesisView",
        component: ParDiocesisView,
    },
    {
        path: "/Dashboard/ParIndex/ParDistritoView",
        component: ParDistritoView,
    },
    {
        path: "/Dashboard/ParIndex/ParEmisorTarjetaView",
        component: ParEmisorTarjetaView,
    },
    {
        path: "/Dashboard/ParIndex/ParEstadoCivil",
        component: ParEstadoCivil,
    },
    {
        path: "/Dashboard/ParIndex/ParEstadoCivilView",
        component: ParEstadoCivilView,
    },  
    {
        path: "/Dashboard/ParIndex/ParPeriodicidad",
        component: ParPeriodicidad,
    },
    {
        path: "/Dashboard/ParIndex/ParPeriodicidadView",
        component: ParPeriodicidadView,
    },
    {
        path: "/Dashboard/ParIndex/ParParentezco",
        component: ParParentezco,
    },
    {
        path: "/Dashboard/ParIndex/ParParentezcoView",
        component: ParParetezcoView,
    },                          
]