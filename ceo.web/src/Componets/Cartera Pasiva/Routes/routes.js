import { PasInstrumento } from "../Components/PasInstrumento";
import { PasMaestro } from "../Components/PasMaestro";
import { PasMaestroView } from "../Components/PasMaestroView";
import PasOrigenFondos from "../Components/PasOrigenFondos";
import PasPortafolio from "../Components/PasPortafolio";
import PasOrigenAportante from "../Components/PasOrigenAportante";
import PasInstrumentoView from "../Components/PasInstrumentoView";
import PasAutorizadoView from "../Components/PasAutorizadoView";
import { PasAutorizado } from "../Components/PasAutorizado";
import PasTasaPlazoView from "../Components/PasTasaPlazoView";
import { PasTasaPlazo } from "../Components/PasTasaPlazo";
import PasAportanteView from "../Components/PasAportanteView";
import { PasAportante } from "../Components/PasAportante";
import { PasMaestroNewBck } from "../Components/PasMaestroNewBck";
import PasTipoInstrumentoView from "../Components/PasTipoInstrumentoView";
import { PasTipoInstrumento } from "../Components/PasTipoInstrumento";
import { PasTransaccion } from "../Components/PasTransaccion";
import PasTransaccionView from "../Components/PasTransaccioneView";

export const routes = [
  {
    path: "/Dashboard/pasindex/PasAportanteView",
    component: PasAportanteView,
  },
  {
    path: "/Dashboard/pasindex/PasAportante",
    component: PasAportante,
  },
  {
    path: "/Dashboard/pasindex/PasPortafolio",
    component: PasPortafolio,
  },
  {
    path: "/Dashboard/pasindex/PasTipoInstrumentoView",
    component: PasTipoInstrumentoView,
  },
  {
    path: "/Dashboard/pasindex/PasTipoInstrumento",
    component: PasTipoInstrumento,
  },
  {
    path: "/Dashboard/pasindex/PasInstrumento",
    component: PasInstrumento,
  },
  {
    path: "/Dashboard/pasindex/PasInstrumentoView",
    component: PasInstrumentoView,
  },
  {
    path: "/Dashboard/pasindex/PasOrigenAportante",
    component: PasOrigenAportante,
  },
  {
    path: "/Dashboard/pasindex/PasOrigenFondos",
    component: PasOrigenFondos,
  },
  {
    path: "/Dashboard/pasindex/PasTasaPlazoView",
    component: PasTasaPlazoView,
  },
  {
    path: "/Dashboard/pasindex/PasTasaPlazo",
    component: PasTasaPlazo,
  },
  {
    path: "/Dashboard/pasindex/PasMaestroView",
    component: PasMaestroView,
  },
  {
    path: "/Dashboard/pasindex/PasMaestro",
    component: PasMaestro,
  },
  {
    path: "/Dashboard/pasindex/PasMaestroNewBck",
    component: PasMaestroNewBck,
  },
  {
    path: "/Dashboard/pasindex/PasAutorizadoView",
    component: PasAutorizadoView,
  },
  {
    path: "/Dashboard/pasindex/PasAutorizado",
    component: PasAutorizado,
  },
  {
    path: "/Dashboard/pasindex/PasTransaccion",
    component: PasTransaccion,
  },
  {
    path: "/Dashboard/pasindex/PasTransaccionView",
    component: PasTransaccionView,
  },
];
