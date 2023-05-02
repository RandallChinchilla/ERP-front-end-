import { PasInstrumento } from "../Components/PasInstrumento";
import { PasMaestro } from "../Components/PasMaestro";
import { PasMaestroView } from "../Components/PasMaestroView";
import PasInstrumentoView from "../Components/PasInstrumentoView";
import PasTasaPlazoView from "../Components/PasTasaPlazoView";
import { PasTasaPlazo } from "../Components/PasTasaPlazo";
import PasAportanteView from "../Components/PasAportanteView";
import { PasAportante } from "../Components/PasAportante";
import { PasMaestroNewBck } from "../Components/PasMaestroNewBck";
import PasTipoInstrumentoView from "../Components/PasTipoInstrumentoView";
import { PasTipoInstrumento } from "../Components/PasTipoInstrumento";
import { PasTransaccion } from "../Components/PasTransaccion";
import PasTransaccionView from "../Components/PasTransaccionView";
import PasOrigenAportanteView from "../Components/PasOrigenAportanteView";
import { PasOrigenAportante } from "../Components/PasOrigenAportante";
import { PasAutorizado } from "../Components/PasAutorizado";
import PasAutorizadoView from "../Components/PasAutorizadoView";
import { PasPersonaJuridicaCanonica } from "../Components/PasPersonaJuridicaCanonica";
import PasPersonaJuridicaCanonicaView from "../Components/PasPersonaJuridicaCanonicaView";
import { PasCuenta } from "../Components/PasCuenta";
import PasCuentaView from "../Components/PasCuentaView";
import { PasPortafolio } from "../Components/PasPortafolio";
import PasPortafolioView from "../Components/PasPortafolioView";

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
    path: "/Dashboard/pasindex/PasOrigenAportanteView",
    component: PasOrigenAportanteView,
  },
  {
    path: "/Dashboard/pasindex/PasOrigenAportante",
    component: PasOrigenAportante,
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
    path: "/Dashboard/pasindex/PasTransaccion",
    component: PasTransaccion,
  },
  {
    path: "/Dashboard/pasindex/PasTransaccionView",
    component: PasTransaccionView,
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
    path: "/Dashboard/pasindex/PasAutorizadoView",
    component: PasAutorizadoView,
  },
  {
    path: "/Dashboard/pasindex/PasAutorizado",
    component: PasAutorizado,
  },
  {
    path: "/Dashboard/pasindex/PasPersonaJuridicaCanonica",
    component: PasPersonaJuridicaCanonica,
  },
  {
    path: "/Dashboard/pasindex/PasPersonaJuridicaCanonicaView",
    component: PasPersonaJuridicaCanonicaView,
  },
  {
    path: "/Dashboard/pasindex/PasCuenta",
    component: PasCuenta,
  },
  {
    path: "/Dashboard/pasindex/PasCuentaView",
    component: PasCuentaView,
  },
  {
    path: "/Dashboard/pasindex/PasPortafolio",
    component: PasPortafolio,
  },
  {
    path: "/Dashboard/pasindex/PasPortafolioView",
    component: PasPortafolioView,
  },
];
