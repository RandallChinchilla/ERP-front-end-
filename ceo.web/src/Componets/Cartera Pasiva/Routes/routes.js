import { PasAportante } from "../Components/PasAportante";
import { PasAportanteView } from "../Components/PasAportanteView";
import { PasInstrumento } from "../Components/PasInstrumento";
import { PasInstrumentoView } from "../Components/PasInstrumentoView";
import { PasMaestro } from "../Components/PasMaestro";
import { PasMaestroView } from "../Components/PasMaestroView";
import PasOrigenFondos from "../Components/PasOrigenFondos";
import PasPortafolio from "../Components/PasPortafolio";
import { PasTasaPlazo } from "../Components/PasTasaPlazo";
import { PasTasaPlazoView } from "../Components/PasTasaPlazoView";
import PasTipoInstrumento from "../Components/PasTipoInstrumento";
import PasOrigenAportante from "../Components/PasOrigenAportante";

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
    path: "/Dashboard/pasindex/PasTasaPlazo",
    component: PasTasaPlazo,
  },
  {
    path: "/Dashboard/pasindex/PasTasaPlazoView",
    component: PasTasaPlazoView,
  },
  {
    path: "/Dashboard/pasindex/PasMaestroView",
    component: PasMaestroView,
  },
  {
    path: "/Dashboard/pasindex/PasMaestro",
    component: PasMaestro,
  },
];
